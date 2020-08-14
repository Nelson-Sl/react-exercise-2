import React from 'react';
import Product from './functionPart/product';

function BrandProduct(props) {
  const { brandName, phoneData, addCart } = props;

  return (
    <div className="brandProducts">
      <h2>{brandName}</h2>
      {phoneData.map((phone) => {
        return <Product key={phone.name} phoneData={phone} addCart={addCart} />;
      })}
    </div>
  );
}

export default BrandProduct;
