import { UpdateJobTitleInput } from "@/interface/job-title";

export const jobTitleActions = (row: UpdateJobTitleInput) => [
    { label: "Edit", href: "/job-title/:id/edit" },
]
