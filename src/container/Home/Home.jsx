import React, { Component } from 'react';
import './Home.css';
import BlogList from '../../component/BlogList/BlogList';
class Home extends Component {
  render() {
    return (
      <main>
        <BlogList judul="Si Bolang" deskripsi="Bocah Layang-layang" />
        <BlogList judul="Si Golang" deskripsi="Ngoding Golang" />
        <BlogList judul="Si Rembes" deskripsi=" Gak Tau Adus" />
        <BlogList />
      </main>
    );
  }
}

export default Home;
