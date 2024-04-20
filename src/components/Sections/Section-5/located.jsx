import "./located.scss";

const SectionLocated = (props) => {
  return (
    <div className="section-locate">
      <div className="only-container">
        <div class="row-content">
          <div class="col-content">
            <h6 class="lined-heading">Find A Dealer</h6>
            <h3>Locate Eldorado Stone near you</h3>
            <p>
              With over 1,000 distributors across the nation, we make it easy to
              find exactly what you are looking for!
            </p>
            <p>
              <a
                href="/where-to-buy"
                class="btn-bottom"
                target="_self"
              >
                <span class="text">Find a Dealer</span>
                <span class="arrows">
                <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLocated;
