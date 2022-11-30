import React, { Component, Fragment } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import HalamanDepan from '../../pages/HalamanDepan/HalamanDepan';
import Kontak from '../../pages/Kontak/Kontak';
import Profile from '../../pages/Profile/Profile';
import Navbar from '../../container/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HalamanDepan />,
  },
  {
    path: '/kontak',
    element: <Kontak />,
  },
]);
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <RouterProvider router={router} />
      </Fragment>
    );
  }
}

export default Home;
