import {httpClient} from "./http";
import {Order, OrderItemDetail, OrderSheet} from "../models/order.model";

export const order = async (orderData: OrderSheet) => {
    const response = await httpClient.post('/order', orderData);
    return response.data;
};

export const fetchOrderList = async () => {
    const response = await httpClient.get<Order[]>('/order');
    return response.data;
};

export const fetchOrder = async (orderId: number) => {
    const response = await httpClient.get<OrderItemDetail[]>(`/order/${orderId}`);
    return response.data;
};