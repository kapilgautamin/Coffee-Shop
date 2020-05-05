import React from 'react';
import CartItem from "./CartItem";

export default class CartList extends React.PureComponent{

    handleAddProduct = (product) => {
        // console.log("clicked",product);
        // console.log("this",this.state);
        this.props.addToCartAction(product);
    }

    

    render(){
        const {cart} = this.props;
        let cartTotal = 0;
        let cartTotalQuantity = 0;
        for(let i=0;i<cart.length;i++){
            cartTotal += cart[i].price * cart[i].units;
            cartTotalQuantity += cart[i].units;
        }
        // console.log(cart);
        return (
        <div className="dropdown">
          <button type="button" className="btn btn-info" data-toggle="dropdown">
           <i className="fa fa-shopping-cart" aria-hidden="true"></i>Shopping Cart <span className="badge badge-pill badge-danger">{cartTotalQuantity}</span>
          </button>
          <form className="dropdown-menu" style={{width:200}}>
            <div className="row total-header-section">
                <div className="col-lg-6 col-sm-6 col-6">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="badge badge-pill badge-danger">{cartTotalQuantity}</span>
                </div>
                <div className="col-lg-6 col-sm-6 col-6 total-section text-right">
                  <p>Total Amount: <span className="text-info">${cartTotal}</span></p>
                </div>
            </div>
            {
            cart.map(item => <CartItem {...item} key={item.id} addProd={this.handleAddProduct}/>)
            }

            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
                <button className="btn btn-primary btn-block">Checkout</button>
              </div>
            </div>
          </form>
      </div>



           
        );
    }
}