import { api } from "@/api/api"
import { Employee } from "@/interface/employee"

export const showAllEmployee = async () : Promise<Employee[]> => {
    const response = await api.get(`/employee`)
    return response.data
}

export const createEmployee = async (employee: Partial<Employee>): Promise<Employee> => {
    const response = await api.post(`/employee`, employee)
    return response.data
}

export const updateEmployee = async (id: number, employee: Partial<Employee>): Promise<Employee> => {
    const response = await api.put(`/employee/${id}`, employee)
    return response.data
}

export const deleteEmployee = async (id: number): Promise<boolean> => {
    const response = await api.delete(`/employee/${id}`)
    return response.data
}

export const getEmployeeById = async (id: number): Promise<Employee> => {
    const response = await api.get(`/employee/${id}`);
    return response.data
}

export const getEmployeeSalaries = async (id: number): Promise<Employee[]> => {
  const response = await api.get(`/employee/${id}/salaries`)
  return response.data
}