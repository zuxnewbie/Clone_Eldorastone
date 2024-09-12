import "./about.scss";

const AboutContent = (props) => {
  return (
    <div className="about-content">
      <div
        className="top-about"
        style={{
          backgroundImage: `url(https://www.eldoradostone.com/wp-content/uploads/2015/10/header-12.jpg)`,
        }}
      >
        <div className="cover"></div>

        <div className="main-about">
          <div className="row-content">
            <div className="col-content">
              <h1 class="my-auto text-end">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="row-content">
          <div class="col-content">
            <div class="row-child">
              <div class="col-child ">
                <div class="details">
                  <h3>
                    Welcome to
                    <br />
                    Eldorado Stone
                  </h3>
                  <p>
                    For more than 50 years, Eldorado Stone has pushed the
                    boundaries of possibilities, harnessing nature’s power and
                    creativity to design a collection of premium architectural
                    stone and brick veneer profiles.
                  </p>
                  <p>
                    We are moved by nature’s power and creativity. Her
                    transformative spirit. With her guidance, we invigorate
                    spaces to invigorate lives. Rooms and structures that
                    inspire people to write the stories, make the memories and
                    find the joy they always dreamed of.
                  </p>
                  <p>
                    Handcrafted with artistic colors and expressive textures
                    that verge from traditional to contemporary, Eldorado Stone
                    products offer the ideal backdrop for curating spaces that
                    lead to a lifetime of new moments to enjoy.
                  </p>
                </div>
              </div>
              <div class="col-child">
                <div class="video-wrapper">
                <img style={{maxWidth: "100%"}} alt="a" src={require('../../assets/about2.png')}/>
                </div>
              </div>
            </div>
            <div class="row-child">
              <div class="col-child first">
                <p>
                  <img class="img-fluid" src={require('../../assets/about1.png')} alt="a" />
                </p>
              </div>
              <div class="col-child">
                <div class="details">
                  <h3>Our Story</h3>
                  <p>
                    Eldorado Stone Corporation was founded in 1969 in Carnation,
                    Washington. Over the last 50 years, the company has become
                    the leading manufacturer of architectural stone veneer with
                    an unwavering reputation for high-quality products and
                    outstanding customer service. Today, Eldorado is recognized
                    as a leader in quality and innovation in the U.S. and around
                    the world. Eldorado Stone, LLC is headquartered in
                    Oceanside, CA, and currently operates manufacturing
                    facilities in several states, as well as internationally,
                    with regional distribution centers across the United States.
                  </p>
                  <p>
                    Eldorado Stone is part of{" "}
                    <a href="https://elevatewithstone.com/">
                      Westlake Royal Stone Solutions
                    </a>
                    ‘ extensive portfolio of architectural stone veneer. No
                    other material offers the depth, complexity of color,
                    pattern, and tactile distinction of architectural stone
                    veneer. Westlake Royal Stone Solutions’ product portfolio
                    provides limitless design opportunities that suit a wide
                    range of styles and budgets, making it easy to enhance your
                    project’s aesthetic using natural textures and authentic
                    color palettes that are virtually indistinguishable from
                    stone and other natural materials.
                  </p>
                </div>
              </div>
            </div>
            <div class="row-child">
              <div class="col-child">
                <div class="details">
                  <h3>Why the Diamond?</h3>
                  <p>
                    Like a diamond’s evolution from raw earth to unique design,
                    every idea is an attainable reality that unveils your
                    imagination. Eldorado Stone can masterfully transform your
                    space, nurturing humble materials to create any world within
                    your home.
                  </p>
                  <p>
                    Extraordinary can begin small — it’s the start of something{" "}
                    <strong>
                      <em>beautiful</em>
                    </strong>
                    .
                  </p>
                  <p>
                    Our logo is our foundation. It represents and parallels our
                    story as the diamond’s evolution — how meticulous
                    craftsmanship can nurture humble, raw materials into unique,
                    beautiful creations.
                  </p>
                </div>
              </div>
              <div class="col-child">
                <img style={{maxWidth: "100%"}} alt="a" src={require('../../assets/about2.png')}/>
              </div>
            </div>
            <div class="row-child">
              <div class="col-child last">
                <div class="details">
                  <h3>About Our Parent Company</h3>
                  <p>
                    <a href="https://westlakeroyalbuildingproducts.com/">
                      Westlake Royal Building Products
                    </a>{" "}
                    USA Inc., a Westlake company (NYSE:WLK), is a leader
                    throughout North America in the innovation, design, and
                    production of a broad and diverse range of exterior and
                    interior building products, including Siding and
                    Accessories, Trim and Mouldings, Roofing, Stone, Windows,
                    and Outdoor Living. For more than 50 years, Westlake Royal
                    Building Products has manufactured high-quality,
                    low-maintenance products to meet the specifications and
                    needs of building professionals, homeowners, architects,
                    engineers, and distributors, while providing stunning curb
                    appeal with an unmatched array of colors, styles, and
                    accessories.
                  </p>
                </div>
              </div>
              <div class="col-child first">
                <img style={{maxWidth: "100%"}} alt="a" src={require('../../assets/about3.png')}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
