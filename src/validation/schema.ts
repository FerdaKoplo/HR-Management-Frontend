import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "This field has to be filled." })
    .email({ message: "This field has to be a valid email." }),
  password: z.string().min(1, { message: "This field has to be filled." })
})


export const employeeSchema = z.object({
  
})