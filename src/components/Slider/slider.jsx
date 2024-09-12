import { useEffect, useState } from "react";
import "./slider.scss";
import banner1 from "../../assets/banner1.png"
import banner1_1 from "../../assets/banner1-1.png"
import main_banner_1 from "../../assets/main-banner-1.png"
import banner2 from "../../assets/banner2.png"
import banner2_2 from "../../assets/banner2-2.png"
import main_banner_2 from "../../assets/main-banner-2.png"
import banner3 from "../../assets/banner3.png"
import banner3_3 from "../../assets/banner3-3.png"
import main_banner_3 from "../../assets/main-banner-3.png"

const MainSlider = (props) => {

  const img = [
    {
      mainImage: main_banner_1,
      child1: banner1,
      child2: banner1_1
    },
    {
      mainImage: main_banner_2,
      child1: banner2,
      child2: banner2_2
    },
    {
      mainImage: main_banner_3,
      child1: banner3,
      child2: banner3_3
    }
  ]
  const [mainSlide, setMainSlide] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setMainSlide((prev) => (prev + 1) % img.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [img.length]);

  return (
    <div className="container-fluid">
      <div className="slide-wrapper-main">
        <div className="main-slide">
          <img className="img" alt="img" src={img[mainSlide].mainImage} />
        </div>
      </div>

      <div className="container-main">
        <div className="row-content">
          <div className="col-content">
            <div className="slide-wrapper">
              <div className="slide-content">
                <h1>
                  <span>The start of</span>
                  <br />
                  something
                  <br />
                  beautiful
                </h1>
                <p class="mt-4">
                <a
                href="/about-us"
                class="btn-bottom"

              >
                <span class="text">Find a dealer</span>
                <span class="arrows">
                <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
                </p>
              </div>
              <div className="slide-diamond-1">
                <div className="swiper">
                  <div className="swiper-wrapper">
                      <div className="img">
                        <img src={img[mainSlide].child1} alt="" className="fluid" />
                  
                      </div>
                    </div>
                </div>
              </div>
              <div className="slide-diamond-2">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="img">
                          <img src={img[mainSlide].child2} alt="" className="fluid" />
                    
                        </div>
                      </div>
                  </div>
              </div>
              <div className="slide-diamond-copper"></div>
              <div className="slide-diamond-blue"></div>
              <div className="slide-diamond-cream-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
