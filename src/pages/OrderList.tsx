import styled from 'styled-components';
import Title from "../components/common/Title";
import {useOrderList} from "../hooks/useOrderList";
import {formatDate, formatNumber} from "../utils/format";
import {Order} from "../models/order.model";
import Button from "../components/common/Button";
import React from 'react';

function OrderList() {
    const {orderList, selectedItem, selectOrderItem} = useOrderList();
    //const orderList: Order[] = [];  // 임시 데이터

    return (
        <>
            <Title size='large'>주문 내역</Title>
            <OrderListStyle>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>주문일자</th>
                        <th>주소</th>
                        <th>수령인</th>
                        <th>연락처</th>
                        <th>대표 상품명</th>
                        <th>수량</th>
                        <th>주문금액</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orderList.map(order => (
                            <React.Fragment key={order.id}>
                                <tr>
                                    <td>{order.id}</td>
                                    <td>{formatDate(order.created_at, "YYYY.MM.DD")}</td>
                                    <td>{order.address}</td>
                                    <td>{order.recipient}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.book_title}</td>
                                    <td>{order.total_amount}</td>
                                    <td>{formatNumber(order.total_price)} 원</td>
                                    <td>
                                        <Button size='small' scheme='normal' onClick={
                                            () => selectOrderItem(order.id)
                                        }>자세히</Button>
                                    </td>
                                </tr>
                                {
                                    selectedItem === order.id && (
                                        <tr>
                                            <td/>
                                            <td colSpan={8}>
                                                <ul className='detail'>
                                                    {
                                                        order.detail?.map((item) => (
                                                            <li key={item.bookId}>
                                                                <div>
                                                                    <span>{item.bookId}</span>
                                                                    <span>{item.author}</span>
                                                                    <span>{formatNumber(item.price)} 원</span>
                                                                    <span>{item.bookId}</span>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                }
                            </React.Fragment>
                        ))
                    }
                    </tbody>
                </table>
            </OrderListStyle>
        </>
    );
}

const OrderListStyle = styled.div`
    padding: 24px 0 0 0;

    table {
        width: 100%;
        border-collapse: collapse;
        border-top: 1px solid ${({theme}) => theme.color.border};
        border-bottom: 1px solid ${({theme}) => theme.color.border};

        th, td {
            padding: 16px;
            border-bottom: 1px solid ${({theme}) => theme.color.border};
            text-align: center;
        }

        .detail {
            margin: 0;
            text-align: left;

            li {
                list-style: square;

                div {
                    display: flex;
                    padding: 8px 12px;
                    gap: 8px;
                }
            }
        }
    }
`;

export default OrderList;