import ResponsiveSidebar from '@/components/ResponsiveSidebar';
import SidebarItem from '@/components/SidebarItem';
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react'
import { IoMdAnalytics } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { BsFillPeopleFill } from "react-icons/bs";

interface Props {
  header?: React.ReactNode
  children?: React.ReactNode
  breadcrumbs?: { name: string; href?: string }[]
}

const AdminLayout: React.FC<Props> = ({ header, children, breadcrumbs }) => {
  
  const route = useNavigate()
  
  return (
    <div className='min-h-screen bg-zinc-50'>
      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 sm:px-6">
            <div className='space-y-2'>
              {breadcrumbs && (
                <Breadcrumb className='flex items-center gap-4'>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {crumb.href ? (
                          <a href={crumb.href} className="text-textSecondary">
                            {crumb.name}
                          </a>
                        ) : (
                          <span>{crumb.name}</span>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator className='flex' />
                      )}
                    </React.Fragment>
                  ))}
                </Breadcrumb>
              )}
              {header}
            </div>
          </div>
        </header>
      )}
      <div className="flex">
        <ResponsiveSidebar>
          <SidebarItem path="/dashboard" >
            <div className='flex items-center gap-5'>
              <IoMdAnalytics size={20} />
              <span>Dashboard</span>
            </div>
          </SidebarItem>

          <SidebarItem submenu={[
            { label: 'Attendance', path: '/attendance' },
            { label: 'All Employee', path: '/employee' },
            { label: 'Salaries', path: '/salary' },
          ]} >
            <div className='flex items-center gap-5'>
               <BsFillPeopleFill size={20} />
              <span>Employee</span>
            </div>
          </SidebarItem>


          <SidebarItem path="/recruitment" >
            <div className='flex items-center gap-5'>
              <IoMdAnalytics size={20} />
              <span>Recruitment</span>
            </div>
          </SidebarItem>
        </ResponsiveSidebar>

        <main className="flex-1 p-6">
          {children}
          <Toaster position="top-right" richColors closeButton />
        </main>
      </div>

    </div>
  )
}

export default AdminLayout