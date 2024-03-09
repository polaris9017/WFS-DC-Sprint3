import React from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";

function Order() {
    const location = useLocation();
    const orderData = location.state;
    console.log(orderData);
    return (
        <>
            <OrderStyle>Order</OrderStyle>
        </>
    );
}

const OrderStyle = styled.div``;

export default Order;