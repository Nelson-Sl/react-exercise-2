import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/navigation';
import BrandProduct from './components/BrandProduct';

class App extends Component {
  state = {
    cartnum: 0,
    brand: [],
    phoneData: [],
  };

  componentDidMount() {
    const url = 'http://localhost:3000/products';
    const brand = [];
    const phoneData = [];
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject('error');
      })
      .then((phoneStat) => {
        phoneStat.forEach((phone) => {
          if (!brand.length || !brand.includes(phone.category)) {
            brand.push(phone.category);
          }
          phoneData.push(phone);
        });
      })
      .then(
        this.setState({
          cartnum: 0,
          brand,
          phoneData,
        })
      );
  }

  addToCart = () => {
    this.setState({
      cartnum: this.state.cartnum + 1,
      brand: this.state.brand,
      phoneData: this.state.phoneData,
    });
  };

  render() {
    return (
      <main className="app">
        <Navigation cartnum={this.state.cartnum} />
        <div className="productArea">
          {this.state.brand.map((brandName, index) => (
            <BrandProduct
              key={index}
              phoneData={this.state.phoneData}
              brandName={brandName}
              addCart={this.addToCart()}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
