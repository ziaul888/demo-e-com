import React,{useState} from 'react'



const CartItem=({title,id, price,quantity,removeCartItem})=>{
    return(
        
        <div className="cart-item">
            <button onClick={()=>removeCartItem(id)}>x </button>
            <div className="info">
                <span>{title} x {quantity}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default function Cart({cartItems,removeCartItem,clearCart}) {
    const total = cartItems.reduce((sum, curr)=>sum+curr.price * curr.quantity, 0)
      const[cheackoutOpen, setCheackoutOPen] = useState(false);
      const [address,setAddress]=useState("")


      const togglehandle=()=>{
          setCheackoutOPen(status=>!status)
      }
      const handleChange=(e)=>{
          setAddress(e.target.value)
      }

    return (
        <div className="cart">
            <h4>cartItems</h4>
            <div className="cart-items">
            { cartItems.length === 0 &&
            (<div className="cart-item">
            <div className="info">
                <span>cart is empty</span>
                
            </div>
        </div>)}
            {cartItems.length!==0 && cartItems.map(item=><CartItem {...item} price={item.price* item.quantity}removeCartItem={removeCartItem}/>)} 
            {cartItems.length!==0 && 
            <>
            <div className="cart-item">
            <div className="info">
                <span>total:</span>
                <span>$ {total}</span>
            </div>
        </div>
       <div className="cart-item">
            <div className="info">
                <button onClick={clearCart}>cencel</button>
                <button onClick={togglehandle}>{cheackoutOpen ? "hide":"Checkout"}</button>
            </div>
        </div>
        </>}
        { cartItems.length!==0 && cheackoutOpen &&
        <div className="cart-item">
            <div className="info">
                <span><input placeholder="adress" onChange={handleChange}/></span>
                <button disabled={!address} onClick={clearCart}>Cheackout</button>
            </div>
        </div>}
            </div>
        </div>
    )
}
