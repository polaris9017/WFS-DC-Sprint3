export interface Order {
    id: number;
    created_at: string;
    address: string;
    recipient: string;
    phone: string;
    total_price: number;
    total_amount: number;
    book_title: string;
}

export interface Delivery {
    address: string;
    recipient: string;
    phone: string;
}

export interface OrderSheet {
    items: number[];
    totalPrice: number;
    totalAmount: number;
    topBookTitle: string;
    delivery: Delivery
}

export interface OrderItemDetail {
    bookId: number;
    title: string;
    author: string;
    price: number;
    amount: number;
}

export interface OrderListItem extends Order {
    detail?: OrderItemDetail[];
}