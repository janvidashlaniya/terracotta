import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className=" hero">
      <section className="fost">
        {/* carousel */}
        <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
       

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="mlki">
              <div class="container">
                <div class="row gost">
                  <div class="col-md-6">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/rm300-pf-s62-pom-1024-pom-card-google_1_494ad4f7-c177-443c-b3dc-f5b5ab948fe6.png?v=1679567598"
                      alt=""
                      height="500"
                      class="py-5"
                    />
                  </div>
                  <div class="col-md-6 mlki-col">
                    <h5 class="text-center canvas">THE CANVAS STORY</h5>
                    <h1 class="text-center canvas1">TERRA COTTA</h1>
                    <p class="text-center py-4 canvas2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quis dolor ac lobortis iaculis nam adipiscing elit Quis .
                    </p>
                    <div class="d-flex munj">
                      <div class="btn1">
                        <button
                          type="button"
                          class="btn btn-secondary rounded-pill"
                        >
                          SHOP NOW
                        </button>
                      </div>
                      <div class="btn2">
                        <button
                          type="button"
                          class="btn btn-secondary rounded-pill"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="mlki" id="mlki">
              <div class="container">
                <div class="row gost">
                  <div class="col-md-6 mlki-col">
                    <h5 class="text-center canvas">THE CANVAS STORY</h5>
                    <h1 class="text-center canvas1">TERRA COTTA</h1>
                    <p class="text-center py-4 canvas2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quis dolor ac lobortis iaculis nam adipiscing elit Quis .
                    </p>
                    <div class="d-flex munj">
                      <div class="btn1">
                        <button
                          type="button"
                          class="btn btn-secondary rounded-pill"
                        >
                          SHOP NOW
                        </button>
                      </div>
                      <div class="btn2">
                        <button
                          type="button"
                          class="btn btn-secondary rounded-pill"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img
                      src="https://creative-ishi.myshopify.com/cdn/shop/files/Rectangle_114_1_copy.png?v=1679569198"
                      alt=""
                      height="500"
                      class="py-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className=" wavey wave1"></div>
      </section>
    </div>
  );
};

export default Carousel;
