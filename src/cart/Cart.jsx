import React from 'react'



const CartItem=({title, price,quantity})=>{
    return(
        
        <div className="cart-item">
            <button>x </button>
            <div className="info">
                <span>{title} x {quantity}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default function Cart({cartItems}) {
    const total = cartItems.reduce((sum, curr)=>sum+curr.price, 0)
    return (
        <div className="cart">
            <h4>cartItems</h4>
            <div className="cart-items">
            {cartItems.map(item=><CartItem {...item}/>)} 
            <div className="cart-item">
            <div className="info">
                <span>total</span>
                <span>$ {total}</span>
            </div>
        </div>
            </div>
        </div>
    )
}
