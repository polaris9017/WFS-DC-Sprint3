import {httpClient} from "./http";

interface CartParams {
    book_id: number;
    amount: number;
}

export const addCart = async (params: CartParams) => {
    const response = await httpClient.post('/cart', params);
    return response.data;
};