import React from 'react';
import "./Card.css"
function Card( {product}) {
    const {name,price,img} = product
    return (
        <div className='card-container'>
            <img src= {img} alt="" /> 
            <h3> Name: {name}  </h3> 
            <h4> Price: ${price}  </h4> 
            <button className='btn'> Add To Cart  </button>
        </div>
    );
}

export default Card;