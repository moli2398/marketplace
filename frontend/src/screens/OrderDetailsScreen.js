import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { saveOrderDetails } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function OrderDetailsScreen(props){
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;
    const cart = useSelector(state=>state.cart);
    const {orderDetails}=cart;

    if(!userInfo){
        props.history.push('/signin');
    }
    const [tshirtName,setTshirtName] = useState(orderDetails.tshirtName);
    const [size,setSize]=useState(orderDetails.size);
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(saveOrderDetails({
            tshirtName,size
        }));
        props.history.push('/payment');
    };

    return(
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Order Details</h1>
                </div>
                <div>
                    <label htmlFor="tshirtName">Name on T-Shirt</label>
                <input type="text" id="tshirtName" placeholder="Enter name to printed on t-shirt" value={tshirtName} onChange={(e)=>setTshirtName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                <select id="size" placeholder="Enter size of t-shirt" onChange={(e)=>setSize(e.target.value)} required>
                    <option value="XS">XS - 36</option>
                    <option value="S">S - 38</option>
                    <option value="M">M - 40</option>
                    <option value="L">L - 42</option>
                    <option value="XL">XL - 44</option>
                    <option value="XXL">XXL - 46</option>
                    <option value="XXXL">XXL - 48</option>
                </select>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}