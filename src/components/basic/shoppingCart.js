import React from 'react';
import FontAwesome from 'react-fontawesome';

const ShoppingCart = (props) => {
  return (
    <div className="shoppingCart">
      <FontAwesome
        name="cart-plus"
        style={{
          color: 'white',
          height: '20px',
          width: '20px',
          display: 'inline-block',
        }}
      />
      <div className="cartNumDecoration">
        <span className="cartNum">{props.cartnum}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
