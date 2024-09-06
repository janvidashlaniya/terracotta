import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./CarouselCard.css";
import star from "../assests/star (3).png";

import "swiper/css";
// import "swiper/css/navigation";
// import 'swiper/css/pagination';

import "swiper/css/autoplay";

function CarouselCard() {
  return (
    <>
      <div className="boest py-5">
        <div className="container-md mt-5">
          <h2 class="text-center">
            Exclusive
            <span className="font"> Category</span>
          </h2>
          <p className="text-center bear">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Eos in tempore rem!
          </p>
        </div>
        {/* part1 */}
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          spaceBetween={50}
          slidesPerView={6}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mt-5 container"
        >
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div class="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/2_c6b43227-ad96-46ab-b27f-139b3e35862b.png?v=1678788552"
                      alt=""
                    />
                  </a>
                  <h5>Flower Pot</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div class="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/5_f3caf5c2-1937-440b-89ea-58027c4bb954.png?v=1678788922"
                      alt=""
                    />
                  </a>
                  <h5>Lunch</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div class="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/6_7077fad1-d590-45a2-ac47-a6222eb6840b.png?v=1678788938"
                      alt=""
                    />
                  </a>
                  <h5>Chocolate</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div class="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/1_copy.png?v=1679035016"
                      alt=""
                    />
                  </a>
                  <h5>Pottery</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div class="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/3_e8a98b4f-aff3-4377-bee3-50fdd8bb1c7c.png?v=1678788521"
                      alt=""
                    />
                  </a>
                  <h5>Tea Set</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div className="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/1_2e705374-aa50-44ef-b683-ded9616931ef.png?v=1678788454"
                      alt=""
                    />
                  </a>
                  <h5>Bowl</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="stork">
              <div class="stork-col">
                <div className="stork_col">
                  <a href="home">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/category-1_50x50_1.png?v=1678789805"
                      alt=""
                    />
                  </a>
                  <h5>Dessert</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* part2*/}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <h2 class="tiest">
              The World's Oldest <br />
              <span className="joj">Craft</span>
            </h2>
            <div class="domt">
              <p>
                Discover our fantastic early booking discounts & start planning{" "}
                <br /> your journey.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
                ac consectetur icitudin et tortor, id. Est purus egestas
              </p>
            </div>
            <div class="bulid jok my-5">
              <button
                type="button"
                class="btn btn-success rounded-pill nike px-4"
              >
                Shop More
              </button>
            </div>
          </div>
          <div className="col-md-6 ps-5 d-flex">
            {/* <!-- card1 --> */}
            <div class="col">
              <div class="card">
                <div class="image card-img-top">
                  <div class="mt-3 ms-3 image-col">
                    <span class="sale p-2 rounded-circle">sale</span>
                    <div class="rate">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6 class="card-title text-center">Wowed Art</h6>
                  <p class="card-text text-center tost">
                    <span>$800.00</span>
                    $75.00
                  </p>
                  <div class="variants-swatch text-center">
                    <div class="color_swatch">
                      <label
                        class="swatch-label active"
                        data-value="RED"
                        data-variant-id="40210442420310"
                      >
                        <span
                          class="color-box"
                          data-image="//creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75.png?v=1679284141"
                          style={{ backgroundColor: "red" }}
                        ></span>
                        <span class="tool-tip">Red</span>
                      </label>
                    </div>
                    <div class="color_swatch">
                      <label
                        class="swatch-label "
                        data-value="BLACK"
                        data-variant-id="40210442453078"
                      >
                        <span
                          class="color-box"
                          data-image="//creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d.png?v=1679284141"
                          style={{ backgroundColor: "black" }}
                        ></span>
                        <span class="tool-tip"> Black</span>
                      </label>
                    </div>
                    <div class="color_swatch">
                      <label
                        class="swatch-label "
                        data-value="BLUE"
                        data-variant-id="40210442485846"
                      >
                        <span
                          class="color-box"
                          data-image="//creative-ishi.myshopify.com/cdn/shop/products/5_e73cb22f-8fbd-47af-adbd-784aea31f1c3.png?v=1679284142"
                          style={{ backgroundColor: "blue" }}
                        ></span>
                        <span class="tool-tip"> Blue</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card2 --> */}
            <div class="col">
              <div class="card">
                <div class="dest card-img-top">
                  <div class="mt-3 ms-3 image-col">
                    <span class="sale p-2 rounded-circle">sale</span>
                    <div class="rate">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6 class="card-title text-center">Woodsy Art</h6>
                  <p class="card-text text-center tost">
                    <span>$950.00</span>
                    $60.00
                  </p>
                  <div class="variants-swatch text-center">
                    <div class="color_swatch">
                      <label
                        class="swatch-label active"
                        data-value="RED"
                        data-variant-id="40210442420310"
                      >
                        <span
                          class="color-box"
                          data-image="//creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75.png?v=1679284141"
                          style={{ backgroundColor: "red" }}
                        ></span>
                        <span class="tool-tip">Red</span>
                      </label>
                    </div>
                    <div class="color_swatch">
                      <label
                        class="swatch-label "
                        data-value="BLACK"
                        data-variant-id="40210442453078"
                      >
                        <span
                          class="color-box"
                          data-image="//creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d.png?v=1679284141"
                          style={{ backgroundColor: "green" }}
                        ></span>
                        <span class="tool-tip"> Black</span>
                      </label>
                    </div>
                    <div class="color_swatch">
                      <label
                        class="swatch-label "
                        data-value="BLUE"
                        data-variant-id="40210442485846"
                      >
                        <span
                          class="color-box"
                          data-image="//creative-ishi.myshopify.com/cdn/shop/products/5_e73cb22f-8fbd-47af-adbd-784aea31f1c3.png?v=1679284142"
                          style={{ backgroundColor: "yellow" }}
                        ></span>
                        <span class="tool-tip"> Blue</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
