import {useEffect, useState} from "react";
import {Order, OrderListItem} from "../models/order.model";
import {fetchOrder, fetchOrderList} from "../api/order.api";

export const useOrderList = () => {
    const [orderList, setOrderList] = useState<OrderListItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    useEffect(() => {
        fetchOrderList().then(list => setOrderList(list));
    }, []);

    const selectOrderItem = (id: number) => {
        if (orderList.filter((item) => (item.id === id))[0].detail) {
            setSelectedItem(id);
            return;
        }
        fetchOrder(id).then(order => {
            setSelectedItem(id);
            setOrderList(orderList.map(item => item.id === id ? {...item, detail: order} : item));
        });
    }

    return {orderList, selectedItem, selectOrderItem};
};