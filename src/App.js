import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Map from "./components/map";
import Scroll from "./components/scrollUp";
import Courses from "./components/courses";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Scroll/>
      <Navbar/>
      <Home/>
      <About/>
      <Map/>
      <Courses/>
      <Footer/>

      
    </div>
  );
}

export default App;
