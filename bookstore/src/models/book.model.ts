export interface Book {
    id: number;
    title: string;
    category_id: number;
    img_id: number;
    form: string;
    isbn: string;
    summary: string;
    detail: string;
    author: string;
    pages: number;
    contents: string;
    price: number;
    pub_date: string;
    likes: number;
}

export interface BookDetail extends Book {
    category: string;
    liked: boolean;
}