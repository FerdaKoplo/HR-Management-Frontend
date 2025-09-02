import { Employee } from "@/interface/employee"
import axios from "axios"

export const showAllEmployee = async () : Promise<Employee[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/employees`)
    return response.data
}

export const createEmployee = async (employee: Partial<Employee>): Promise<Employee> => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/employees`, employee)
    return response.data
}

export const updateEmployee = async (id: number, employee: Partial<Employee>): Promise<Employee> => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/employees/${id}`, employee)
    return response.data
}

export const deleteEmployee = async (id: number): Promise<boolean> => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/employees/${id}`)
    return response.data
}

export const getEmployeeById = async (id: number): Promise<Employee> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/employees/${id}`);
    return response.data
}