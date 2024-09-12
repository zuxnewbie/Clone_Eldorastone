import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import SectionDiamon from "../../components/Sections/Section-1/diamon";
import SectionInspiration from "../../components/Sections/Section-2/inspiration";
import SectionUniquely from "../../components/Sections/Section-3/uniquely";
import SectionBeauty from "../../components/Sections/Section-4/beauty";
import SectionLocated from "../../components/Sections/Section-5/located";
import SectionResource from "../../components/Sections/Section-6/resource";
import SectionContact from "../../components/Sections/Section-7/contact";
import MainSlider from "../../components/Slider/slider";

const Home = (props) => {
  return (
    <section className="home-hero">
      <div className="header">
        <Banner />
        <Navbar />
      </div>

      <div className="main">
        <MainSlider />

        <div className="sect">
          <SectionDiamon />
          <SectionInspiration />
          <SectionUniquely />
          <SectionBeauty />
          <SectionLocated />
          <SectionResource />
          <SectionContact />
        </div>
      </div>
      <div className="footer_fix">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
