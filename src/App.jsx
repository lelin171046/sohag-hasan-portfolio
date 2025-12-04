import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Hero3D from "./Components/Hero3D";
import AboutSection from "./Components/AboutSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";


function App() {
  return (
    <div className="font-sans text-white bg-gray-900">
      <Navbar />
      <Hero3D />
      {/* <ModelViewer modelPath="/assets/3d/model.glb" /> */}
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
