import { useAuth } from "@/hooks/useAuth";
import axios from "axios";


export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5257/api",
    withCredentials: true,
})

api.interceptors.request.use((config) => {

    const { token } = useAuth.getState()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})