import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Tracker from './pages/tracker/Tracker';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <div id="slider"></div>
        <Home />
        <Tracker />
        <Footer />
      </div>
    </div>
  );
}

export default App;
