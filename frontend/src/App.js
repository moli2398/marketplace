import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">BDSM - Batch Day Shirt Marketplace</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>

    <main>
        <div className="row center">
          {
            data.products.map((product) => (
              <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt={product.name}/>
              </a>
              <div className="card-body">
                  <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                  </a>   
              </div>
          </div>
            ))
          }
          
          </div>
    </main>

    <footer className="row center">All Rights Reserved</footer>
</div>
  );
}

export default App;