import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Book} from "../models/book.model";
import {Pagination} from "../models/pagination.model";
import {fetchBooks} from "../api/books.api";
import {queryString} from "../constants/queryString";
import {LIMIT} from "../constants/Pagination";

export const useBooks = () => {
    const location = useLocation();

    const [books, setBooks] = useState<Book[]>([]);
    const [pagination, setPagination] = useState<Pagination>({totalCount: 0, currentPage: 1});
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        fetchBooks({
            catID: params.get(queryString.CATEGORY_ID) ? Number(params.get(queryString.CATEGORY_ID)) : undefined
            , isNew: params.get(queryString.IS_NEW) ? true : undefined
            , limit: LIMIT
            , currentPage: params.get(queryString.PAGE) ? Number(params.get(queryString.PAGE)) : 1
        }).then(({books, pagination}) => {
            setBooks(books);
            setPagination(pagination);
            setIsEmpty(books.length === 0);
        });
    }, [location.search]);

    return {books, pagination, isEmpty};
};