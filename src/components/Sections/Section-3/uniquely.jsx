import "./uniquely.scss";

const SectionUniquely = (props) => {
  return (
    <div className="section-unique">
      <div className="content">
        <div class="row-content">
          <div class="col-left">
            <img class="img-fluid" src={require('../../../assets/inspiration.png')} alt="" />
          </div>
          <div class="col-right">
            <h6 class="lined-heading">Inspiration</h6>
            <h3>
              A place
              <br />
              uniquely yours
            </h3>
            <p>
              What invigorates a space? At Eldorado Stone, we design with this
              question in mind. From bedrooms, kitchens, facades and outdoor
              spaces to intimate enclaves, relaxing retreats and tranquil
              escapes, we help clients create their dreams.
            </p>
            <p>
              <a
                href="/imagine/"
                class="btn-bottom"
              >
                <span class="text">View our Gallery</span>
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

export default SectionUniquely;
