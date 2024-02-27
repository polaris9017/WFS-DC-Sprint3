import {httpClient} from "./http";
import {Book} from "../models/book.model";
import {Pagination} from "../models/pagination.model";

interface FetchBooksParams  {
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