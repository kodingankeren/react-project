import React, { Component, Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import HalamanDepan from '../../pages/HalamanDepan/HalamanDepan';
import Kontak from '../../pages/Kontak/Kontak';
import Profile from '../../pages/Profile/Profile';
import Navbar from '../../container/Navbar/Navbar';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HalamanDepan />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Fragment>
    );
  }
}

export default Home;
