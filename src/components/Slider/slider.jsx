import "./slider.scss";

const MainSlider = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="slide-wrapper-main">
          <div className="main-slide">
            <img alt="img" src={require("../../assets/main-banner-1.png")} />
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
                      href="/where-to-buy"
                      class="btn btn-white "
                      target="_self"
                    >
                      <span class="text">Find a Dealer</span>
                    </a>
                  </p>
                </div>
                <div className="slide-diamond-1"></div>
                <div className="slide-diamond-2"></div>
                <div className="slide-diamond-copper"></div>
                <div className="slide-diamond-blue"></div>
                <div className="slide-diamond-cream-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
