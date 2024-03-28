import './App.css';
import React from 'react';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join.jsx';
import Plans from './components/Plans/Plans.jsx';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx'


function App() {
  React.useEffect(() => {
    document.title = "HealthyU";
  }, []);

  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
