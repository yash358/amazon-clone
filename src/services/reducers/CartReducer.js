const initialState = {
    basket : []
}
export default function cartReducer (state=initialState, action){
    // console.warn("reducer", action);

    switch(action.type){
        case 'ADD_TO_CART':
            return{
                basket : [...state.basket, action.data]
            }
        case 'REMOVE_FROM_CART':
            let newbasket = [...state.basket];
            const idx = newbasket.findIndex(item=>{
                return item.id === action.data.id
            })
            newbasket.splice(idx,1);
            return{
                basket : newbasket
            }
        default:
            return state
    }
}