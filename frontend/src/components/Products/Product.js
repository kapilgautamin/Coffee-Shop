import React from "react";

const Product = ({ id, name, description, img, price, addProd,isAuthUser }) => {
  // console.log("single product auth", isAuthUser);
  return (
    <div className="card col-xl-3 col-lg-3 col-sm-6">
      <img src={img} className="img-thumbnail mx-2 img-fluid" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() =>
              addProd({ id, name, description, img, price, units: 1 })
            }
          >
            Add
          </button>
          {isAuthUser && (
          <button
            type="button"
            className="btn btn-danger"
          >
            {"Delete"}
          </button>)
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
