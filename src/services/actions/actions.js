export const addToCart = (data)=>{
    // console.warn("action" , data)
    return{
        type : 'ADD_TO_CART',
        data : data
    }
}

export const removeFromCart = (data)=>{
    return{
        type : 'REMOVE_FROM_CART',
        data : data
    }
}
