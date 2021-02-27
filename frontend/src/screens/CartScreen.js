import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props){
    const productId=props.match.params.id;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    },[dispatch,productId]);
    return(
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : ProductID:{productId}</p>
        </div>
    );
}