import React from 'react';
import Image from '../../assets/product_image_placeholder.png';
import ShoppingCart from '../basic/addToCart';
import '../../styles/productArea.scss';

function Product(props) {
  const { phone, brand, addCart } = props;
  const phoneList = phone.filter((phone) => phone.category === brand);
  return (
    <div className="product">
      {phoneList.map((phone) => {
        return (
          <div key={phone.name} className="phoneInfo">
            <h3 className="phoneTitle">{phone.name}</h3>
            <img src={Image} alt="productImage" />
            <span>{phone.price}</span>
            <ShoppingCart addCart={addCart} />
          </div>
        );
      })}
    </div>
  );
}

export default Product;
