import React from 'react';
import ShoppingCart from './basic/shoppingCart';

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <h1 className="storeName">Store</h1>
      <ShoppingCart cartnum={props.cartnum}></ShoppingCart>
    </nav>
  );
};

export default Navigation;
