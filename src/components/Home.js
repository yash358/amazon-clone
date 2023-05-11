import React from 'react'
import './Home.css'
import Product from '../components/Product'

function Home(props) {
  // console.warn("home >>", props)
  return (
    <div className='home'>
        <img className='banner' src="https://www.mitchellandbrown.co.uk/wp-content/uploads/2022/03/Prime-Video.jpg" alt="banner" />

        <div className='home-row'>
          <Product id = "12345" title = "Harry Potter and the chamber of Secrets" rating = {5} price = {11.45} image = "https://m.media-amazon.com/images/I/81p2+4nYtkL.jpg" add = {props.addToCartHandler}/>
          <Product id = "12322" title = "Ultra HD Smart Sony TV 50inch" rating = {4} price = {123.45} image = "https://m.media-amazon.com/images/I/71a4ZQNqTiL._SL1500_.jpg" add = {props.addToCartHandler}/>
        </div>
        <div className="home-row">
          <Product id = "11145" title = "Zebronics Jet PRO Premium Wired Gaming On Ear Headphone with LED for Headband" rating = {4} price = {61.45} image = "https://m.media-amazon.com/images/I/71VR6c3j2bL._SL1500_.jpg" add = {props.addToCartHandler}/>
          <Product id = "17745" title = "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)s" rating = {5} price = {115.5} image = "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg" add = {props.addToCartHandler}/>
          <Product id = "11945" title = "Kadence Frontier 34inch guitar for Kids, Travel Guitar for Adult Acoustic Guitar with Die Cast Keys, Set of Strings, Strap, Picks and Bag (Sunburst Guitar)" rating = {4} price = {223} image = "https://m.media-amazon.com/images/I/51QJk1lF7tL._SL1000_.jpg" add = {props.addToCartHandler}/>
        </div>
    </div>

    
  )
}

export default Home;