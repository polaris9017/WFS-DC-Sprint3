import {httpClient} from "./http";
import {Book, BookDetail} from "../models/book.model";
import {Pagination} from "../models/pagination.model";

interface FetchBooksParams {
    catID?: number;
    isNew?: boolean;
    currentPage?: number;
    limit: number;
}

interface FetchBooksResponse {
    books: Book[];
    pagination: Pagination;

}

export const fetchBooks = async (params: FetchBooksParams) => {
    try {
        const response = await httpClient.get<FetchBooksResponse>('/books', {params: params});
        return response.data;
    } catch (e) {
        return {
            books: [],
            pagination: {totalCount: 0, currentPage: 1}
        };
    }
}

export const fetchBook = async (bookId: string) => {
    const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
    return response.data;
}

export const likeBook = async (bookId: number) => {
    const response = await httpClient.post<BookDetail>(`/likes/${bookId}`);
    return response.data;
}

export const revertLikeBook = async (bookId: number) => {
    const response = await httpClient.delete<BookDetail>(`/likes/${bookId}`);
    return response.data;
}