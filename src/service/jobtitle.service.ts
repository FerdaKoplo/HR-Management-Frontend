import { api } from "@/api/api"
import { Employee } from "@/interface/employee"
import { AssignJobEmployeeInput, CreateJobTitleInput, JobTitle, JobTitleDetail, UpdateJobTitleInput } from "@/interface/job-title"

export const showAllJobTitles = async (page: number = 1, pageSize: number = 10) => {
    const response = await api.get(`/jobtitle`, {
        params: { page, pageSize }
    })
    return response.data
}

export const getJobTitleById = async (id: number): Promise<JobTitleDetail> => {
    const response = await api.get(`/jobtitle/${id}`)
    return response.data
}

export const createJobTitle = async (jobTitle: CreateJobTitleInput): Promise<JobTitleDetail> => {
    const response = await api.post(`/jobtitle`, jobTitle)
    return response.data
}

export const updateJobTitle = async (id: number, jobTitle: UpdateJobTitleInput): Promise<JobTitleDetail> => {
    const response = await api.put(`/jobtitle/${id}`, jobTitle)
    return response.data
}

export const deleteJobTitle = async (id: number): Promise<boolean> => {
    const response = await api.delete(`/jobtitle/${id}`)
    return response.data
}

export const assignEmployeeToJobTitle = async (
    jobTitleId: number,
    data: AssignJobEmployeeInput
): Promise<void> => {
    await api.post(`/jobtitle/${jobTitleId}/assign-employee`, data)
}

export const removeEmployeeFromJobTitle = async (
    data: AssignJobEmployeeInput
): Promise<void> => {
    await api.post(`/jobtitle/remove-employee`, data)
}

export const getEmployeesByJobTitle = async (id: number): Promise<Employee[]> => {
    const response = await api.get(`/jobtitle/${id}/employees`)
    return response.data
}

export const getRecruitmentsByJobTitle = async (id: number): Promise<any[]> => {
    const response = await api.get(`/jobtitle/${id}/recruitments`)
    return response.data
}