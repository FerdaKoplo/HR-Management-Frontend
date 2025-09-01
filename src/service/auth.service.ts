import { api } from "@/api/api";
import { LoginFormInputs, LoginResponse } from "@/interface/auth";
import axios from "axios";

export const login = async (form: LoginFormInputs) : Promise<LoginResponse> => {
    const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form,
    );
    return response.data;
}