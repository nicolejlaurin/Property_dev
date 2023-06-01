import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/landing';
import About from './components/about';
import AboutPage from './components/aboutpage';
import Service from './components/service';
import ServicePage from './components/servicepage';
import Projects from './components/projects';
import Contact from './components/contact';
import ContactPage from './components/contactpage';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Section1 from './components/service-section1';
import Section2 from './components/service-section2';
import Section3 from './components/service-section3';
import MainSection5 from './components/main-section5';
import Thankyou from './components/thankyou';
import Testimonials from './components/testimonials';
import Mid1 from './components/mid-section1';
import Process from './components/process';


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//this is the links to other pages
ReactDOM.render(

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<>
  		<Landing />
  		<About />
      <Mid1/>
      <Service />
      <Process/>
      <Projects />
      <Testimonials/>
      <Contact />
  		</>} />
      <Route path="/about" element={<About />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/service" element={<>
  		<ServicePage />
  		<Section1 />
  		<Section2 />
      <Section3 />

  		</>} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/servicepage" element={<ServicePage />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
