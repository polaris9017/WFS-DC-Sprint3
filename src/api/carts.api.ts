import {httpClient} from "./http";
import {Cart} from "../models/cart.model";

interface CartParams {
    id: number;
    amount: number;
}

export const addCart = async (params: CartParams) => {
    const response = await httpClient.post('/cart', params);
    return response.data;
};

export const fetchCart = async () => {
    const response = await httpClient.get<Cart[]>('/cart');
    return response.data;
};

export const deleteCart= async (cartId: number) => {
    const response = await httpClient.delete(`/cart/${cartId}`);
    return response.data;
}