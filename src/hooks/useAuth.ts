import { create } from 'zustand'
import Cookies from "js-cookie";
import { AuthState, User } from '@/interface/auth';

export const useAuth = create<AuthState>((set) => {
    const token = Cookies.get("token") || null
    let user: User | null = null
    try {
        user = Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null
    } catch {
        console.error("Failed to parse user from cookies", user)
    }

    return {
        user,
        token,
        setAuth: (response: { user: User; token: string }) => {
            Cookies.set("token", response.token ?? "", { expires: 2 })
            Cookies.set("user", JSON.stringify(response.user), { expires: 2 })
            set({ user: response.user, token: response.token })
        },
        logout: () => {
            Cookies.remove("token")
            Cookies.remove("user")
            set({ user: null, token: null })
        },
        hydrate: () => {
            const token = Cookies.get("token") || null
            let user: User | null = null
            try {
                user = Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null
            } catch { }
            set({ token, user })
        },
    }
})
