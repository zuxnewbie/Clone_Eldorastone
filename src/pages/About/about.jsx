import AboutContent from "../../components/About/about";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";

const AboutPage = (props) => {
  return (
    <section className="home-hero">
      <div className="header">
        <Banner />
        <Navbar />
      </div>

      <div className="main">
        <AboutContent />
      </div>
      <div className="footer_fix">
        <Footer />
      </div>
    </section>
  );
};

export default AboutPage;
