import React from 'react';

const ShoppingCart = (props) => {
  const { addCart } = props;
  return (
    <button className="addToCart" onClick={addCart}>
      add to cart
    </button>
  );
};

export default ShoppingCart;
