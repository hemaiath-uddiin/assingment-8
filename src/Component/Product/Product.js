import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
 import "./Product.css"  
 import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';

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
      // random btn 
        const [chose,setChose] = useState([]) 
        const random =(products)=>{ 
          const randomIndex = Math.floor(Math.random() * products.length); 
           
          let item = products[randomIndex]; 
        
          setChose(item); 
            
        }
      
    return (
         <>  
         <h2 className='text-center mb-5'> Upcoming Latest Phone</h2> 
         
         
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
                  
                
                  <div className='wraping-item'> 
                  <h2> {chose.name}  </h2>  
                  <img src= {chose.img} alt="" />
                  <button onClick={()=>random(products)} className='btn btn-primary'> chose  Item</button> 
                  <button className='btn btn-primary ' onClick={()=>removeItem()}> Remove Items </button>
                  <h2> selected item</h2>
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
           <Footer />
         
         </>
    );
}

export default Product;