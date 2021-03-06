import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProducts } from '../actions/productActions';

export default function ProductScreen(props){
    const dispatch=useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const {loading,error,product}=productDetails;
    const addToCartHandler=()=>{
        props.history.push(`/cart/${productId}`);
    };
    useEffect(()=>{
        dispatch(detailsProducts(productId));
    },[dispatch,productId]);
    return (
        <div>
            {loading?(
                <LoadingBox></LoadingBox>
            ):error?(
                <MessageBox variant="danger">{error}</MessageBox>
            ):(
                <div>
                    <Link to="/">Back</Link>
                    <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                Description:
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {product.countInStock>0?(
                                                <span className="success">In Stock</span>
                                            ):(
                                                <span className="danger">Unavailable</span>
                                            )}
                                        </div>
                                    </div>
                                </li>
                                {
                                    product.countInStock>0 && (
                                        <>
                                        
                                        <li>
                                        <button onClick={addToCartHandler} className="primary block">Add To Cart</button>
        
                                    </li>
                                    </>
                                    )
                                }
                  
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          
     
        )}
      </div>   
    );
}