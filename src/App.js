//import logo from './logo.svg';
import {useState,useEffect} from "react"
import './App.css';
import NavBar from './Navbar/NavBar';
//import ProductList from './Product/ProductList';
import Cart from './cart/Cart';
import Data from './data'
import ProductList from './Product/Product';

function App() {
const [keyword, setKeyword]=useState("");
const [cartItems,setCartItems]=useState([]);
const [products,setProducts]=useState([...Data])


const addCartItem=(id)=>{
 const item= products.find(product=>product.id===id);
 setCartItems(items=>{
const itemIndex= items.findIndex(currItem=>currItem.id === id)

  if(itemIndex=== -1) {
    return [
      ...items,{
        ...item,
        quantity:1
      }
      
    ]
  }else{
    return items.map(currItem=>currItem.id===id ?({
     ...item,
     quantity:parseInt(currItem.quantity) +1 
    }):currItem);
  }
  });
}


useEffect(()=>{
  const results =Data.filter(product=>product.title.includes(keyword)|| product.brand.includes(keyword))
  setProducts(results)
}, [keyword])

  return (
    <div className="app">
    <NavBar setKeyword={setKeyword}/>
  <ProductList products={products} addCartItem={addCartItem}/>  
    <Cart cartItems={cartItems}/>
    </div>
  );
}

export default App;
