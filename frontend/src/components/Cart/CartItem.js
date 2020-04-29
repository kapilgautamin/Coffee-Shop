import React from 'react';

const CartItem = ({id,name,description,img,price,units,addProd}) => {
    return(
        <div class="row cart-detail">
              <div class="col-lg-3 col-sm-3 col-3">
                <img src={img} alt={name}/>
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