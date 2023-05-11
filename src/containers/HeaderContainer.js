import Header from "../components/header";
import {connect} from 'react-redux'
const mapStateToProps = (state)=>({
    data : state.cartReducer
})

const mapDispatchToProps = (dispatch)=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);