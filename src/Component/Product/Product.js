import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
 import "./Product.css"  
 import 'bootstrap/dist/css/bootstrap.min.css';

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
     // remove btn 
      const removeItem =()=>{ 
          setcart([])
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
                  <div className='wraping-item'> 
                  <button className='btn btn-primary'> chose a ramdom Item</button> 
                  <button className='btn btn-primary ' onClick={()=>removeItem()}> Remove Items </button>
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
                 
                  </div> 
                 
           </div>
         
         </>
    );
}

export default Product;