import React from 'react';
import './__.css';
import logo from '../images/aptera-logo.webp';


export const HeaderAltColor = ({ children }) => <span className='header__title--alt-color'>{children}</span>;

const Header = ({ title, size }) =>
  <header className="header">
    <img className='header__logo' src={logo} alt='Aptera Logo' />
    <div className={`header__title${`--${size || 'large'}`}`}>{title}</div>
  </header>

export default Header