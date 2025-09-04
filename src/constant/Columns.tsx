import { Column } from "@/components/table/DataTable"
import RowActions from "@/components/table/RowAction"
import { JobTitleDetail, UpdateJobTitleInput } from "@/interface/job-title"
import { jobTitleActions } from "./RowAction"

export type JobTitleRow = {
  id: number
  title: string
}

export const columns: Column<JobTitleRow>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Job Title', accessor: 'title' },
     {
        header: "Actions",
        Cell: (row: JobTitleRow) => <RowActions rowId={row.id} actions={jobTitleActions(row)} />,
    },
]