import styled from 'styled-components';
import BookItem from "./BookItem";
import {Book} from "../../models/book.model";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {queryString} from "../../constants/queryString";
import {ViewMode} from "./BooksViewSwitcher";

interface Props {
    books: Book[];
}

const dummyBooks: Book = {
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

function BookList({books}: Props) {
    const [view, setView] = useState<ViewMode>('grid');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get(queryString.VIEW)) {
            setView(params.get(queryString.VIEW) as ViewMode);
        }
    }, [location.search]);

    return (
        <>
            <BookListStyle view={view}>
                <BookItem book={dummyBooks} view={view}/>
                {/*{
                // 개발 중 서버를 올리지 않는 관계로 일부 함수 임시 주석 처리. 최종 단계에서 주석 해제
                    books.map((it) => {
                        return <BookItem key={it.id} book={it}/>
                    })
                }*/}
            </BookListStyle>
        </>
    );
}

interface BooksListStyleProps {
    view: ViewMode;
}

const BookListStyle = styled.div<BooksListStyleProps>`
    display: grid;
    grid-template-columns: ${({view}) => view === 'grid' ? 'repeat(4, 1fr);' : 'repeat(1, 1fr)'};
    gap: 24px;
`;

export default BookList;