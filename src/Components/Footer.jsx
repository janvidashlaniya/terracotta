// src/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <div className=" wavey wave1"></div>
        <div className=" wavey2 wave2"></div>
        <footer className="footer-area">
          <div className="main">
            <div className="footer">
              <div className="single-footer">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-2">
                      <h5 className="nest">SUBSCRIBE NOW!</h5>
                    </div>
                    <div className="col-md-7">
                      <div className="input">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input_field"
                        />
                      </div>
                      <div className="jost-col">
                        <button
                          type="button"
                          class="btn btn-secondary jost rounded-pill"
                        >
                          SUBSCRIBE
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex">
                        <a href="home">
                          <div className="f1 rounded-circle py-2 mx-2">
                            <i class="fa-brands fa-facebook-f px-3"></i>
                          </div>
                        </a>
                        <a href="home">
                          <div className="mx-2 f2 f1 rounded-circle py-2">
                            <i class="fa-brands fa-instagram insta"></i>
                          </div>
                        </a>
                        <a href="home">
                          <div className="mx-2 f3 f1 rounded-circle py-2">
                            <i class="fa-brands fa-tiktok tiktok"></i>
                          </div>
                        </a>
                        <a href="home">
                          <div className="mx-2 f4 f1 rounded-circle py-2">
                            <i class="fa-brands fa-snapchat snapchat"></i>
                          </div>
                        </a>
                        <a href="home">
                          <div className="mx-2 f5 f1 rounded-circle py-2">
                            <i class="fa-brands fa-vimeo-v vimeo"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <hr style={{ marginTop: "3rem" }} />
                    <div className="row my-2">
                      <div className="col-md-3 nioes">
                        <h5 className="nioes_col">OUR COMPANY</h5>
                        <div>
                          <ul className="">
                            <li className="py-2">
                              <a href="home"> Personal Info</a>
                            </li>
                            <li>
                              <a href="home"> Orders</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> Credit Slips</a>
                            </li>
                            <li>
                              <a href="home"> Content</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> Addresses</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3 nioes">
                        <h5 className="nioes_col">PRODUCTS</h5>
                        <div>
                          <ul>
                            <li className="py-2">
                              <a href="home"> Product-1</a>
                            </li>
                            <li>
                              <a href="home"> Product-1</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> Product-3</a>
                            </li>
                            <li>
                              <a href="home"> Product-4</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> Product-5</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3 nioes">
                        <h5 className="nioes_col"> ABOUT US</h5>
                        <div>
                          <ul>
                            <li className="py-2">
                              <a href="home"> Abous us</a>
                            </li>
                            <li>
                              <a href="home"> Contact us</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> FAQs</a>
                            </li>
                            <li>
                              <a href="home"> New Products</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> Best Sales</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-3 nioes">
                        <h5 className="nioes_col"> YOUR ACCOUNT</h5>
                        <div>
                          <ul>
                            <li className="py-2">
                              <a href="home"> login </a>
                            </li>
                            <li>
                              <a href="home"> Forgot Password</a>
                            </li>
                            <li className="py-2">
                              <a href="home"> My Account</a>
                            </li>
                            <li>
                              <a href="home">Registration</a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
