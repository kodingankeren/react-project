import React, { Component, Fragment } from 'react';
import './Produk.css';
class Produk extends Component {
  state = {
    qty: 7,
  };
  handleMinus = () => {
    this.setState({
      qty: this.state.qty - 1,
    });
  };
  handlePlus = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Produk</h1>
        <div>Qty : {this.state.qty}</div>
        <button onClick={this.handleMinus}>-</button>
        <input type="text" />
        <button onClick={this.handlePlus}>+</button>
      </Fragment>
    );
  }
}

export default Produk;
