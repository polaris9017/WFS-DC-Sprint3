import styled from 'styled-components';
import {BookDetail} from "../../models/book.model";
import Button from "../common/Button";
import {FaHeart} from "react-icons/fa";

interface Props {
    book: BookDetail;
    onClick: () => void;
}

function LikeButton({book, onClick}: Props) {
    return (
        <>
            <LikeButtonStyle size='medium' scheme={book.liked ? 'like' : 'normal'} onClick={onClick}>
                <FaHeart/>
                {book.likes}
            </LikeButtonStyle>
        </>
    );
}

const LikeButtonStyle = styled(Button)`  // component를 직접 스타일링 할 때는 요소 이름 대신 component 직접 사용
    display: flex;
    gap: 6px;

    svg {
        color: inherit;

        * {
            color: inherit;
        }
    }
`;

export default LikeButton;