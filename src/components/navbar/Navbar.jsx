import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <header id="header" className="header">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container">
            <Link to="/" className="navbar-brand" href="index.html">
              <img src="img/logo.jpg" className="logo-light" alt="logo" />
              <img src="img/logo.jpg" className="logo-dark" alt="logo" />
            </Link>
            <button
              className={click ? 'navbar-toggler actived' : 'navbar-toggler'}
              type="button"
              onClick={handleClick}
            >
              <span className="menu-lines">
                <span />
              </span>
            </button>
            <div
              className={
                click
                  ? 'collapse navbar-collapse menu-opened'
                  : 'collapse navbar-collapse'
              }
              id="mainNavigation"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav__item">
                  <a href="#slider" className="nav__item-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__item-link">
                    About Us
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#track" className="nav__item-link">
                    Track Shipment
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#footer" className="nav__item-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-collapse */}
            <div className="navbar-modules">
              <ul className="modules__wrapper d-flex align-items-center list-unstyled">
                <li>
                  <div id="ytWidget" />
                  <div className="clearfix" />
                  {/* /.clearfix */}
                </li>
              </ul>
              {/* /.modules-wrapper */}
            </div>
            {/* /.navbar-modules */}
          </div>
          {/* /.container */}
        </nav>
        {/* /.navabr */}
      </header>
    </>
  );
};

export default Navbar;
