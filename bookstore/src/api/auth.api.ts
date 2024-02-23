import {httpClient} from "./http";
import {SignupProps} from "../pages/Signup";

export const signup = async (userData: SignupProps) => {
    const response = await httpClient.post('/signup', userData);
    return response.data;
};

export const resetRequest = async (userData: SignupProps) => {
    const response = await httpClient.post('/reset-password', userData);
    return response.data;
};

export const resetPassword = async (userData: SignupProps) => {
    const response = await httpClient.put('/reset-password', userData);
    return response.data;
};

interface LoginResponse {
    token: string;
}

export const signin = async (userData: SignupProps) => {
    const response = await httpClient.post<LoginResponse>('/signin', userData);
    return response.data;
};