import React from 'react';
import '../styles/Footer.css'; // Importing CSS styles

const Footer = () => {
  return (
    <footer className="footer">{/* Main footer container */}
      <footer class="footer flex-lg-row flex-column">
        <div class="container"> {/* Container for footer content */}
          <div class="row d-flex"> {/* Bootstrap row for grid layout */}

             {/* Section for Women's links */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <nav class="footnav1">
                <h5>Women</h5>
                <ul class="list-unstyled mb-0">
                  <li><a href="#" class="text-light">Dresses</a></li>
                  <li><a href="#" class="text-light">Pants</a></li>
                  <li><a href="#" class="text-light">Skirts</a></li>
                </ul>
              </nav>
            </div>

            {/* Section for Men's links */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Men</h5>
              <ul class="list-unstyled mb-0">
                <li><a href="#" class="text-light">Shirts</a></li>
                <li><a href="#" class="text-light">Pants</a></li>
                <li><a href="#" class="text-light">Hoodies</a></li>
              </ul>
            </div>

            {/* Section for Kids (no links provided) */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Kids</h5>
            </div>

            {/* Section for general links */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Links</h5>
              <ul class="list-unstyled mb-0">
                <li><a href="#" class="text-light">Home</a></li>
                <li><a href="#" class="text-light">Login</a></li>
                <li><a href="#" class="text-light">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">{/* Container for copyright section */}
          <hr/> {/* Horizontal line separator */}
            <p class="footer-end">Copyright © Ecommerce 2023-24</p> {/* Copyright notice */}
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
