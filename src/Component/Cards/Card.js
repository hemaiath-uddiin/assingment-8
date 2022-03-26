import React from 'react';
import "./Card.css"
function Card( {product,addHandle}) {
    const {name,price,img} = product
    return (
        <div className='card-container'>
            <img src= {img} alt="" /> 
            <h3> Name: {name}  </h3> 
            <h4> Price: ${price}  </h4> 
            <button className="btn btn-primary" onClick={()=> addHandle(product)} > Add To Cart  </button>
        </div>
    );
}

export default Card;