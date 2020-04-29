import React from 'react';

const CartItem = ({id,name,description,img,price,units,addProd}) => {
    return(
        <div class="row cart-detail">
              <div class="col-lg-3 col-sm-3 col-3">
                <img src={img} />
              </div>
              <div class="col-lg-9 col-sm-9 col-9 cart-detail-product d-flex justify-content-between">
              <div className="d-flex flex-column">
                <p>{name}</p>
                <span class="count">Price : ${price}</span>
                 <span class="price text-info"> Quantity:{units}</span>
               </div>
               <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary mx-1" 
                onClick={() => addProd({id,name,description,img,price,units:1})}>+</button>
                <button type="button" className="btn btn-warning mx-1" 
                onClick={() => addProd({id,name,description,img,price,units:-1})}>-</button>
                </div>
              </div>    
                  
              
        </div>


       
    );
}


export default CartItem;

{/* <li className="list-group-item d-flex justify-content-between dropdown-item">
<img className="img-thumbnail w-40" src={img} />
    <div className="align-self-center d-flex flex-column">
    <span>Name : {name}</span>
    <span>Price : ${price}</span>
    <span>Units : {units}</span>
    </div>
    <div className="clearfix align-self-center">
    <button type="button" className="btn btn-primary" 
    onClick={() => addProd({id,name,description,img,price,units:1})}>+</button>
    <button type="button" className="btn btn-warning" 
    onClick={() => addProd({id,name,description,img,price,units:-1})}>-</button>
    </div>
</li> */}