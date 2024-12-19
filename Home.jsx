import Navbar from "./Navbar";
import wallpaper from "../assets/wallpaper.png";
import ParticlesAnimation from "./ParticlesAnimation";
import BoostYourBrand from "./BoostYourBrand"; 
import Section2Content from "./Section2Content";
import Agency from "./Agency";
import Solutions from "./Solutions";
import AreaOfExpertise from "./AreaOfExpertise";
import Footer from "./Footer";
import SmartTeam from "./SmartTeam";
import NameSlider from "./NameSlider";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
        {/* Particles Animation as Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1,
          }}
        >
          <ParticlesAnimation />
        </div>

        {/* Foreground Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <Navbar />
          <BoostYourBrand />
          <Section2Content/>
          <Agency/>
          <Solutions/>
          <AreaOfExpertise/>
          <Footer/>
          <SmartTeam/>
          <NameSlider/>
          <Contact/>
        </div>
 
    </>
  );
};

export default Home;
