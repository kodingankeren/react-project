import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './Home.css';
import Produk from '../../container/Produk/Produk';
class Home extends Component {
  state = {
    cart: 0,
    produk: [],
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          produk: json,
        });
      });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        console.log(response);
      });
  }
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
        {this.state.produk.map((produk) => {
          return (
            <Produk
              key={produk.id}
              title={produk.title}
              onQtyChange={(value, count) => this.addToCart(value, count)}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default Home;
