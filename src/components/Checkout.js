import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './checkout.css'

function Checkout(props) {
  return (
    <div className='checkout'>
        <div className="left-container">
            <img src="" alt="" />
            {props.data.basket.map(item=>{
                    return <CheckoutProduct img={item.img} price={item.price} id = {item.id} title = {item.title} rating = {item.rating} remove={props.removeFromCartHandler}/>
                })}
        </div>
        <div className="right-container">

        </div>
    </div>
  )
}

export default Checkout