import React from 'react';
import './TopBar.scss';
import Logo from './duality.svg';

const TopBar = props => (
    <nav id='top-bar'>
      {/*<span className='logo'>School Of Future</span>*/}
      <img className='logo' src={Logo}/>
    </nav>
);

export default TopBar;
