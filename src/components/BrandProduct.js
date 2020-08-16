import React, { Component } from 'react';
import Product from './functionPart/product';
import '../styles/productArea.scss';

class BrandProduct extends Component {
  state = {
    currentBrand: '',
  };

  setCurrentBand = (brandName) => {
    this.setState({
      currentBrand: brandName,
    });
  };

  render() {
    const { phoneData, brand, addCart } = this.props;
    console.log(phoneData);
    console.log(phoneData.length);
    return brand.map((brandName) => {
      return (
        <div key={brandName} className="brandProduct">
          <h2 className="brandTitle">{brandName}</h2>
          <Product brand={brandName} phone={phoneData} addCart={addCart} />
        </div>
      );
    });
  }
}

export default BrandProduct;
