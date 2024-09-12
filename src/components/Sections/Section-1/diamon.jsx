import "./diamon.scss";

const SectionDiamon = (props) => {
  return (
    <div className="section" style={{backgroundColor: "white"}}>
      <div className="container">
        <div class="hihi">
          <div class="row-content">
            <h3>
              From stone
              <br />
              to diamond
            </h3>
            <p>
              Like a diamond’s evolution from raw earth to unique design, for
              nearly 50 years Eldorado Stone has transformed exteriors and
              interiors with the most believable architectural stone veneer in
              the world. With artisan finishes made in nature’s likeness, the
              truly transformational possibilities are endless.
            </p>
          </div>
        </div>
      </div>

      <div className="img-right">
        <img className="" src={require('../../../assets/navside_1.png')} alt="" />
      </div>
    </div>
  );
};

export default SectionDiamon;
