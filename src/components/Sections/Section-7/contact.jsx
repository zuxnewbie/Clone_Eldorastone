import "./contact.scss";

const SectionContact = (props) => {
  return (
    <div className="section-contact">
      <div class="left">
        <div class="row-content">
          <div class="col-left">
            <h6 class="lined-heading">CONTACT US</h6>
            <h3>WE’D LOVE TO HEAR FROM YOU</h3>
            <p>
              We’re ready to provide any and all assistance you might need to
              perfect your project.
            </p>
            <p>
              <a href="/about-us" class="btn-bottom">
                <span class="text">Contact Us</span>
                <span class="arrows">
                  <i className="fa-solid fa-minus"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="img-right">
        <img class="" src={require("../../../assets/contact.png")} alt="" />
      </div>
    </div>
  );
};

export default SectionContact;
