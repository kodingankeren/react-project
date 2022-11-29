import React, { Component } from 'react';
import './Produk.css';
class Produk extends Component {
  state = {
    qty: 0,
  };
  handleAddToCart = (value, counter) => {
    this.props.onQtyChange(value, counter);
  };
  handleMinus = () => {
    if (this.state.qty > 0) {
      this.setState(
        {
          qty: this.state.qty - 1,
        },
        () => {
          this.handleAddToCart(1, '-');
        }
      );
    }
  };
  handlePlus = () => {
    this.setState(
      {
        qty: this.state.qty + 1,
      },
      () => {
        this.handleAddToCart(1, '+');
      }
    );
  };
  render() {
    return (
      <div>
        <h1>Produk</h1>
        <div>Qty : {this.state.qty}</div>
        <button onClick={this.handleMinus}>-</button>
        {/* <input type="text" /> */}
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

export default Produk;
