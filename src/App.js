import './App.css';
import AboutUs from './pages/Js/AboutUs';
import Banner from './pages/Js/Banner';
import Footer from './pages/Js/Footer';
import Navbar from './pages/Js/Navbar';
import Services from './pages/Js/Services';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Banner />
        <Services />
        <AboutUs />
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
