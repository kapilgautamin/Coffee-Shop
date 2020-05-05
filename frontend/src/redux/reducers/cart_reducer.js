import { ADD_TO_CART } from "../actions/CartAction";
// action = {
//     type : "string",
//     payload: "data"
// }

const cartReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);

      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cart, product)
          : [...cart, product];

      return updatedCart;
    }
  }
  return state;
};

const findProductIndex = (cart, productID) => {
  return cart.findIndex((p) => p.id === productID);
};

const updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];

  if (existingProduct.units + product.units > 0) {
    const updatedUnitsProduct = {
      ...existingProduct,
      units: existingProduct.units + product.units,
    };

    updatedCart[productIndex] = updatedUnitsProduct;
  } else if (existingProduct.units + product.units === 0) {
    updatedCart.splice(productIndex, 1);
  }
  return updatedCart;
};

export default cartReducer;
