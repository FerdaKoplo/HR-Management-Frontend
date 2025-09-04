import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import useEmployee from '@/hooks/useEmployee'
import { CreateEmployeeInput } from '@/interface/employee'
import AdminLayout from '@/layout/admin-layout'
import { createEmployeeSchema } from '@/validation/schema'
import React, { useState } from 'react'
import { toast } from 'sonner'

const breadcrumbs = [
    { name: 'Employee', href: '/employee' },
    { name: 'Create Employee' }
]

const CreateEmployee = () => {

    const { addEmployee, renderAllEmployee } = useEmployee()
    const [form, setForm] = useState<CreateEmployeeInput>({
        name: "",
        email: "",
        password: "",
        departmentId: 0,
        jobTitleId: 0,
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const parsed = createEmployeeSchema.safeParse(form);
        if (!parsed.success) {
            toast.error("Invalid input, please check your data!");
            return;
        }

        addEmployee.mutate(parsed.data, {
            onSuccess: () => {
                toast.success("Employee created successfully!");
                renderAllEmployee.refetch();
            },
            onError: (err: any) => {
                toast.error(err?.response?.data?.message || "Failed to create employee");
            },
        })
    }

    return (
        <AdminLayout header={<h1 className="text-3xl font-bold text-gray-900">
            Create Employee
        </h1>} breadcrumbs={breadcrumbs}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label>Employee Name</Label>
                        <Input
                            name='name'
                            value={form.name}
                            placeholder='Employee Name'
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Employee Email</Label>
                        <Input
                            name='email'
                            value={form.email}
                            placeholder='Employee Email'
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Employee Password</Label>
                        <Input
                            name='password'
                            type='password'
                            value={form.password}
                            placeholder='Employee Password'
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Select>

                        </Select>
                    </div>

                       <div>
                        <Select>
                            
                        </Select>
                    </div>

                    <Button type='submit' >
                        Create
                    </Button>
                </form>
            </div>
        </AdminLayout>
    )
}

export default CreateEmployee