import { JobTitle, UpdateJobTitleInput } from '@/interface/job-title'
import { createJobTitle, deleteJobTitle, showAllJobTitles, updateJobTitle } from '@/service/jobtitle.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

const useJobTitle = () => {

    const [page, setPage] = useState<number>(1)
    const pageSize = 10
    const renderAllJobTItle = useQuery({
        queryKey: ['jobtitle', page],
        queryFn: () => showAllJobTitles(page, pageSize),
        staleTime: 1000 * 60 * 5,
    })

    const addJobTitleMutation = useMutation({
        mutationFn: createJobTitle
    })

    const updateJobTitleMutation = useMutation({
        mutationFn: ({ id, jobTitle }: { id: number; jobTitle: UpdateJobTitleInput }) =>
            updateJobTitle(id, jobTitle),
    })

    const deleteJobTitleMutation = useMutation({
        mutationFn: (id: number) => deleteJobTitle(id),
    })

    return {
        page,
        setPage,
        pageSize,
        renderAllJobTItle,
        addJobTitleMutation,
        updateJobTitleMutation,
        deleteJobTitleMutation
    }
}

export default useJobTitle