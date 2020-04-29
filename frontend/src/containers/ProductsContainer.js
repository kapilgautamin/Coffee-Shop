import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Products from '../components/Products/Products';
import CartList from '../components/Cart/CartList';
import {addToCartAction} from '../redux/actions/CartAction'

class ProductsContainer extends Component{
    
    render(){
        const {cart, addToCartAction} = this.props;
        // console.log("cart from state",this.props.cart);
        return (
            <div>
            <CartList cart={cart} addToCartAction={addToCartAction}/>
            <Products addToCartAction={addToCartAction}/>
            </div>
        );
    }
}

const mapStateToProps = ({cart}) => {
  return{
    cart
  }
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        addToCartAction
    },dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ProductsContainer);