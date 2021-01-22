import React from 'react'

 const Product=({id,title,price,brand,image,addCartItem})=> {
    return <div >
        <div className="product">
            <img src={image} alt="img"/>
            <div className="title">
                <span>{title}</span>
                <span>{brand}</span>
            </div>
            <div className="action">
                <span> $ {price}</span>
                <button onClick={()=>addCartItem(id)}>Add to cart</button>
            </div>
        </div>
    </div>
}

const ProductList=({products,addCartItem})=>{
 return<div className="product-list">
     {products.map(product=><Product key={product.id}{...product} addCartItem={addCartItem}/>)}
 </div>
}
export default ProductList