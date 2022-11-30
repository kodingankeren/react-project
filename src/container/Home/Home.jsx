import React, { Component, Fragment } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import axios from 'axios';
import './Home.css';
import HalamanDepan from '../../pages/HalamanDepan/HalamanDepan';
import Kontak from '../../pages/Kontak/Kontak';
import Profile from '../../pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HalamanDepan />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
]);
class Home extends Component {
  render() {
    return <Fragment>
      <RouterProvider router={router} />
    </Fragment>;
  }
}

export default Home;
