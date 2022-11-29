import React, { Component, Fragment } from 'react';
import './Home.css';
import Produk from '../../container/Produk/Produk';
class Home extends Component {
  state = {
    cart: 0,
  };
  addToCart = (qty, count) => {
    let new_value = 0;
    if (count == '+') {
      new_value = this.state.cart + qty;
    } else if (count == '-') {
      new_value = this.state.cart - qty;
    }
    this.setState({
      cart: new_value,
    });
  };
  render() {
    return (
      <Fragment>
        <b>Cart : {this.state.cart}</b>
        <hr />
        <Produk onQtyChange={(value, count) => this.addToCart(value, count)} />
        <Produk onQtyChange={(value, count) => this.addToCart(value, count)} />
        <Produk onQtyChange={(value, count) => this.addToCart(value, count)} />
      </Fragment>
    );
  }
}

export default Home;
