import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import LocationButton from './components/LocationButton';
import Footer from './components/Footer';
import NinjaBackground from './components/NinjaBackground';
import NinjaCursor from './components/NinjaCursor';
import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import Hamburguesas from './pages/Hamburguesas';
import HotDogs from './pages/HotDogs';
import Choriperros from './pages/Choriperros';
import Papas from './pages/Papas';
import Bebidas from './pages/Bebidas';
import './App.css';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <div className="min-h-screen text-white overflow-x-hidden relative">    
       <NinjaBackground />
       <NinjaCursor />
        <div className="relative z-10">
          <Navbar />

         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10">       
                <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizzas" element={<Pizzas />} />
              <Route path="/hamburguesas" element={<Hamburguesas />} />
              <Route path="/hotdogs" element={<HotDogs />} />
              <Route path="/choriperros" element={<Choriperros />} />
              <Route path="/papas" element={<Papas />} />
              <Route path="/bebidas" element={<Bebidas />} />
            </Routes>
          </div>

          <Footer />
        </div>

        <WhatsAppButton />
        <LocationButton />
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;