import "./App.scss";
import Banner from "./components/Banner/banner";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
      <div className="component">
        <Banner />
        <Navbar />
        <div className="main">
          <Home />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
