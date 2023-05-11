import React from 'react'
import './Product.css'

function Product({id, title, price, rating,image,add}) {
  return (
    <div className='product'>
        <div className="product-info">
            <h3>{title}</h3>
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill('⭐')}
            </div>
        </div>
        <div className="product-rest">
            <img src={image} alt="" />
            <button onClick={() => {add({img : image, price : price, id : id, title : title, rating : rating})}} className='product-button'>ADD TO CART</button>
        </div>
        
    </div>
  )
}

export default Product