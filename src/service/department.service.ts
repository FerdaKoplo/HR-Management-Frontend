import { AssignEmployee, AssignManager, CreateDepartment, Department, DepartmentDetail, UpdateDepartment } from "@/interface/department"
import { Employee } from "@/interface/employee"
import axios from "axios"

export const showAllDepartments = async (): Promise<Department[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/department`)
  return response.data
}

export const getDepartmentById = async (id: number): Promise<DepartmentDetail> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/department/${id}`)
  return response.data
}

export const createDepartment = async (department: CreateDepartment): Promise<DepartmentDetail> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/department`, department)
  return response.data
}

export const updateDepartment = async (id: number, department: UpdateDepartment): Promise<DepartmentDetail> => {
  const response = await axios.put(`${import.meta.env.VITE_API_URL}/department/${id}`, department)
  return response.data
}

export const deleteDepartment = async (id: number): Promise<boolean> => {
  const response = await axios.delete(`${import.meta.env.VITE_API_URL}/department/${id}`)
  return response.data
}

export const assignEmployeeToDepartment = async (
  departmentId: number,
  data: AssignEmployee
): Promise<void> => {
  await axios.post(`${import.meta.env.VITE_API_URL}/department/${departmentId}/assign-employee`, data)
}

export const assignManagerToDepartment = async (
  departmentId: number,
  data: AssignManager
): Promise<void> => {
  await axios.post(`${import.meta.env.VITE_API_URL}/department/${departmentId}/assign-manager`, data)
}

export const getEmployeesByDepartment = async (id: number): Promise<Employee[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/department/${id}/employees`)
  return response.data
}