import React from "react";
import "./style.css";

function Section1() {
  return (
    <section class="overlay__blog">
      <div className="container">
        
        <div class="overlay__text">
          
          <nav className="site-navbar">
            <div className="container">
              <div className="row1">
                <div className="left-navbar-items">
                  <a href="">
                    <h2>Financier</h2>
                  </a>
                </div>
                <div className="middle-navbar-items">
                  <ul className="items-navbar">
                    <a href="">
                      <li className="home-navbar">Home</li>
                    </a>
                    <li class="nav-item dropdown tem-navbar">
                    <a class="nav-link dropdown-toggle same-item-navbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Solutions
                    </a>
                    <ul class="dropdown-menu dropdown-menu-light">
                      <li><a class="dropdown-item" href="#">Menu One</a></li>
                      <li><a class="dropdown-item" href="#">Menu One</a></li>
                      <li><a class="dropdown-item" href="#">Dropdown</a>
                      
                      </li>

                    </ul>
                    
                    
                 
                  </li>
                    <a href="">
                      <li className="same-item-navbar">Services</li>
                    </a>
                    
             
                    <a href="">
                      <li className="same-item-navbar">About</li>
                    </a>
                    <a href="">
                      <li className="same-item-navbar">Contact Us</li>
                    </a>
                  </ul>
                </div>
                <div className="right-navbar-items">
                  <div className="call-icon-navbar">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className="call-top">
                    <a href="">
                      <p>123-489-9381</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>






          <nav class="navbar navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Financier</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
       
        <div class="offcanvas-body">
          <ul class="navbar-nav  justify-content-end flex-grow-1 pe-3">
            <li class="nav-item ">
              <a class="nav-link "  href="index.html">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link "  href="index.html">Solutions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pricing.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pricing.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
         
           
           
        
          </ul>
          
        </div>
      </div>
    </div>
  </nav>







          <div className="container">
            <div className="overlay-items">
              <div className="overlay-left-general">
                <div className="overlay-general-text">
                  <p className="overlay-title">We Help Grow Your Business</p>
                  <p className="overlay-text">
                    Far far away, behind the word mountains, far from the 
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="overlay-button">
                  <button className="contact-us-button">Contact us</button>
                  <a className="watch-button" href="">
                    Watch the video
                  </a>
                </div>
              </div>
              <div className="overlay-imgs">
                <img className="overlay-img" src="img/overlay.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
