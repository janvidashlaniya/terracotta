import React, { useRef } from "react";
import star from "../assests/star (3).png";
import "./TredingProduct.css";
// import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TredingProduct = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="container  my-5">
        <h2 class="text-center">
          Trending<span className="font"> Products</span>
        </h2>
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
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mt-5 container"
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card3 --> */}
          <div class="col">
            <div class="card">
              <div class="deal card-img-top">
                <div class="mt-4 ms-4 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Wert Art</h6>
                <p class="card-text text-center tost">$75.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card4 --> */}
          <div class="col">
            <div class="card">
              <div class="dost card-img-top">
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
                <h6 class="card-title text-center">The Craft</h6>
                <p class="card-text text-center tost">
                  <span>$850.00</span>
                  $750.00
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
                        style={{ backgroundColor: "blue" }}
                      ></span>
                      <span class="tool-tip"> Blue</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card5 --> */}
          <div class="col">
            <div class="card">
              <div class="flat card-img-top">
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
                <h6 class="card-title text-center">Proof Art</h6>
                <p class="card-text text-center tost">
                  <span>$700.00</span>
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
                        style={{ backgroundColor: "green" }}
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
                        style={{ backgroundColor: "blue" }}
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
                        style={{ backgroundColor: "red" }}
                      ></span>
                      <span class="tool-tip"> Blue</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card6 --> */}
          <div class="col">
            <div class="card">
              <div class="gist card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <span
                    class="sale p-1 pt-0 rounded goat"
                    style={{ fontsize: "12px" }}
                  >
                    sold out
                  </span>
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Prettified Art</h6>
                <p class="card-text text-center tost">$70.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card7 --> */}
          <div class="col">
            <div class="card">
              <div class="crit card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Presented Art</h6>
                <p class="card-text text-center tost">$80.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card8 --> */}
          <div class="col">
            <div class="card">
              <div class="disk card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <span
                    class="sale p-1 pt-0 rounded goat"
                    style={{ fontsize: "12px" }}
                  >
                    sold out
                  </span>
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Praised Art</h6>
                <p class="card-text text-center tost">$75.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card9 --> */}
          <div class="col">
            <div class="card">
              <div class="mosm card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Penta Art</h6>
                <p class="card-text text-center tost">$70.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card10 --> */}
          <div class="col">
            <div class="card">
              <div class="momt card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Humbling Art</h6>
                <p class="card-text text-center tost">$65.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card11 --> */}
          <div class="col">
            <div class="card">
              <div class="pear card-img-top">
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
              <div class="card-body feat">
                <h6 class="card-title text-center">Grandiose Art</h6>
                <p class="card-text text-center tost">
                  <span>$70.00</span>
                  $60.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- card12 --> */}

          <div class="col">
            <div class="card">
              <div class="fly card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Flattering Art</h6>
                <p class="card-text text-center tost">$90.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card13 */}
          <div class="col">
            <div class="card">
              <div class="woad card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Evolu-Dome</h6>
                <p class="card-text text-center tost">$70.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card14 */}
          <div class="col">
            <div class="card">
              <div class="kote card-img-top">
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
                <h6 class="card-title text-center">Coutured Art</h6>
                <p class="card-text text-center tost">$85.00</p>
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
        </SwiperSlide>
        <SwiperSlide>
          {/* card15 */}
          <div class="col">
            <div class="card">
              <div class="dote card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Block Art</h6>
                <p class="card-text text-center tost">$50.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card16 */}
          <div class="col">
            <div class="card">
              <div class="voat card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Blinged Art</h6>
                <p class="card-text text-center tost">$75.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card17 */}
          <div class="col">
            <div class="card">
              <div class="voite card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Beautified Art</h6>
                <p class="card-text text-center tost">$50.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card18 */}
          <div class="col">
            <div class="card">
              <div class="leat card-img-top">
                <div class="mt-3 ms-3 image-col">
                  <div class="rate">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div class="card-body feat">
                <h6 class="card-title text-center">Agreeable Art</h6>
                <p class="card-text text-center tost">$80.00</p>
              </div>
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

      {/* company logo */}
      <Swiper
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
        className="my-5 container"
      >
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/logo4.png?v=1678861878"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/logo6.png?v=1678861838"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/logo5.png?v=1678861861"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/logo2_1.png?v=1678861894"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/7_cd3682ca-ea40-473d-ba60-9d5e65be7f08.png?v=1678862194"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/logo1.png?v=1678861920"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo">
            <a href="home">
              <div className="logo-col">
                <img
                  src="https://creative-ishi.myshopify.com/cdn/shop/files/logo6.png?v=1678861838"
                  alt=""
                />
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TredingProduct;
