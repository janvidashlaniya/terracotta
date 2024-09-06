import React from "react";
import "./Purchese.css";

const Purchese = () => {
  return (
    <>
      <div
        className="container-fluid  banner-block"
        style={{ backgroundColor: "#fef7ec" }}
      >
        <div class="page-width">
          <div class="row banner">
            <div class="banner-right">
              <div class="image-container-right">
                <div class="banner-right-img">
                  <div class="banner-img">
                    <img
                      src="//creative-ishi.myshopify.com/cdn/shop/files/banner-image.png?v=1678872580"
                      alt=""
                      class=" ls-is-cached lazyloaded"
                    />
                  </div>
                </div>

                <div class="banner-right-img banner-right-img2">
                  <div class="banner-img">
                    <img
                      src="//creative-ishi.myshopify.com/cdn/shop/files/banner-image2.png?v=1678872608"
                      alt=""
                      class=" ls-is-cached lazyloaded"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="banner-disc">
              <div class="section-header center">
                <span className="spat">All New Arrivals</span>
                <h2 class="text-center">
                  Purchase Has a <span className="font"> Purpose</span>
                </h2>
                <p className="text-center bear">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br />
                  Eos in tempore rem!
                </p>

                <div class="bulid text-center my-5">
                  <button
                    type="button"
                    class="btn btn-success rounded-pill nike px-4"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div class="banner-left ">
              <div class="image-container-left">
                <div class="banner-left-img banner-left-img2">
                  <div class="banner-img">
                    <img
                      src="//creative-ishi.myshopify.com/cdn/shop/files/banner-image3.png?v=1678872671"
                      alt=""
                      class=" ls-is-cached lazyloaded"
                    />
                  </div>
                </div>

                <div class="banner-left-img">
                  <div class="banner-img">
                    <img
                      src="//creative-ishi.myshopify.com/cdn/shop/files/Mask_group.png?v=1679552545"
                      alt=""
                      class=" ls-is-cached lazyloaded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchese;
