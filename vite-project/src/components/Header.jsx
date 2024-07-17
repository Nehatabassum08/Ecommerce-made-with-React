import React from 'react';
import '../styles/Header.css'; // Importing CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome icons


const Header = () => {
  return (
    <>
      <header className="header">
        {/* Bootstrap navbar with custom styling */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 mx-0 my-0" data-bs-theme="dark">
          <div className="container-fluid d-flex justify-content-between align-items-center w-100 m-0 no-gutters">
            <h1>Ecommerce</h1>
            {/* Search form */}
            <form className="sbox d-flex">
              <input type="text" placeholder="Product name, Category name, etc." className="search" />
              <button type="submit" className="sbt">Search</button>
            </form>
            {/* Login button and shopping cart link */}
            <div className="d-flex justify-content-end align-items-center">
              <button className="btn btn-warning loginbtn">Login</button>
              <a href="#" className="cart mx-2"> {/* Shopping cart link */}
                <FontAwesomeIcon icon={faCartShopping} /> {/* Shopping cart icon */}
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Secondary navigation section */}
      <section>
        {/* Bootstrap navbar for secondary navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">All Products</a>
                </li>
                {/* Dropdown menu for Women's products */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="womenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Women
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="womenDropdown">
                    <li><a class="dropdown-item" href="#">All Products</a></li>
                    <li><a class="dropdown-item" href="#">Dresses</a></li>
                    <li><a class="dropdown-item" href="#">Pants</a></li>
                    <li><a class="dropdown-item" href="#">Skirts</a></li>
                  </ul>
                </li>
                {/* Dropdown menu for Men's products */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Men
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="menDropdown">
                    <li><a class="dropdown-item" href="#">All Products</a></li>
                    <li><a class="dropdown-item" href="#">Shirts</a></li>
                    <li><a class="dropdown-item" href="#">Pants</a></li>
                    <li><a class="dropdown-item" href="#">Hoodies</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Kids</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
