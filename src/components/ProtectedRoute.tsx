import { useAuth } from '@/hooks/useAuth'
import React, { JSX } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {

    const { token } = useAuth()

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return (
        <>{children}</>
    )
}

export default ProtectedRoute