import React, { useRef } from "react";
import "./OurLatestBlog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const OurLatestBlog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="container mt-5">
        <h2 class="text-center">Our Latest Blog</h2>
        <p className="text-center bear">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Eos in tempore rem!
        </p>
      </div>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-5 container"
      >
        {/* 1 */}
        <SwiperSlide>
          <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog8.png?v=1679049040"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog7.png?v=1679049008"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog6.png?v=1679048974"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog5.png?v=1679048937"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog4.png?v=1679048905"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 6 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog3.png?v=1679048868"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 7 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog2.png?v=1679048798"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* 8 */}
        <SwiperSlide>
        <div class="card" style={{ width: "22rem" }}>
            <div class="boast-col-img">
              <div class="boast-img">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/articles/blog1.png?v=1679048738"
                  alt=""
                  class=" ls-is-cached lazyloaded"
                />
              </div>
            </div>
            <div className="blog-card-date">
              <span>17 MARCH 2023</span>
            </div>
            <div class="card-body">
              <h5 class="card-title mt-5"  style={{color:"#627a6b"}}>Artem - Digital Marketing...</h5>
              <p class="card-text">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy m...
              </p>
              <a href="home"  style={{color:"#627a6b"}}>
                READ MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-navigation">
        <button ref={prevRef} className="custom-prev-button">
          <img
            src="https://www.pngmart.com/files/3/Previous-Button-PNG-File.png"
            alt=""
            height={20}
          />
        </button>
        <button ref={nextRef} className="custom-next-button">
          <img
            src="https://www.pngmart.com/files/3/Next-Button-PNG-Photos.png"
            alt=""
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default OurLatestBlog;
