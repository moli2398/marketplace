import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer, orderMineListReducer } from './reducers/orderReducers';
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState={
    cart:{
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
        orderDetails:localStorage.getItem('orderDetails')?JSON.parse(localStorage.getItem('orderDetails')):{},
        paymentMethod:'offline'
    },
    userSignin:{
        userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
    }
};
const reducer=combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderMineList:orderMineListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;