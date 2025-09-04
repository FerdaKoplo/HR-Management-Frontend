import { Employee } from '@/interface/employee'
import { createEmployee, deleteEmployee, showAllEmployee, updateEmployee } from '@/service/employee.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'

export const useEmployee = () => {

    const renderAllEmployee = useQuery({
        queryKey: ['employees'],
        queryFn: showAllEmployee,
        staleTime: 1000 * 60 * 5,
    })

    const addEmployee = useMutation({
        mutationFn: createEmployee
    })

    const updateEmployeeMutation = useMutation({
        mutationFn: ({ id, employee }: { id: number; employee: Partial<Employee> }) =>
            updateEmployee(id, employee),
    })

    const deleteEmployeeMutation = useMutation({
        mutationFn: (id: number) => deleteEmployee(id),
    })

    return {
        renderAllEmployee,
        addEmployee,
        updateEmployeeMutation,
        deleteEmployeeMutation
    }
}

export default useEmployee