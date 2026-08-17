import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Service } from './components/Service'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contacts'
import Footer from './components/Footer'
import { AdminProjects } from './components/AdminProjects'

import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button className='hidden' onClick={toggleTheme}>
      {isDarkMode ? <FaMoon className="text-gray-400" /> : <FaSun className="text-yellow-400"/>}
    </button>
  );
};

// ─── Public Portfolio Layout ──────────────────────────────────────────────
const PortfolioLayout = () => (
  <div className="App">
    <ThemeToggleButton />
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <Projects/>
    <Contacts/>
    <Footer/>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public portfolio */}
          <Route path="/" element={<PortfolioLayout />} />
          {/* Admin panel */}
          <Route path="/admin" element={<AdminProjects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
