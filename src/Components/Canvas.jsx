import React from "react";
import "./Canvas.css";

const Canvas = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#fef7ec" }}
      >
        <div className="container  my-5">
          <h2 class="text-center">
            Every Canvas Has a<span className="font"> Story</span>
          </h2>
          <p className="text-center bear">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Eos in tempore rem!
          </p>
        </div>
        {/* <div>
          <div>
            <img
              src="https://creative-ishi.myshopify.com/cdn/shop/files/since-line.png?v=1682664702"
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="row mt-5">
          <div className="col-md-3">
            <div class="parent">
              <div class="child bg-one">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/story1.png?v=1678857674"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="parent">
              <div class="child bg-two">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/story2.png?v=1678857699"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="parent">
              <div class="child bg-three">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/story3.png?v=1678857717"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="parent">
              <div class="child bg-four">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/story4.png?v=1678857733"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="bulid text-center my-5">
            <button
              type="button"
              class="btn btn-success rounded-pill nike px-4"
            >
              Shop Now
            </button>
          </div>
        </div> */}
        <div class="story-container">
          <div class="story-since">
            <div id="since_1" class="since">
              1970{" "}
            </div>

            <div class="storyblock-img storyblock-img_1">
              <img
                src="//creative-ishi.myshopify.com/cdn/shop/files/story1.png?v=1678857674"
                alt=""
                class=" ls-is-cached lazyloaded"
              />
            </div>
          </div>

          <div class="story-since">
            <div id="since_2" class="since">
              1980{" "}
            </div>

            <div class="storyblock-img storyblock-img_2">
              <img
                src="//creative-ishi.myshopify.com/cdn/shop/files/story2.png?v=1678857699"
                alt=""
                class=" ls-is-cached lazyloaded"
              />
            </div>
          </div>

          <div class="story-since">
            <div id="since_3" class="since">
              2010{" "}
            </div>

            <div class="storyblock-img storyblock-img_3">
              <img
                src="//creative-ishi.myshopify.com/cdn/shop/files/story3.png?v=1678857717"
                alt=""
                class=" ls-is-cached lazyloaded"
              />
            </div>
          </div>

          <div class="story-since">
            <div id="since_4" class="since">
              2022{" "}
            </div>

            <div class="storyblock-img storyblock-img_4">
              <img
                src="//creative-ishi.myshopify.com/cdn/shop/files/story4.png?v=1678857733"
                alt=""
                class=" ls-is-cached lazyloaded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
