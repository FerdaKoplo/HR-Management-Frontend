import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

interface Props {
  path?: string
  children: React.ReactNode
  submenu?: { label: string; path: string }[]
  onClick?: () => void
}

const SidebarItem: React.FC<Props> = ({ children, path, onClick, submenu }) => {
  const location = useLocation()
  const isActive = path ? location.pathname === path : false
  const [open, setOpen] = useState<boolean>(false)

  if (submenu) {
    return (
      <div className="w-full">
        <button
          onClick={() => setOpen(!open)}
          className={`
            flex px-3 py-2 rounded-lg items-center justify-around w-full text-sm 
            ${isActive || submenu.some(s => location.pathname === s.path)
              ? 'bg-gradient-to-r from-blue-500 to-sky-400 font-medium text-white'
              : 'text-white hover:bg-blue-400 hover:text-white transition-all'}
          `}
        >
          <span className="flex items-center gap-2">{children}</span>
          <div className={`font-bold flex py-2 px-2 rounded-full transition-all duration-300 ease-in-out ${open ? 'rotate-180' : 'rotate-90'
            }`}>
            <ChevronUp size={16} />
          </div>
        </button>

        {open && (
          <div className="ml-10 my-3 flex flex-col space-y-1 relative">
            {/* vertical */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-400" />

            {submenu.map((item, index) => {
              const subActive = location.pathname === item.path
              return (
                <div key={index} className={` flex items-center relative`}>
                  {/* horizontal */}
                  <div className="absolute left-0 top-1/2 w-4 h-px bg-slate-400 -translate-y-px" />

                  <Link
                    to={item.path}
                    className={`
                      ml-6 px-3 py-2 text-sm rounded-md w-full transition-colors
                      ${subActive
                        ? 'bg-slate-500 text-white'
                        : 'text-white hover:bg-blue-400 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={path || '#'}
      onClick={onClick}
      className={`
                flex items-center justify-center
                px-3 py-3 text-sm rounded-lg
                ${isActive
          ? 'bg-gradient-to-r from-blue-500 to-sky-400 font-medium text-white'
          : 'text-white hover:bg-blue-400 hover:text-white transition-all'}
                max-w-2xl
            `}
    >
      {children}
    </Link>
  )
}

export default SidebarItem