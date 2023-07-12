import React, { useState } from "react"
import TopBar from "./components/top/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./App.scss"
import SideMenu from "./components/sidemenu/SideMenu"
import Skills from "./components/skills/Skills"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
     <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     {/* <TopBar /> */}
     <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      
      <Intro />
      <Skills className="skills"/>
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
     </div>
    </div>
  );
}

export default App;
