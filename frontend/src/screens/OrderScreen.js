import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { detailsOrder } from '../actions/orderActions';

export default function OrderScreen(props){
    const orderId = props.match.params.id;
    const orderDetails=useSelector(state=>state.orderDetails);
    const {order,loading,error}=orderDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsOrder(orderId));
    },[dispatch,orderId]);


    return loading?(<LoadingBox></LoadingBox>):
    error?(<MessageBox variant="danger">{error}</MessageBox>):
    (
        <div>
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                            <h2>Order Details</h2>
                            <p>
                                <strong>Name on T-Shirt:</strong>{order.orderDetails.tshirtName}<br/>
                                <strong>Size:</strong>{order.orderDetails.size}
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Payment Mode:</strong>{order.paymentMethod}<br/>
                            </p>
                            {order.isPaid?(<MessageBox variant="success">Payment Verified</MessageBox>):(
                                <MessageBox variant="danger">Payment Unverified</MessageBox>
                            )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                        {
                            order.orderItems.map((item)=>(
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img src={item.image}
                                            alt={item.name}
                                            className="small"></img>
                                            
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                    <div>
                                        Rs. 200
                                    </div>
                                 
        
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong>Order Total</strong>
                                    </div>
                                    <div>
                                        <strong>Rs.{order.totalPrice}</strong>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}