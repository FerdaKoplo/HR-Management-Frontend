import DataTable, { Column } from '@/components/table/DataTable'
import { Button } from '@/components/ui/button'
import { columns, JobTitleRow } from '@/constant/Columns'
import useJobTitle from '@/hooks/useJobTitle'
import { JobTitle } from '@/interface/job-title'
import AdminLayout from '@/layout/admin-layout'
import React from 'react'
import { Link } from 'react-router-dom'





const breadcrumbs = [
  { name: 'Job TItle', href: '/job-title' },
]


const JobTitleIndex = () => {

  const { renderAllJobTItle, page, setPage, pageSize } = useJobTitle()



  const tableData: JobTitleRow[] = renderAllJobTItle.data?.data?.map((job: JobTitle) => ({
  id: job.id,
  title: job.title,
})) ?? []

  return (
    <AdminLayout header={
      <div className='flex items-center justify-between'>
        <h1 className="text-3xl font-bold text-gray-900">
          Job Title
        </h1>
        <Link to={'/job-title/create'} >
          <Button>
            + Add Job Title
          </Button>
        </Link>
      </div>
    } breadcrumbs={breadcrumbs}>

      <div>
        <DataTable  totalPages={renderAllJobTItle.data?.totalPages ?? 1} page={page} setPage={setPage} data={tableData} columns={columns} />
      </div>
    </AdminLayout>
  )
}

export default JobTitleIndex