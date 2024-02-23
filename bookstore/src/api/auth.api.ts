import {httpClient} from "./http";
import {SignupProps} from "../pages/Signup";

export const signup = async (userData: SignupProps) => {
    const response = await httpClient.post('/signup', userData);
    return response.data;
}