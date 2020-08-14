import React from 'react';
import Image from '../../assets/product_image_placeholder.png';
import ShoppingCart from '../basic/addToCart';

function Product(props) {
  const { phoneData, addCart } = props;
  return (
    <div className="product">
      <h3>{phoneData.name}</h3>
      <img src={Image} alt="productImage" />
      <span>{phoneData.price}</span>
      <ShoppingCart addCart={addCart} />
    </div>
  );
}

export default Product;
