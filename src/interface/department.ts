
import { Employee } from "./employee"

export interface Department {
  id: number
  name: string
}

export interface DepartmentDetail {
  id: number
  name: string
  manager?: Employee | null
  employees?: Employee[]
}

export interface CreateDepartment {
  name: string
  managerId?: number | null
}

export interface UpdateDepartment {
  name: string
  managerId?: number | null
}


export interface AssignEmployee {
  employeeId: number
}

export interface AssignManager {
  managerId: number
}