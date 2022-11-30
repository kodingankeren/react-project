import React, { Component, Fragment } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
          <Link to="/">Home</Link>
          <Link to="/kontak">Kontak</Link>
      </Fragment>
    );
  }
}

export default Navbar;
