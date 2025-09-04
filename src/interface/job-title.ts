import { Employee } from "./employee"

export interface JobTitle {
    id: number
    title: string
}

export interface JobTitleDetail extends JobTitle {
    employees?: Employee[]
}

export interface CreateJobTitleInput {
    title: string
}

export interface UpdateJobTitleInput {
    title: string
}

export interface AssignJobEmployeeInput {
    employeeId: number
}