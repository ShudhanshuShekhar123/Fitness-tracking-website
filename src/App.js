import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SimpleSlider from "./Components/Carousel";
import MainRoutes from "./Pages/MainRoutes";
import GymExcercises from "./Pages/GymExcercises";
import WorkoutVideo from "./Pages/WorkoutVideo";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <MainRoutes />
      {/* <Home /> */}
      <Footer />
      {/* <GymExcercises /> */}
      {/* <WorkoutVideo /> */}
    </div>
  );
}

export default App;
