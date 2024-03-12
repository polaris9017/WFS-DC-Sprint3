import {httpClient, requestHandler} from "./http";
import {Order, OrderItemDetail, OrderSheet} from "../models/order.model";

export const order = async (orderData: OrderSheet) => await requestHandler<OrderSheet>('post', '/order', orderData);

export const fetchOrderList = async () => await requestHandler('get', '/order');

export const fetchOrder = async (orderId: number) => await requestHandler('get', `/order/${orderId}`);