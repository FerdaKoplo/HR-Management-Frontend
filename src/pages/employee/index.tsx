import { Button } from '@/components/ui/button'
import useEmployee from '@/hooks/useEmployee'
import AdminLayout from '@/layout/admin-layout'
import React from 'react'
import { Link } from 'react-router-dom'

const breadcrumbs = [
    { name: 'Employee', href: '/employee' },
]


const EmployeeIndex = () => {

    const { renderAllEmployee } = useEmployee()
    const { data, isLoading, isError } = renderAllEmployee


    return (
        <AdminLayout header={
            <div className='flex items-center justify-between'>
                <h1 className="text-3xl font-bold text-gray-900">
                    Employee
                </h1>
                <Link to={'/employee/create'} >
                    <Button>
                        + Add Employee
                    </Button>
                </Link>
            </div>
        } breadcrumbs={breadcrumbs}>

        </AdminLayout>
    )
}

export default EmployeeIndex