import React, { useEffect, useState } from 'react'
import './Cart.css'

export const Cart = ({cart}) => {
  const [total,setTotal]=useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc,curr)=> acc+parseInt(curr.Amount),0));
  }, [cart]);

  return (
  <>
    <h1 className="cart-heading">Food Items</h1>
    <div className="cart-container">
      {cart.map((product)=>(
        <div className="cartproduct" key={product.id}>
          <div className="img">
          <img src={product.pic} alt="img1" />
          </div>
          <div className="cart-product-details">
            <h3>{product.name}</h3>
            <p>Price Rs: {product.Amount}</p>
          </div>
        </div>
      ))}
       <h2 className="cart-amount">Total Amount Rs:{total}</h2>
       </div>
    </>

  )
}

export default Cart
