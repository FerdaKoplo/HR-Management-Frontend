import { showAllEmployee } from '@/service/employee.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useEmployee = () => {
    
    const renderAllEmployee = useQuery({
        queryKey: ['employees'],
        queryFn: showAllEmployee,
        staleTime: 1000 * 60 * 5,
    })

    return {
        renderAllEmployee
    }
}

export default useEmployee