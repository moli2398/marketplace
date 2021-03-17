import { PromiseProvider } from 'mongoose';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function OrderHistoryScreen(props){
    const orderMineLis = useSelector(state=>state.orderMineList);
    const {loading,error,orders}=orderMineLis;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(listOrderMine());
    },[dispatch]);
    return(
        <div>
            <h1>Order History</h1>
            {loading?<LoadingBox></LoadingBox>:
            error?<MessageBox variant="danger">{error}</MessageBox>:
            (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAYMENT</th>
                            <th>DELIVERED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order)=>(
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>Rs. {order.totalPrice}</td>
                                <td>{order.isPaid?'Done and Verified':'Pending Verification'}</td>
                                <td>{order.isDelivered?'Yes':'No'}</td>
                                <td>
                                    <button type="button" className="small" onClick={()=>{
                                        props.history.push(`/order/${order._id}`);
                                    }}>Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}