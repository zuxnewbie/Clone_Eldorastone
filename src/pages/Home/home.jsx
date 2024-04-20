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
    </section>
  );
};

export default Home;
