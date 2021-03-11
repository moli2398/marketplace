import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function PlaceOrderScreen(props){
    const cart = useSelector(state=>state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment');
    }
    cart.totalPrice = cart.cartItems.length*200;
    const orderCreate = useSelector(state=>state.orderCreate);
    const{loading,success,error,order}=orderCreate;
    const dispatch = useDispatch();
    const placeOrderHanler=()=>{
        dispatch(createOrder({...cart,orderItems:cart.cartItems}));
    };
    useEffect(()=>{
        if(success){
            props.history.push(`/order/${order._id}`);
            dispatch({type:ORDER_CREATE_RESET});
        }
    },[dispatch,order,props.history,success]);


    return(
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                            <h2>Order Details</h2>
                            <p>
                                <strong>Name on T-Shirt:</strong>{cart.orderDetails.tshirtName}<br/>
                                <strong>Size:</strong>{cart.orderDetails.size}
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                                <strong>Payment Mode:</strong>{cart.paymentMethod}<br/>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Order Items</h2>
                            <ul>
                        {
                            cart.cartItems.map((item)=>(
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
                                        <strong>Rs.{cart.totalPrice}</strong>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={placeOrderHanler} className="primary block" disabled={cart.cartItems.length===0}>
                                    Place Order
                                </button>
                            </li>
                            {
                                loading && <LoadingBox></LoadingBox>
                            }
                            {
                                error && <MessageBox></MessageBox>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}