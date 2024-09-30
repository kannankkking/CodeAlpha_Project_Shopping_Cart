import React from 'react'
import './Product.css'

export const Product = ({product, cart, setCart}) => {
    const name=product.name.length>27?product.name.substring(0,26)+"...":product.name;
    
    const addCart = () => {
        setCart([...cart,product]);
    };
    const removeCart = () => {
        setCart(cart.filter((c)=>c.id!==product.id));
    };
    return(
     <div className="product">
        <div className="img">
            <img src={product.pic} alt={product.name} />
        </div>
        <div className="details">
        <h3>{name}</h3>
        <p>Price : Rs{product.Amount}</p>
        {cart.includes(product)?<button className="btn-remove" onClick={removeCart}>Remove from cart</button>
        : <button onClick={addCart}>Add to cart</button>
        }
        
        </div>
    </div>
    )

}

export default Product
