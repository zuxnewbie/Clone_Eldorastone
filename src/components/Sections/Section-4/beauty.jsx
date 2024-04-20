import "./beauty.scss";

const SectionBeauty = (props) => {
  return (
    <div className="section-beauty">
      <div class="left">
        <div class="row-content">
          <div class="col-left">
            <h6 class="lined-heading">About Us</h6>
            <h3>Beauty envisioned</h3>
            <p>
              At Eldorado Stone, we push the boundaries of excellence, beauty
              and innovation by harnessing nature’s creativity and reimaging
              stone’s possibilities. Through technical textures, hand-painted
              hues, extensive selections and superior support, believability is
              the very core of our company philosophy. When you set your eyes on
              Eldorado Stone, it looks authentic, natural and, most of all,
              beautiful.
            </p>
            <p>
              <a
                href="/about-us"
                class="btn-bottom"

              >
                <span class="text">See Our Story</span>
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
			<img class="" src={require('../../../assets/about.png')} alt="" />
    	</div>
    </div>
  );
};

export default SectionBeauty;
