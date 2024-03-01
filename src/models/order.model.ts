export interface Order {
    id: number;
    created_at: string;
    address: string;
    recipient: string;
    phone: string;
    total_price: string;
    total_amount: number;
    book_title: string;
}