import {httpClient} from "./http";
import {OrderSheet} from "../models/order.model";

export const order= async (orderData: OrderSheet) => {
    const response = await httpClient.post('/order', orderData);
    return response.data;
};