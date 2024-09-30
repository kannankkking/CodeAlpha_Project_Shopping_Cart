import React, { useState } from 'react'
import data from '../assets/products.json'
import Product from "./Product";
import './Home.css'



export const Home = ({cart,setCart}) => {
    const [products]=useState(data);
    return(
    <div className="Product-container">
      {products.map((product)=> (
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
        
    ))}
            </div>
        
  );
};

export default Home
 