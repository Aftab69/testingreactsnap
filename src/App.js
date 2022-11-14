import { Helmet } from "react-helmet";
import { useRef } from "react";
import useMediaQuery from "./useMediaQuery";
import Navbar from "./Navbar"
import Home from "./Home";
import Services from "./Services"
// import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
// import Projectsmobile from "./Projectsmobile";
import About2 from "./About2";

function App() {

  const services = useRef(null)
  const projects = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)

  // const matches = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Helmet>
        <title>Ekoda Productions</title>
        <meta name="description" content="EKODA is a Guwahati-Based Production House. We are the creators who love to tell stories through visual medium. Our services include video production like music videos, short films, documentaries, event videos, TV commercials, wedding films, photoshoots, logo designs, poster designs and artworks." />
        <meta name="keywords" content="ekoda, ekoda productions, production house, film making, documentaries, music video shoots, ad shoots, cinematography, script writing" />
      </Helmet>
      <Navbar services={services}  projects={projects} about={about} contact={contact} />
      <Home />
      <Services services={services} />
      {/* {(matches)?
      <Projects projects={projects} /> :
      <Projectsmobile projects={projects} />
      } */}
      <About about={about} />
      <About2 />
      <Contact contact={contact} />
    </>
  );
}

export default App;
