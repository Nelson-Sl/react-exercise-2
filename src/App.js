import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/navigation';
import BrandProduct from './components/BrandProduct';

class App extends Component {
  constructor() {
    super();
    console.log('Get Constructor');
    this.state = {
      cartnum: 0,
      brand: [],
      phoneData: [],
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3000/products';
    const brand = [];

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject('error');
      })
      .then((phoneData) => {
        phoneData.forEach((phone) => {
          if (!brand.length || !brand.includes(phone.category)) {
            brand.push(phone.category);
          }
        });
        this.setState({ brand, phoneData });
      })
      .catch((error) => console.log(error));
  }

  addToCart = () => {
    this.setState({
      cartnum: this.state.cartnum + 1,
      brand: this.state.brand,
      phoneData: this.state.phoneData,
    });
  };

  render() {
    console.log(this.state.phoneData);
    console.log('rendering');
    return (
      <main className="app">
        <Navigation cartnum={this.state.cartnum} />
        <section className="productArea">
          <BrandProduct
            brand={this.state.brand}
            phoneData={this.state.phoneData}
            addCart={this.addToCart}
          />
        </section>
      </main>
    );
  }
}

export default App;
