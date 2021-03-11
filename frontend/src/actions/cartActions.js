import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_ORDER_DETAILS, CART_SAVE_PAYMENT_METHOD } from "../constants/cartConstants";

export const addToCart = (productId)=>async(dispatch,getState)=>{
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            countInStock:data.countInStock,
            product:data._id,

        },
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId)=>(dispatch,getState)=>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const saveOrderDetails  = (data) => (dispatch) =>{
    dispatch({
        type: CART_SAVE_ORDER_DETAILS,payload:data
    });
    localStorage.setItem('orderDetails',JSON.stringify(data));
}

export const savePaymentMethod = (data) => (dispatch) =>{
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload:data
    });
}