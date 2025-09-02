import AdminLayout from '@/layout/admin-layout'
import React from 'react'

const breadcrumbs = [
    { name: 'Employee', href: '/employee' },
    { name: 'Create Employee' }
]


const Create = () => {
    return (
        <AdminLayout header={<h1 className="text-3xl font-bold text-gray-900">
            Create Employee
        </h1>} breadcrumbs={breadcrumbs}>
            <div>

            </div>
        </AdminLayout>
    )
}

export default Create