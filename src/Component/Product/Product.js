import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
 import "./Product.css" 

function Product(props) {
    const [products,setProducts] = useState ([])
     
    useEffect(()=>{ 
       fetch("data.json") 
       .then(res=>res.json()) 
       .then(data=> setProducts(data))

    },[])
    return (
         <> 
           <div className="container"> 
            <div className='product-container'>
                { 
                  products.map(product=> <Card  
                     
                    product = {product}  
                    key ={product.id}
                    />)
                }
            </div> 
            <div className="details-product"> 
                  <div> 
                     <h2>hlw jsklfj</h2>
                  </div> 
                  
                  </div>
           </div>
         
         </>
    );
}

export default Product;