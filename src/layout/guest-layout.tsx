import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowForward, IoBookSharp } from 'react-icons/io5'
import { Toaster } from '@/components/ui/sonner'
interface Props {
  children?: React.ReactNode
}

const GuestLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen bg-[var(--color-background)] '>
      <Link to={'/'} className='flex items-center gap-2 text-2xl'>
        <h1 className='font-bold text-4xl text-blue-400 '>HR</h1>
        <h1 className='font-bold text-4xl   text-blue-300'>Login</h1>
      </Link>
      <div className="relative w-full sm:max-w-md mt-6">
        <div className="absolute top-7 left-12 w-full h-full opacity-15 bg-blue-500 rounded-lg"></div>
        <div className="relative px-6 py-4 bg-white shadow-md sm:rounded-lg">
          <Toaster position="top-right" />
          {children}
        </div>
      </div>
    </div>
  )
}

export default GuestLayout