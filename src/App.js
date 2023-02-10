import "./App.css";
import Navbar from "./Components/Sections/Navbar";
import Slider from "./Components/Sections/Slider";
import Mission from "./Components/Sections/Mission";
import Footer from "./Components/Sections/Footer";
import ContactUs from "./Components/Sections/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Mission />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
