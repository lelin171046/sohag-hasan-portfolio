import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
// import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";
import HeroSection from "./Components/HeroSection";
import ThumSlider from "./Components/ThumSlider";
import LogoLoop from "./Components/LogoLoop";
import Logo from "./Components/EditingSkills";
import EditingSkills from "./Components/EditingSkills";


function App() {
  return (
    <div className="font-sans text-white bg-gray-900">
      <Navbar />
      <HeroSection />
      {/* <ModelViewer modelPath="/assets/3d/model.glb" /> */}
      <EditingSkills />
      <ProjectsSection />
      <ThumSlider />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
