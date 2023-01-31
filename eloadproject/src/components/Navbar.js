import React from 'react'
import logo from '../images/logo.png'
import {navLinks} from '../data'

const Navbar = () => {
  return (
    <nav className='big-nav-container'>
      <nav className="nav-container">
        <div className="header-logo-div">
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <a href="#a" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-div">
          <ul className='nav-ul'>
            {navLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <a key={id} href={href}>
                  <li>{text.toUpperCase()}</li>
                </a>
              );
            })}
            <a href="#acesso">
              <button className="access-btn">ACESSE A FERRAMENTA</button>
            </a>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar