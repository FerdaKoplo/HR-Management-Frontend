import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema } from '@/validation/schema'
import React, { useState } from 'react'
import z from 'zod'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { LoginFormInputs, LoginResponse } from '@/interface/auth'
import { login } from '@/service/auth.service'
import GuestLayout from '@/layout/guest-layout'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const { setAuth } = useAuth()
    const [form, setForm] = useState<LoginFormInputs>({
        email: '',
        password: '',
    })
    const router = useNavigate()

    const mutation = useMutation<LoginResponse, unknown, LoginFormInputs>({
        mutationFn: login,
        onSuccess: (data) => {
            if (data?.result?.token && data?.result?.user) {
                setAuth({ token: data.result.token, user: data.result.user });
            }
            router('/dashboard')
        },
        onError: (error) => {
            console.error("Login failed", error)
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const parsed = loginSchema.safeParse(form)
        if (!parsed.success) {
            toast.error("Fill the form correctly")
            return
        }
        mutation.mutate(form)
    }

    return (
        <GuestLayout>
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col gap-10'>
                    <div className='space-y-2'>
                        <Label className='text-md'>Email</Label>
                        <Input
                            className="focus-visible:border-blue-400 focus-visible:border-2 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all"
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label className='text-md'>Password</Label>
                        <Input 
                            type='password'
                            className='focus-visible:border-blue-400 focus-visible:border-2 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type='submit' className='bg-gradient-to-br cursor-pointer from-blue-500 to-sky-300'>Login</Button>
                </div>
            </form>
        </GuestLayout>
    )
}

export default Login