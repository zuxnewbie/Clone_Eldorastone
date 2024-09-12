import "./App.scss";
import Banner from "./components/Banner/banner";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";


function App() {

  
  return (
    <div className="App">

        <Outlet />

    </div>
  );
}

export default App;
