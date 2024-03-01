import styled from 'styled-components';
import Title from "../components/common/Title";
import BookFilter from "../components/books/BookFilter";
import BookList from "../components/books/BookList";
import BookEmpty from "../components/books/BookEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import {useBooks} from "../hooks/useBooks";

function Books() {
    const {books, pagination, isEmpty} = useBooks();

    console.log('books', books);
    console.log('pagination', pagination);

    return (
        <>
            <Title size="large">도서 목록</Title>
            <BooksStyle>
                {/* 필터 */}
                <div className="filter">
                    <BookFilter/>
                    <BooksViewSwitcher/>
                </div>
                {/* 목록 / empty */}
                {!isEmpty && <BookList books={books}/>}
                {isEmpty && <BookEmpty/>}
                {/* pagination */}
                {!isEmpty && <Pagination pagination={pagination}/>}
            </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    .filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`;

export default Books;