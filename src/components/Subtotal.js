import './subtotal.css'
import React from 'react'

function SubTotal({t,l}) {
    
  return (
    <div className='subtotal'>
        <span>(Items : {l})</span>
        <p>
        <span>Total $:</span><span>{t}</span>
        </p>
        <div>
            <input type="checkbox"/>
            <span>This order contains a gift</span>
        </div>
        <button className='btn'>Proceed For Checkout</button>
    </div>
  )
}

export default SubTotal