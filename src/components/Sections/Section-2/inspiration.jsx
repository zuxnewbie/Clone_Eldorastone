import "./inspiration.scss";

const SectionInspiration = (props) => {
  return (
    
      <div className="section-inspiration">
        <div className="row-top">
          <div className="col-top">
            <h6 className="lined-heading">Products</h6>
            <h3>A natural inspiration</h3>
            <p>
              Each stone and brick is hand-painted piece by piece to create
              authentic details so that every space feels connected to organic
              elements. With over 150 colors and profiles to choose from, every
              vision is an attainable reality.
            </p>
          </div>
        </div>
        
        <div className="row-center">
          <div className="col-center" style={{padding: "0px"}}>
            <a href="/" className="prod-wrap">
              <h4>Stone</h4>
              <img className="full-fill" src={require('../../../assets/product1.png')} alt="Stone" />
            </a>
          </div>
          <div className="col-center">
            <a href="/" className="prod-wrap">
              <h4>Brick</h4>
              <img className="full-fill" src={require('../../../assets/product2.png')} alt="Brick" />
            </a>
          </div>
          <div className="col-center">
            <a href="/" className="prod-wrap">
              <h4>Stone Accents</h4>
              <img className="full-fill" src={require('../../../assets/product3.png')} alt="Stone Accesnts" />
            </a>
          </div>
        </div>


        <div className="row-bottom">
          <div className="col-bottom">
            <p>
              <a href="/" className="btn-bottom">
                <span className="text">View all products</span>
                <span className="arrows">
                    <i className="fa-solid fa-minus"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default SectionInspiration;
