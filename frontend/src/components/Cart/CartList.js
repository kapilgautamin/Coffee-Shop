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
        <div class="dropdown">
          <button type="button" class="btn btn-info" data-toggle="dropdown">
           <i class="fa fa-shopping-cart" aria-hidden="true"></i>Shopping Cart <span class="badge badge-pill badge-danger">{cartTotalQuantity}</span>
          </button>
          <form class="dropdown-menu" style={{width:200}}>
            <div class="row total-header-section">
                <div class="col-lg-6 col-sm-6 col-6">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="badge badge-pill badge-danger">{cartTotalQuantity}</span>
                </div>
                <div class="col-lg-6 col-sm-6 col-6 total-section text-right">
                  <p>Total Amount: <span class="text-info">${cartTotal}</span></p>
                </div>
            </div>
            {
            cart.map(item => <CartItem {...item} key={item.id} addProd={this.handleAddProduct}/>)
            }

            <div class="row">
              <div class="col-lg-12 col-sm-12 col-12 text-center checkout">
                <button class="btn btn-primary btn-block">Checkout</button>
              </div>
            </div>
          </form>
      </div>



           
        );
    }
}

{/* <div class="btn-group float-right">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Shopping Cart
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                <ul className="list-group">
                    {
                    cart.map(item => <CartItem {...item} key={item.id} addProd={this.handleAddProduct}/>)
                    }
                    <li className="list-group-item align-self-end dropdown-item">Sum Total: ${cartTotal}</li>
                </ul>
                </div>
            </div> */}