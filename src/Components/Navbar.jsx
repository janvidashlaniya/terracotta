import React from "react";
import "./Navbar.css";
import serach from "../assests/serach.png";
import cart from "../assests/shopping-cart.png";
import like from "../assests/heart.png";
import contact from "../assests/contact.png";

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <div className="container-fluid header">
        <div className="row pt-2">
          <div className="col-md-4">
            <span className="number">
              {" "}
              <img
                src="https://creative-ishi.myshopify.com/cdn/shop/files/ZauqQfggYl.gif?v=1679474061"
                alt=""
                height={20}
              />{" "}
              9033697984
            </span>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <p className="">FREE SHIPPING ON ORDERS ABOVE $275+</p>
          </div>
          <div className="col-md-3">
            <p className="email">
              <img
                src="https://creative-ishi.myshopify.com/cdn/shop/files/177-envelope-mail-send-outline_2.gif?v=1679982532"
                alt=""
                height={30}
                className="px-2"
              />
              info@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="container-fluid rest">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="home">
              <img
                src="https://creative-ishi.myshopify.com/cdn/shop/files/Group_3_1_large.png?v=1680153387"
                alt=""
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu3">
                <li class="nav-item dropdown most">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="home"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    TerraCotta
                  </a>
                  <ul class="dropdown-menu fade-up d-flex">
                    <li>
                      <a class="dropdown-item" href="home">
                        <h6>Famous Art</h6>
                      </a>
                      <ul className="host">
                        <li>Impressioinism Art</li>
                        <li>Multicolor Art</li>
                        <li>Spiritual Art</li>
                        <li>Fantasy Art</li>
                        <li>Fine Art</li>
                        <li>The face of Art</li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        <h6>New Artist</h6>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        <h6>Popular Arts</h6>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown most">
                  <a
                    class="nav-link"
                    href="home"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gallery
                  </a>
                  <ul class="dropdown-menu fade-up">
                    <li>
                      <a class="dropdown-item" href="home">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown most">
                  <a
                    class="nav-link"
                    href="home"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Included Pages
                  </a>
                  <ul class="dropdown-menu fade-up">
                    <li>
                      <a class="dropdown-item" href="home">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown most">
                  <a
                    class="nav-link"
                    aria-disabled="true"
                    role="button"
                    href="home"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul class="dropdown-menu fade-up">
                    <li>
                      <a class="dropdown-item" href="home">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown most">
                  <a
                    class="nav-link"
                    aria-disabled="true"
                    role="button"
                    href="home"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul class="dropdown-menu fade-up">
                    <li>
                      <a class="dropdown-item" href="home">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="home">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-5 monj d-flex">
            <a href="#home">
              {" "}
              <img src={serach} alt="" height={30} className="px-1" />
            </a>
            <a href="#home">
              {" "}
              <img src={contact} alt="" height={30} className="px-1" />
            </a>
            <a href="#home">
              <img src={like} alt="" height={30} className="px-1" />
            </a>
            <a href="#home">
              {" "}
              <img src={cart} alt="" height={30} className="px-1" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
