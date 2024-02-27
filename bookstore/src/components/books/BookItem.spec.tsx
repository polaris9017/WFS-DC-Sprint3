import React from "react";
import {render} from "@testing-library/react";
import BookItem from "./BookItem";
import {BookStoreThemeProvider} from "../../context/themeContext";

const dummyBooks = {
        id: 1,
        title: 'Tasty Fresh Salad',
        category_id: 9,
        img_id: 7,
        form: 'ebook',
        isbn: '978-1-906764-01-2',
        summary: 'yowza tremendously cane deliberately algorithm majestically upbeat kissingly unite fish',
        detail: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
        author: 'Julio Schulist',
        pages: 326,
        contents: 'ethical ick buoyant leg woot aromatic unethically ill-informed finally er',
        price: 47900,
        pub_date: '2023-11-07',
        likes: 70
    }
;

describe('BookItem', () => {
    it('render 여부 확인', () => {
        const {getByText, getByAltText} = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBooks}/>
            </BookStoreThemeProvider>
        );
        expect(getByText('Tasty Fresh Salad')).toBeInTheDocument();
        expect(getByText('Julio Schulist')).toBeInTheDocument();
        expect(getByText('47,900원')).toBeInTheDocument();
        expect(getByText('70')).toBeInTheDocument();
        expect(getByAltText('Tasty Fresh Salad')).toHaveAttribute('src', `https://picsum.photos/id/${dummyBooks.img_id}/600/600`);
    });
});