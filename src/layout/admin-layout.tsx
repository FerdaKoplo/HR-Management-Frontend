import React from 'react'


interface Props {
    header? : React.ReactNode
    children?: React.ReactNode
    breadcrumbs?: { name: string; href?: string }[]
}

const AdminLayout : React.FC<Props> = ( {header, children, breadcrumbs} ) => {
  return (
    <div className='min-h-screen bg-zinc-50'>

    </div>
  )
}

export default AdminLayout