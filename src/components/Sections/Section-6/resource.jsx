import "./resource.scss";

const SectionResource = (props) => {
  return (
    <div className="section-resource photo">
      <div className="content">
        <div className="row-content">
          <div className="col-top">
            <h6 class="lined-heading white">Resources</h6>
          </div>

          <div className="col-mid">
            <div class=" left">
              <h6>Free E-Book</h6>
              <h3 class="mb-4">Stone 101 Guide</h3>
              <p>
                Understand the variety of options available based on your style
                and decor preferences.
              </p>
              <p>
                <a
                  href="https://www.eldoradostone.com/wp-content/uploads/2018/08/Stone101Guide_1.4.23-1.pdf"
                  class="btn-bottom"
                  target="_self"
                >
                  <span class="text">Download the E-Book</span>
                  <span class="arrows">
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </p>
            </div>

            <div class=" right">
              <h6>Design Tool</h6>
              <h3 class="mb-4">Stone Visualizer</h3>
              <p>
                See what our stone products look like in different project
                application types.
              </p>
              <p>
                <a
                  href="https://eldoradostone.renoworks.com/"
                  class="btn-bottom"
                  target="_self"
                >
                  <span class="text">Start Designing</span>
                  <span class="arrows">
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div className="col-bot"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionResource;
