import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SimpleSlider from "./Components/Carousel";
import MainRoutes from "./Pages/MainRoutes";



function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar/>
      <MainRoutes/>
      {/* <Home /> */}
      <Footer/>
   
    </div>
  );
}

export default App;
