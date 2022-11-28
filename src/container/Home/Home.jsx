import React, { Component } from 'react';
import './Home.css';
import Produk from '../../container/Produk/Produk';
class Home extends Component {
  render() {
    return (
      <main>
        <Produk judul="Si Bolang" deskripsi="Bocah Layang-layang" />
        <Produk judul="Si Golang" deskripsi="Ngoding Golang" />
        <Produk judul="Si Rembes" deskripsi=" Gak Tau Adus" />
        <Produk />
      </main>
    );
  }
}

export default Home;
