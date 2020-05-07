import React from "react";
import history from "../../history";

const Product = ({
  id,
  name,
  description,
  img,
  price,
  addProd,
  isAuthUser,
}) => {
  // console.log("single product auth", isAuthUser);
  // console.log("product id is ", id);
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
            className="btn btn-success mx-2"
            onClick={() =>
              addProd({ id, name, description, img, price, units: 1 })
            }
          >
            Add to Cart
          </button>
          {isAuthUser && (
            <>
              <button type="button" className="btn btn-danger mx-2">
                {"Delete"}
              </button>

              <button
                type="button"
                className="btn btn-info mx-2"
                onClick={() => history.push("/UpdateProduct/?id=" + id)}
              >
                {"Update Item"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
