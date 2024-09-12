import React, { useState } from 'react';
import "./navbar.scss";
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [contentAbout, setContentAbout] = useState(false);
  const [contentProduct, setContentProduct] = useState(false);
  const [contentImagine, setContentImagine] = useState(false);
  const [contentResources, setContentResources] = useState(false);
  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleContentAbout = () => {
    setContentAbout(!contentAbout);
  };
  const toggleContentProduct = () => {
    setContentProduct(!contentProduct);
  };
  const toggleContentImagine = () => {
    setContentImagine(!contentImagine);
  };
  const toggleContentResources = () => {
    setContentResources(!contentResources);
  };


  return (
    <nav className="navbar">
      <div className="container">
        {/* a */}
        {/* <div className="bar"> */}

          
        {/* </div> */}
          {/* <button className="navbar-toggler" type='button'></button> */}
        <ul className="nav top-nav">
          <li className="nav-item">
            <a href="a#" className="nav-link">
              Stone Visualizer
            </a>
          </li>
          <li className="nav-item">
            <a href="a#" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="a#" className="nav-link">
              Contact Us
            </a>
          </li>
          <li className="nav-item dropdown search-dropdown">
            <i className="fa-solid fa-magnifying-glass nav-link nav-hover"></i>
            {/* drop */}
            <div className="dropdown-menu drop-search">
              <div className="input-group">
                <input className="input-drop" placeholder="Text" />
                <button className="button-drop">Search</button>
              </div>
            </div>
          </li>
        </ul>

        {/* nav here */}
        <div className="collapse navbar-collapse row">
          <div className="col left">
            <a href='a' className="navbar-brand">
              <img alt="img" src={require('../../assets/logo.png')}/>
            </a>
          </div>
          <div className="col navbar-dropdown">
            <ul className="navbar-nav">




              
              <li className="nav-item dropdown menu-item">
                <Link to={`about`} className="nav-link nav-link-about">About Us
                  <ul className="dropdown-menu">
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Our Story</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Press</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Associations</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Certifications</a></li>
                  </ul>
                </Link >
                {/* more drop in below */}
              </li>








              <li className="nav-item  dropdown menu-item">
                <a href='a' className="nav-link nav-link-product">Products
                <ul className="dropdown-menu">
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Stone</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Brick</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Stone Accents</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Product Selector</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Discover Kindred Outdoors + Surrounds</a></li>
                  </ul></a>
              </li>
              <li className="nav-item  dropdown menu-item">
                <Link to={`about`} className="nav-link nav-link-imagine">Imagine
                <ul className="dropdown-menu">
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Inspiration Galleries</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Stone Visualizer</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Before & After</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Project Portfolios</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Video Library</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Design Partners</a></li> 
                  </ul>
                </Link>
              </li>
              <li className="nav-item  dropdown menu-item">
                <a href='a' className="nav-link nav-link-resources">Resources
                <ul className="dropdown-menu">
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Product Literature</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Education</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Specifications + Details</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Installation + Maintenance</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Video Library</a></li>
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Warranty & FAQ</a></li> 
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">AIA Program</a></li> 
                    <li className="li-hover"><a href="a" className="dropdown-item menu-item">Certified Installer Program</a></li> 
                  </ul></a>
              </li>
              <li className="nav-item dropdown menu-item">
                <a href='a' className="nav-link nav-link-where">Where to buy</a>
              </li>
            </ul>
          </div>
        </div>


        <span className="navbar-brand dropdown" id="dropdownContent" onClick={toggleDropdown}><i className="fa-solid fa-bars"></i></span>
          {showDropdown && (
           <div className={`dropdown-content ${showDropdown ? 'show' : ''}`} aria-labelledby="dropdown-1">
            <div className="">
              <ul className='show-ul'>
                <li className='show-li'>
                  <a href="aht" target="">About Us</a>
                  <span style={{float:'right'}} onClick={toggleContentAbout}><i className={`fa-solid fa-caret-${contentAbout ? 'up' : 'down'}`}></i></span>
                  
                  {contentAbout &&  (
                    <div className={`show-content ${contentAbout ? 'show' : ''} dropdown-content-wrapper`}>
                      <div className="detail-content">
                        <span className='item-content'>Our Story</span>
                        <span className='item-content'>Press</span>
                        <span className='item-content'>Associations</span>
                        <span className='item-content'>Certifications</span>
                      </div>
                    </div>
                  )}
                </li><hr/>
                <li className={`show-li ${contentAbout ? 'wrapper-product' : ''}`}>
                  <a href="aht" target="">Products</a>
                  <span style={{float:'right'}} onClick={toggleContentProduct}><i className={`fa-solid fa-caret-${contentProduct ? 'up' : 'down'}`}></i></span>
                  {contentProduct &&  (
                    <div className={`show-content ${contentProduct ? 'show' : ''} dropdown-content-wrapper`}>
                      <div className="detail-content">
                        <span className='item-content'>Our Story</span>
                        <span className='item-content'>Press</span>
                        <span className='item-content'>Associations</span>
                        <span className='item-content'>Certifications</span>
                        <span className='item-content'>Discover Kindred Outdoors + Surrounds</span>
                      </div>
                    </div>
                  )}
                </li><hr/>
                <li className={`show-li  ${contentProduct ? 'wrapper-imagine' : ''}`}>
                  <a href="aht" target="">Imagine</a>
                  <span style={{float:'right'}}  onClick={toggleContentImagine}><i className={`fa-solid fa-caret-${contentImagine ? 'up' : 'down'}`}></i></span>
                  {contentImagine &&  (
                    <div className={`show-content ${contentImagine ? 'show' : ''} dropdown-content-wrapper`}>
                      <div className="detail-content">
                        <span className='item-content'>Inspiration Galleries</span>
                        <span className='item-content'>Stone Visualizer</span>
                        <span className='item-content'>Before & After</span>
                        <span className='item-content'>Project Portfolios</span>
                        <span className='item-content'>Video Library</span>
                      </div>
                    </div>
                  )}
                </li><hr/>
                <li className={`show-li  ${contentImagine ? 'wrapper-resources' : ''}`}>
                  <a href="aht" target="">Resources</a>
                  <span style={{float:'right'}} onClick={toggleContentResources}><i className={`fa-solid fa-caret-${contentResources ? 'up' : 'down'}`}></i></span>
                  {contentResources &&  (
                    <div className={`show-content ${contentResources ? 'show' : ''} dropdown-content-wrapper`}>
                      <div className="detail-content">
                        <span className='item-content'>Product Literature</span>
                        <span className='item-content'>Education</span>
                        <span className='item-content'>Specifications + Details</span>
                        <span className='item-content'>Installation + Maintenance</span>
                        <span className='item-content'>Video Library</span>
                        <span className='item-content'>Warranty & FAQ</span>
                        <span className='item-content'>AIA Program</span>
                        <span className='item-content'>Certified Installer Program</span>
                      </div>
                    </div>
                  )}
                </li><hr/>
                <li className={`show-li  ${contentResources ? 'wrapper-where' : ''}`}>
                  <a href="aht" target="">Where to buy</a>
                </li><hr/>
                <li className='show-li'>
                  <a href="aht" target="">Blog</a>
                </li>
              </ul>
           </div>
         </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
