import React from 'react';
import './App.css';
import Hero from './Components/hero/Hero';
import Timer from './Components/timer/Timer.jsx';
import About from './sections/about/About.jsx';
import Ministers from './sections/ministers/Ministers.jsx';
import Join from './sections/join/Join.jsx';
import Sponsor from './sections/sponsors/Sponsor.jsx';
import Contact from './sections/contact/Contact.jsx';
import Footer from './sections/footer/Footer.jsx';

function App() {
  return (
    <div className="main">
      <section className="hero">
        <Hero />
      </section>
      <section className="timing">
        <h2>Event Starts In</h2>
        <Timer />
      </section>
     <About />
     <section className="ministers" id='ministers'>
     <h2>Ministers</h2>
     <p>We extend our heartfelt gratitude to our esteemed special guests for this year's 
      conference believing that their presence will help ignite the embers and flames of  the Holy Spirit in our lives.</p>
     <Ministers />
     </section>
     <section className="join">
     <h2>Be a Part of Us</h2>
     <Join />
     </section>
     <section className="sponsors" id='sponsors'>
      <h2>Official Sponsors</h2>
      <Sponsor />
     </section>
     
     <section className="contact">
      <p>You have a question?</p>
      <h2>Leave a Message</h2>
      <Contact />
     </section>
     
     <section className="footer">
      <Footer />
      <p className='copyright'>© 2024 CIC. All rights reserved.</p>
     </section>
     
    </div>
  );
}

export default App;
