import AdminLayout from '@/layout/admin-layout'
import React from 'react'

const breadcrumbs = [
    { name: 'Dashboard', href: '/dashboard' },
]

const Dashboard = () => {
    return (
        <AdminLayout
            header={
                <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>}
            breadcrumbs={breadcrumbs}>
        <div>
            TEST
        </div>
        </AdminLayout>
    )
}

export default Dashboard