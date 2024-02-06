import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Hero from "./Components/Hero";
// import NewPage from "./Components/NewPage";
import { Myheader } from "./Components/Myheader";
import Features from "./Components/Features";
import OurProcess from "./Components/OurProcess";
import Brands from "./Components/Brands";
import Myfooter from "./Components/Myfooter";
import StartWorking from "./Components/StartWorking";

// import About from "./Components/About";

function App() {
  return (
    <div className=" sec_twobg overflow-hidden">
      <Myheader />
      <Features />
      <OurProcess />
      <Brands />
      <StartWorking />
      <Myfooter />
      {/* <NewPage />
      <Hero />
      <About /> */}
    </div>
  );
}

export default App;
