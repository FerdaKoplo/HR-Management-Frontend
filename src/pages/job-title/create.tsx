import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useJobTitle from '@/hooks/useJobTitle'
import { CreateJobTitleInput } from '@/interface/job-title'
import AdminLayout from '@/layout/admin-layout'
import { createJobTitleSchema } from '@/validation/schema'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'


const breadcrumbs = [
  { name: 'Job TItle', href: '/job-title' },
  { name: "Add Job Title" }
]


const JobTitleCreate = () => {

  const { addJobTitleMutation, renderAllJobTItle } = useJobTitle()
  const [form, setForm] = useState<CreateJobTitleInput>({
    title: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const parsed = createJobTitleSchema.safeParse(form)
    if (!parsed.success) {
      toast.error("Invalid input, please check your data!");
      return
    }

    addJobTitleMutation.mutate(parsed.data, {
      onSuccess: () => {
        toast.success("Job Title created successfully!")
        renderAllJobTItle.refetch()
      },
      onError: (err: any) => {
        console.error("❌ Failed to create Job Title:", err)
        toast.error(err?.response?.data?.message || "Failed to create job title");
      },
    })
  }

  return (
    <AdminLayout header={
      <h1 className="text-3xl font-bold text-gray-900">
        Add Job Title
      </h1>

    } breadcrumbs={breadcrumbs}>

      <form onSubmit={handleSubmit} className="max-w-xl w-full">
        <Card className="shadow-lg border  border-gray-200">
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title Name</Label>
              <Input
                id="title"
                name="title"
                value={form.title}
                placeholder="Insert job title name..."
                onChange={handleChange}
                className='focus-visible:border-blue-400 focus-visible:border-2 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all'
              />
              <p className="text-sm text-gray-500">
                Example: "Software Engineer", "Product Manager", "HR Specialist"
              </p>
            </div>
            <div className='space-y-5'>
              <Button
                className="w-full   bg-blue-400 text-white  hover:bg-blue-500 transition"
                type="submit"
              >
                 <Plus size={18} /> Add Job Title
              </Button>
              <Link to={'/job-title'}>
                <Button
                  className="w-full bg-white border-2 border-blue-400 text-blue-400  hover:bg-blue-50 transition"
                >
                  Return To Job Title
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </AdminLayout>
  )
}

export default JobTitleCreate