import React, { useState } from 'react';
import './header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <header className='header-container'>
        <a href='/#discover'>
          <img src='./assets/logo.svg' alt='Travelnow Logo' className='logo' />
        </a>
        {/* Menu Mobile*/}
        <figure className='mobile-menu' onClick={handleClick}>
          {open ? (
            <img
              src='./assets/icons/close-menu.svg'
              alt='Close Menu'
              className='close-menu'
            />
          ) : (
            <img
              src='./assets/icons/open-menu.svg'
              alt='Open Menu'
              className='open-menu'
            />
          )}
        </figure>
        {/*Desktop Nav*/}
        <nav className='desk-nav'>
          <a href='#discover' className='nav-links'>
            Discover
          </a>
          <a href='#destination' className='nav-links'>
            Destination
          </a>
          <a href='#about-us' className='nav-links'>
            About us
          </a>
        </nav>
        <div className='desk-btn'>
          <button className='nav-btn'>
            <a href='#'>Book A Tour</a>
          </button>
        </div>
      </header>
      {open && (
        <nav className='mobile-nav'>
          <a href='#discover' className='nav-links' onClick={handleClick}>
            Discover
          </a>
          <a href='#destination' className='nav-links' onClick={handleClick}>
            Destination
          </a>
          <a href='#about-us' className='nav-links' onClick={handleClick}>
            About us
          </a>
          <button className='nav-btn'>
            <a href='#' onClick={handleClick}>
              Book A Tour
            </a>
          </button>
        </nav>
      )}
    </>
  );
}
