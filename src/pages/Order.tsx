import React from 'react';
import styled from 'styled-components';
import {useLocation, useNavigate} from "react-router-dom";
import Title from "../components/common/Title";
import {CartStyle} from "./Cart";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import {useForm} from "react-hook-form";
import {Delivery, OrderSheet} from "../models/order.model";
import FindAddressButton from "../components/order/FindAddressButton";
import {order} from "../api/order.api";
import {useAlert} from "../hooks/useAlert";

interface DeliveryForm extends Delivery {
    addressDetail: string;
}

function Order() {
    const {showAlert, showConfirm} = useAlert();
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state;
    const {totalAmount, totalPrice, topBookTitle} = orderData;

    const {register, handleSubmit, setValue, formState: {errors}} = useForm<DeliveryForm>();

    const handlePayment = (data: DeliveryForm) => {
        const orderSheetData: OrderSheet = {
            ...orderData,
            delivery: {
                ...data,
                address: `${data.address} ${data.addressDetail}`
            }
        };

        // 서버로 주문서 전송
        console.log(orderSheetData);
        showConfirm('결제하시겠습니까?', () => {
            order(orderSheetData).then(() => {
                showAlert('주문이 처리되었습니다.');
                navigate('/order/checkout');
            });
        });
    };

    return (
        <>
            <Title size='large'>주문서 작성</Title>
            <CartStyle>
                <div className="content">
                    <div className="order-info">
                        <Title size='medium' color='text'>배송 정보</Title>
                        <form className='delivery'>
                            <fieldset>
                                <label>주소</label>
                                <div className="input">
                                    <InputText inputType='text' {...register('address', {required: true})}/>
                                </div>
                                <FindAddressButton onComplete={(address) => setValue('address', address)}/>
                            </fieldset>
                            {errors.address && <p className='error'>주소를 입력해주세요.</p>}
                            <fieldset>
                                <label>상세 주소</label>
                                <div className="input">
                                    <InputText inputType='text' {...register('addressDetail', {required: true})}/>
                                </div>
                            </fieldset>
                            {errors.address && <p className='error'>상세 주소를 입력해주세요.</p>}
                            <fieldset>
                                <label>수령인</label>
                                <div className="input">
                                    <InputText inputType='text' {...register('recipient', {required: true})}/>
                                </div>
                            </fieldset>
                            {errors.address && <p className='error'>수령인을 입력해주세요.</p>}
                            <fieldset>
                                <label>연락처</label>
                                <div className="input">
                                    <InputText inputType='text' {...register('phone', {required: true})}/>
                                </div>
                            </fieldset>
                            {errors.address && <p className='error'>연락처를 입력해주세요.</p>}
                        </form>
                    </div>
                    <div className="order-info">
                        <Title size='medium' color='text'>주문 상품</Title>
                        <strong>{topBookTitle} 등 총 {totalAmount} 권</strong>
                    </div>
                </div>
                <div className="summary">
                    <CartSummary totalAmount={totalAmount} totalPrice={totalPrice}/>
                    <Button size='large' scheme='primary' onClick={handleSubmit(handlePayment)}>결제하기</Button>
                </div>
            </CartStyle>
        </>
    );
}

const OrderStyle = styled.div``;

export default Order;