import {useEffect, useState} from "react";
import {BookDetail} from "../models/book.model";
import {fetchBook, likeBook, revertLikeBook} from "../api/books.api";
import {useAuthStore} from "../store/authStore";
import {useAlert} from "./useAlert";
import {addCart} from "../api/carts.api";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const [isCartAdded, setIsCartAdded] = useState<boolean>(false);
    const {isSignedIn} = useAuthStore();
    const showAlert = useAlert();

    const toggleLike = () => {
        // 권한 확인
        if (!isSignedIn) {
            showAlert('로그인이 필요합니다.');
            return;
        }

        if (!book) return;
        if (book.liked) {  // 좋아요 취소
            revertLikeBook(book.id).then(() => {
                setBook({...book, likes: book.likes - 1, liked: false});
            });

        } else {  // 좋아요
            likeBook(book.id).then(() => {
                setBook({...book, likes: book.likes + 1, liked: true});
            });
        }
    };

    const addToCart = (amount: number) => {
        if (!book) return;

        addCart({book_id: book.id, amount: amount}).then(() => {
            setIsCartAdded(true);
            setTimeout(() => setIsCartAdded(false), 3000);
        })
    };

    useEffect(() => {
        if (!bookId) return;

        fetchBook(bookId).then(book => {
                setBook(book);
            }
        );
    }, [bookId]);

    return {book, toggleLike, addToCart, isCartAdded}
};
