import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email field has to be a valid email." }),
  password: z.string().min(1, { message: "Password field has to be filled." })
})

export const createEmployeeSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  departmentId: z.number(),
  jobTitleId: z.number(),
  username: z.string().min(4).max(50),
  password: z.string().min(6),
})



export const createJobTitleSchema = z.object({
  title: z.string().min(2).max(100),
})