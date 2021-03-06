import React, { Component } from 'react';
import FooterMenu from './FooterMenu';

import logo from '../../media/img/logo.png';


class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-wrap">
          <div className="footer-block">
              <img src={logo} alt="logo" />
              <FooterMenu />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
