import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Card.css"
function Card( {product,addHandle }) {
    const {name,price,img,} = product
    return (
        <div className='card-container'>
            <img src= {img} alt="" /> 
            <h3> Name: {name}  </h3> 
            <h4> Price: ${price}  </h4> 
            <div className="btss"> 
            <button className="btn btn-primary" onClick={()=> addHandle(product)} > Add To Cart  
             <p> <FontAwesomeIcon icon={faShoppingCart} /> </p>
            </button>
            </div>
        </div>
    );
}

export default Card;