export interface Employee {
  id: number
  name: string
  departmentId: number
  jobTitleId: number
  department: {
    id: number
    name: string
    managerId?: number | null
    manager?: Employee | null
  }
  jobTitle: {
    id: number
    title: string
  }
}

export interface CreateEmployeeInput {
  name: string
  departmentId: number
  jobTitleId: number
  email: string
  password: string
}