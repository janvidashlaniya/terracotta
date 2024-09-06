import React from "react";
import "./ClientSay.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ClientSay = () => {
  return (
    <>
      <div className="container  my-5">
        <h2 class="text-center">
          Client
          <span className="font"> Say's</span>
        </h2>
        <p className="text-center bear">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          Eos in tempore rem!
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-5 container"
      >
        <SwiperSlide>
          <div class=" reso my-5" style={{ width: "22rem", borderRadius: "12px" }}>
            <div className="loat">
              <div className="loat-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/Ellipse_30_2.png?v=1678796541"
                  alt=""
                />
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                ualiquam, pt aliquam, purus sit amet Lorem ipsum dolor sit amet.
              </p>
              <h5 class="card-title">John Doe</h5>
              <span className="fst-italic">(Web Designer)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class=" reso my-5" style={{ width: "22rem", borderRadius: "12px" }}>
            <div className="loat">
              <div className="loat-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/T.png?v=1679035172"
                  alt=""
                />
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                ualiquam, pt aliquam, purus sit amet Lorem ipsum dolor sit amet.
              </p>
              <h5 class="card-title">John Doe</h5>
              <span className="fst-italic">(Web Designer)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class=" reso my-5" style={{ width: "22rem", borderRadius: "12px" }}>
            <div className="loat">
              <div className="loat-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/Ellipse_30.png?v=1678794990"
                  alt=""
                />
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                ualiquam, pt aliquam, purus sit amet Lorem ipsum dolor sit amet.
              </p>
              <h5 class="card-title">John Doe</h5>
              <span className="fst-italic">(Web Designer)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class=" reso my-5" style={{ width: "22rem", borderRadius: "12px" }}>
            <div className="loat">
              <div className="loat-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/Ellipse_30_1.png?v=1678796525"
                  alt=""
                />
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                ualiquam, pt aliquam, purus sit amet Lorem ipsum dolor sit amet.
              </p>
              <h5 class="card-title">John Doe</h5>
              <span className="fst-italic">(Web Designer)</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ClientSay;
