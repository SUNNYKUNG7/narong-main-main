// BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/Aboutme/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Description from './components/Description/Description.jsx';
import Contact from './components/Contactme/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Activity from './components/Activity/activity.jsx';

import './styles.css';
import TechStackCarousel from './components/Techstack/Techstack.jsx';
import Bubbles from './components/Bubbles/Bubbles.jsx';
import DesignPortfolio from './components/DesignPortfolio/DesignPortfolio.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Transcript from './components/Transcript/Transcript.jsx';

// all components in application used inside of react-router dom
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            
            <About />
            <TechStackCarousel />
            <Description />
            <Portfolio />
            <Activity />
            <Contact />
          </>
        }
        />
      
        <Route path="/design-portfolio" element={
          <DesignPortfolio />
        }
        />
        <Route path="/certifications" element={
          <Certifications />
        }
        />
       <Route path="/transcript" element={
          <Transcript />
        }
        />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App
