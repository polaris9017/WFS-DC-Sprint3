import {useEffect, useState} from "react";
import {Cart} from "../models/cart.model";
import {fetchCart, deleteCart} from "../api/carts.api";

export const useCart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);

    const deleteCartItem = (cartId: number) => {
        deleteCart(cartId).then(() => {
            setCarts(carts.filter((it) => it.cartId !== cartId));
        });
    }

    useEffect(() => {
        fetchCart().then(carts => {
            setCarts(carts);
            setIsEmpty(carts.length === 0);
        });
    }, []);

    return {carts, isEmpty, deleteCartItem};
}