import { loginSchema } from "@/validation/schema"
import z from "zod"

export interface User {
  id: number
  name: string
  email: string
}

export type AuthState = {
  user: User | null
  token: string | null
  setAuth:(response: { user: User; token: string }) => void
  logout: () => void
  hydrate: () => void
}

export type LoginFormInputs = z.infer<typeof loginSchema>

export interface LoginResponse {
  result: {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
      employeeId: number | null;
      role: number;
    };
  };
}
