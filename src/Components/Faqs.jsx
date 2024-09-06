import React from "react";
import "./Faqs.css";
import Faq from "../Components/Faq";

const Faqs = () => {
  return (
    <>
      <div className="container-md mt-5">
        <h2 class="text-center">
          FAQ'
          <span className="font">s</span>
        </h2>
        <p className="text-center bear">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Eos in tempore rem!
        </p>
      </div>
      {/* question */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <Faq />
          </div>
          <div className="col-md-4">
            <a href="home">
              <div className="faq-image">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/faqs-image.png?v=1678882514"
                  alt=""
                  height={450}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
