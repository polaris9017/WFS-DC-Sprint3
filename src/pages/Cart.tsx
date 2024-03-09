import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import {useCart} from "../hooks/useCart";
import {Cart as CartModel} from "../models/cart.model";
import Empty from "../components/common/Empty";
import {FaShoppingCart} from "react-icons/fa";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import {useAlert} from "../hooks/useAlert";
import {OrderSheet} from "../models/order.model";
import {useNavigate} from "react-router-dom";  // 임시 추가

function Cart() {

    //const {carts,deleteCartItem, isEmpty} = useCart();
    const dummy_carts = [  // 임시 데이터
        {
            cartId: 1,
            id: 1,
            title: 'Tasty Fresh Salad',
            summary: 'yowza tremendously cane deliberately algorithm majestically upbeat kissingly unite fish',
            amount: 1,
            price: 47900
        }, {
            cartId: 2,
            id: 1,
            title: 'Tasty Fresh Salad',
            summary: 'yowza tremendously cane deliberately algorithm majestically upbeat kissingly unite fish',
            amount: 3,
            price: 47900
        }
    ];

    const {showAlert, showConfirm} = useAlert();
    const navigate = useNavigate();

    /* 아래 두개는 임시 state */
    const [carts, setCarts] = useState<CartModel[]>([...dummy_carts]);
    const isEmpty = carts.length === 0;

    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const handleCheckItem = (cartId: number) => {
        if (checkedItems.includes(cartId))
            setCheckedItems(checkedItems.filter(it => it !== cartId));  // check 제거
        else
            setCheckedItems([...checkedItems, cartId]);  // check 추가
    };

    const handleDeleteItem = (cartId: number) => {
        //deleteCartItem(cartId);  // 삭제
        setCarts(carts.filter((it) => it.cartId !== cartId));  // 임시 데이터 삭제
    };

    const totalAmount = useMemo(() => {
        return carts.reduce((acc, it) => {
            if (checkedItems.includes(it.cartId)) return acc + it.amount;
            return acc;
        }, 0);
    }, [carts, checkedItems]);

    const totalPrice = useMemo(() => {
        return carts.reduce((acc, it) => {
            if (checkedItems.includes(it.cartId)) return acc + (it.amount * it.price);
            return acc;
        }, 0);
    }, [carts, checkedItems]);

    const handleOrder = () => {
        if (checkedItems.length === 0) {
            showAlert("주문할 상품을 선택해주세요.");
            return;
        }
        // 주문서 작성
        const orderData: Omit<OrderSheet, 'delivery'> = {
            items: checkedItems,
            totalPrice,
            totalAmount,
            topBookTitle: carts[0].title
        };
        showConfirm('이대로 주문하시겠습니까?', () => navigate('/order', {state: orderData}));
    };


    return (
        <>
            <Title size='large'>장바구니</Title>
            <CartStyle>
                {!isEmpty && (<>
                    <div className="content">
                        {
                            carts.map(it => (
                                <CartItem key={it.cartId} cart={it} checkedItems={checkedItems}
                                          onCheck={handleCheckItem}
                                          onDelete={handleDeleteItem}/>
                            ))
                        }
                    </div>
                    <div className="summary">
                        <CartSummary totalAmount={totalAmount} totalPrice={totalPrice}/>
                        <Button size='large' scheme='primary' onClick={handleOrder}>주문하기</Button>
                    </div>
                </>)
                }
                {isEmpty && (<Empty icon={<FaShoppingCart/>} title="장바구니가 비었습니다." description={<>장바구니를 채워보세요</>}/>)}
            </CartStyle>
        </>
    );
}

export const CartStyle = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 0 0 0;

    .content {
        flex: 1; // 늘림
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .summary {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .order-info {
        h1 {
            padding: 0 0 24px 0;
        }

        border: 1px solid ${({theme}) => theme.color.border};
        border-radius: ${({theme}) => theme.borderRadius.default};
        padding: 12px;
    }

    .delivery {
        fieldset {
            border: 0;
            margin: 0;
            padding: 0 0 12px 0;
            display: flex;
            justify-content: start;
            gap: 12px;

            label {
                width: 80px;
            }

            .input {
                flex: 1;

                input {
                    width: 100%;
                }
            }
        }

        .error {
            color: red;
            margin: 0;
            padding: 0 0 12px 0;
            text-align: right;
        }
    }
`;

export default Cart;