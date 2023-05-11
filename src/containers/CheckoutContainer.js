import Checkout from "../components/Checkout";

import { connect } from 'react-redux';
import { removeFromCart} from '../services/actions/actions.js';

const mapStateToProps = (state)=>({
    data : state.cartReducer
})

const mapDispatchToProps = (dispatch)=>({
    addToCartHandler : data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);