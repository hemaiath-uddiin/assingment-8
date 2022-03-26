import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
 import "./Product.css"  
  

function Product(props) {
    const [products,setProducts] = useState ([]) 
    const [cart,setcart] = useState([])
     
    useEffect(()=>{ 
       fetch("data.json") 
       .then(res=>res.json()) 
       .then(data=> setProducts(data))

    },[]) 
   
    // add event handle 
     const addHandle =(product)=>{ 
             const newcart =[...cart,product] 
             setcart(newcart);
     }
    return (
         <> 
           <div className="container"> 
             
            <div className='product-container'>
               
                { 
                  products.map(product=> <Card  
                    addHandle ={addHandle}
                    product = {product}  
                    
                    key ={product.id}
                    />)
                }
            </div> 
            <div className="details-product"> 
                  
                  <h2> selected item</h2>
                  <div> 
                     { 
                       cart.map((cart)=>{ 
                           return( 
                              <div className="cart-wrap"> 
                              <h2> {cart.name}  </h2> 
                              <img src={cart.img} alt="" /> 
                              
                              </div>
                           )
                       })
                     }
                  </div> 
                  <button> chose a ramdom Item</button> 
                  <button> Remove Items </button>
                  </div> 
                 
           </div>
         
         </>
    );
}

export default Product;