import React, { Component } from 'react';
import './Home.css';
import Produk from '../../container/Produk/Produk';
class Home extends Component {
  render() {
    return (
      <main>
        <Produk judul="Si Bolang" deskripsi="Bocah Layang-layang" />
      </main>
    );
  }
}

export default Home;
