import Home from '../components/Home'
import { connect } from 'react-redux';
import { addToCart} from '../services/actions/actions.js';

const mapStateToProps = (state)=>({
    data : state.cartReducer
})

const mapDispatchToProps = (dispatch)=>({
    addToCartHandler : data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);