import styled from 'styled-components';
import {Link, useParams} from "react-router-dom";
import {useBook} from "../hooks/useBook";
import {getImageSrc} from "../utils/image";
import Title from "../components/common/Title";
import {BookDetail as BookDetailModel} from "../models/book.model";
import {formatDate, formatNumber} from "../utils/format";
import EllipsisBox from "../components/common/EllipsisBox";
import LikeButton from "../components/book/LikeButton";
import AddToCart from "../components/book/AddToCart";

const bookInfoList = [
    {
        key: 'category', label: '카테고리',
        filter: (book: BookDetailModel) => (
            <Link to={`/books?category=${book.category_id}`}>{book.category}</Link>
        )
    },
    {key: 'form', label: '형태'},
    {key: 'pages', label: '페이지'},
    {key: 'isbn', label: 'ISBN'},
    {
        key: 'pub_date', label: '출간일',
        filter: (book: BookDetailModel) => formatDate(book.pub_date)
    },
    {
        key: 'price', label: '가격',
        filter: (book: BookDetailModel) => `${formatNumber(book.price)} 원`
    }
];


function BookDetail() {
    const {bookId} = useParams();
    const {book, toggleLike} = useBook(bookId);

    console.log(book);
    if (!book) return null;

    return (
        <>
            <BookDetailStyle>
                <header className="header">
                    <div className="img">
                        <img src={getImageSrc(book.img_id)} alt={book.title}/>
                    </div>
                    <div className="info">
                        <Title size='large' color='text'>
                            {book.title}
                        </Title>
                        {
                            bookInfoList.map(it => (
                                <dl>
                                    <dt>{it.label}</dt>
                                    <dd>{it.filter ? it.filter(book) : book[it.key as keyof BookDetailModel]}</dd>
                                </dl>
                            ))
                        }
                        <p className="summary">{book.summary}</p>
                        <div className="likes">
                            <LikeButton book={book} onClick={toggleLike}></LikeButton>
                        </div>
                        <div className="add-cart"><AddToCart book={book}/></div>
                    </div>
                </header>
                <div className="content">
                    <Title size='medium'>상세 설명</Title>
                    <EllipsisBox lineLimit={4}>{book.detail}</EllipsisBox>
                    <Title size='medium'>목차</Title>
                    <p className="index">
                        {book.contents}
                    </p>
                </div>
            </BookDetailStyle>
        </>
    );
}

const BookDetailStyle = styled.div`
    .header {
        display: flex;
        align-items: start;
        gap: 24px;
        padding: 0 0 24px 0;

        .img {
            flex: 1;

            img {
                width: 100%;
                height: auto;
            }
        }

        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;

            dl {
                display: flex;
                gap: 0;

                dt {
                    width: 80px;
                    color: ${({theme}) => theme.color.secondary};
                }

                a {
                    color: ${({theme}) => theme.color.primary};
                }
            }
        }
    }

    .content {
        /*.detail {
            
        }*/
    }
`;

export default BookDetail;