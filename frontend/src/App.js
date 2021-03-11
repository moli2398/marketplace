import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';


function App() {

  const userSignin = useSelector((state)=> state.userSignin);
  const {userInfo}=userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">BDSM - Batch Day Shirt Marketplace</Link>
        </div>
        <div>
            <Link to="/cart">Cart</Link>
            {
              userInfo?(
                <div className="dropdown">
                  <Link to="#">{userInfo.name} v</Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                  </ul>
                </div>
              ):
              (
                <Link to="/signin">Sign In</Link>
              )
            }
        </div>
    </header>

    <main>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/shipping" component={OrderDetailsScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
    </main>


    <footer className="row center">All Rights Reserved</footer>
</div>
</BrowserRouter>
  );
}

export default App;
