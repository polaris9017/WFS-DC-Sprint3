import styled from 'styled-components';
import {BookDetail} from "../../models/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useBook} from "../../hooks/useBook";

interface Props {
    book: BookDetail;
}

function AddToCart({book}: Props) {
    const [amount, setAmount] = useState<number>(1);
    const {addToCart, isCartAdded} = useBook(book.id.toString());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value));

    const handleIncrease = () => {
        if (amount === 1) return;  // 최소 수량은 1
        setAmount(amount + 1);
    };

    const handleDecrease = () => setAmount(amount - 1);

    return (
        <>
            <AddToCartStyle $added={isCartAdded}>
                <div>
                    <InputText inputType='number' value={amount} onChange={handleChange}/>
                    <Button size='medium' scheme='normal' onClick={handleIncrease}>+</Button>
                    <Button size='medium' scheme='normal' onClick={handleDecrease}>-</Button>
                </div>
                <Button size='medium' scheme='primary' onClick={() => addToCart(amount)}>장바구니에 담기</Button>
                {
                    isCartAdded && (
                        <div className="added">
                            <p>장바구니에 추가되었습니다.</p>
                            <Link to='/cart'>장바구니로 이동</Link>
                        </div>
                    )
                }
            </AddToCartStyle>
        </>
    );
}

interface AddToCartStyleProps {
    $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    .added {
        position: absolute;
        right: 0;
        bottom: -90px;
        background: ${({theme}) => theme.color.background};
        border-radius: ${({theme}) => theme.borderRadius.default};
        padding: 8px 12px;
        opacity ${props => props.$added ? 1 : 0}; // 조건부 렌더링으로는 처리하기 어려워 styled-components 에서 처리
        transition: all 0.5s ease;

        p {
            padding: 0 0 8px 0;
            margin: 0;
        }
    }
`;

export default AddToCart;