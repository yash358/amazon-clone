import './checkoutProduct.css';
function CheckoutProduct(p){
    return(
        <div className='cproduct-item'>
            
            <img className='cproduct-image' src={p.img} alt="" />
            
            <div className='cproduct-info'>
                <div>
                    <h3>{p.title}</h3>
                    <small>$</small>
                    <span>{p.price}</span>
                    <div>{Array(p.rating).fill("⭐")}</div>
                </div>
                <div>
                    <button onClick = {()=>{p.remove({img :p.img, price:p.price, id: p.id, title : p.title, rating : p.rating})}} >REMOVE FROM CART</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct;