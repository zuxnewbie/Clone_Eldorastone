import "./banner.scss"

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* drop */}
              {/* <a className='navbar-brand'></a>
              <button className='navbar-toggler' type='button'></button> */}
              <span href="#" className="banner-login">
                <img src={require('../../assets/head-logo.png')} alt='imgg'/>
              </span>
            </div>
            <div className="col">
              <div className="social-icons">
                <span className="social-share"><i className="fa-brands fa-instagram"></i></span>
                <span className="social-share"><i className="fa-brands fa-facebook"></i></span>
                <span className="social-share"><i className="fa-brands fa-tiktok"></i></span>
                <span className="social-share"><i className="fa-brands fa-github"></i></span>
                <span className="social-share"><i className="fa-brands fa-youtube"></i></span>
                <span className="social-share"><i className="fa-brands fa-twitter"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
