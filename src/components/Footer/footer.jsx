import "./footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container-1">
        <div className="row-footer">
          <div className="col-left" style={{background: "#fff"}}>
            <div class="footer-inner left">
              <p class="eyebrow lined" >
                <span>OUR MISSION</span>
              </p>
              <p style={{marginBottom: "40px;", fontSize: "12px"}}>
                For over 50 years, Eldorado Stone has demonstrated an undeniable
                passion for creating authentic products that elevate not only
                quality and design but also attainability.
              </p>

              <p class="eyebrow lined">
                <span>Media + Awards</span>
              </p>

              <p style={{ fontSize: "12px"}}>
                As a brand leader, Eldorado Stone has been featured in a variety
                of publications and has been recognized with awards by
                tastemakers in the industry.
              </p>

              <div class="award-row" style={{ padding: "0 !important;" }}>
                <div class="award">
                  <img src={require("../../assets/award1.png")} alt="Architect Magazine" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award2.png")} alt="Builder Magazine" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award3.png")} alt="Interior Design Magazine" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award4.png")} alt="Qualified Remodeler Magazine" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award5.png")} alt="Sunset Magazine" />
                </div>
              </div>

              <div class="award-row" style={{ padding: "0 !important;" }}>
                <div class="award">
                  <img src={require("../../assets/award6.png")} alt="Best of Houzz Design 2021 award" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award7.png")} alt="Best of Houzz Design 2020 award" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award8.png")} alt="Best of Houzz Design 2019 award" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award9.png")} alt="Best of Houzz Design 2018 award" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award10.png")} alt="Best of Houzz Design 2017 award" />
                </div>
                <div class="award">
                  <img src={require("../../assets/award11.png")} alt="Best of Houzz Design 2016 award" />
                </div>
              </div>
            </div>
          </div>


          <div className="col-right" style={{background: "#f8f8f9"}}>

            <div class="footer-inner right">
                <p class="eyebrow lined"><span>Stay Connected</span></p>
                <p class="" >Subscribe to our newsletter to hear about the latest products, news and events.</p>
                
                <div className="form">
                    <input placeholder="Text something here" className="input-form"/>
                    <button className="button-form">SIGN UP</button>
                </div>
                <p class="eyebrow lined"><span>Contact Us</span></p>
                <p>
                <a href="/" >3817 Ocean Ranch Boulevard, Suite 114<br/>Oceanside, CA 92056</a><br/>
                <a href="/">800-925-1491</a><br/>
                <a href="/" style={{fontWeight:"600"}}>Send Us A Message</a></p>


                <div class="social-icons mt-4">
                                            
                    <a href="/" class="social-share" >
                    <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="/" class="social-share" >
                    <i class="fa-brands fa-threads"></i>
                    </a>
                    <a href="/" class="social-share" >
                    <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="/" class="social-share" >
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/" class="social-share" >
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/" class="social-share" >
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                </div>

			</div>
          </div>
        
        </div>
      </div>

      <div className="container-2">
        <div class="post-footer">
          <div class="row">
            <div class="foot-content">
              <p class="terms-nav">
                <a href="/sitemap" class="flink">
                  Sitemap
                </a>
                <a href="/warranty" class="flink">
                  Warranty
                </a>
                <a href="/terms-of-sale" class="flink">
                  Terms Of Sale
                </a>
                <a href="/terms-of-use" class="flink">
                  Terms Of Use
                </a>
                <a href="/privacy-notice" class="flink">
                  Privacy Notice
                </a>
                <a href="/end-user-agreement" class="flink">
                  End User Agreement
                </a>
                <a href="/do-not-sell-my-personal-information" class="flink">
                  Do Not Sell My Personal Information
                </a>
                <a href="b" target="_blank" class="flink">
                  Corporate
                </a>
              </p>
              <p class="small">
                COPYRIGHT © 2024. WESTLAKE ROYAL STONE, LLC.
                <br />
                <a href="a" target="_blank">
                  <img
                    src={require("../../assets/footer.png")}
                    alt="Westlake"
                    style={{ width: "120px", marginTop: "6px" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
