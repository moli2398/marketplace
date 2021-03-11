import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props){
    
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;

    const cart = useSelector((state) => state.cart);
    const {orderDetails} = cart;

    if(!userInfo){
        props.history.push('/signin');
    }


    if(!orderDetails.tshirtName){
        props.history.push('/shipping');
    }
    const [paymentMethod,setPaymentMethod]=useState('online');
    const [onlineId,setOnlineId]=useState('');
    const [offlineId,setOfflineId]=useState('');


    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }

    return(
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>   
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment</h1>
                </div>
                <div>
                    <label htmlFor="payment">Enter mode of payment</label>
                <select id="payment" placeholder="Enter size of t-shirt" onChange={(e)=>setPaymentMethod(e.target.value)} required>
                    <option value="online">Online Transaction</option>
                    <option value="offline">Cash</option>
                </select>
                </div>
                
                    {paymentMethod==='online'?(
              
                            <div>
                                <label htmlFor="onlineId">Transaction ID</label>
                                <input type="text" id="onlineId" placeholder="Enter online transaction ID" value={onlineId} onChange={(e)=>setOnlineId(e.target.value)} required></input>
                            </div>
                        
                    ):(
                        <div>
 <label htmlFor="offlineId">Transaction ID</label>
                <input type="text" id="offlineId" placeholder="Enter offline transaction id" value={offlineId} onChange={(e)=>setOfflineId(e.target.value)} required></input>
                
                        </div>
                    )}
               
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        
        </div>
    )
}