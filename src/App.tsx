import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Parallax from "./components/parallax";
import Portafolio from "./components/portafolio";
import Services from "./components/services";
import "./app.scss";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section> 
      <div className="flex">
      <section id="Services" className="relative">
        <Services />
      </section>
      </div> 
      <section>
        <Parallax />
      </section>
      <section id="Portafolio">
        <Portafolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
