import React from 'react';

const Product = ({id,name,description,img,price,addProd}) => {

    return (
        <div className="card w-20">
                <img src={img} className="img-thumbnail w-75 p-1 img-fluid" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <div>
                    <button type="button" className="btn btn-success" 
                    onClick={() => addProd({id,name,description,img,price,units:1})}
                    >Add</button>
                    </div>
                </div>
        </div>
    );
}

export default Product;

