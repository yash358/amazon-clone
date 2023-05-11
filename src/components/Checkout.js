import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './checkout.css'
import SubTotal from './Subtotal.js'

function Checkout(props) {
    // console.warn("Checkout >>", props)
    var total = 0;

    let b = props.data.basket;
    b.forEach(x =>{
        total += x.price
    })
  return (
    <div className='checkout'>
        <img className='checkout-add' src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png" alt="" />
        <div className="checkout-container">
            <div className="left-container">
                {props.data.basket.map(item=>{
                        return <CheckoutProduct img={item.img} price={item.price} id = {item.id} title = {item.title} rating = {item.rating} remove={props.removeFromCartHandler}/>
                    })}
            </div>
            <div className="right-container">
                    <SubTotal t = {total} l = {props.data.basket.length}/>
            </div>
        </div>
        
    </div>
  )
}

export default Checkout