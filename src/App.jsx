function App() {
  return (
    <div className="font-sans text-white bg-gray-900">
      <Navbar />
      <HeroSection id="hero" />
      <AboutSection id="AboutSection" />
      <EditingSkills />
      <ProjectsSection id="projects" />
      <ThumSlider id="thumbnails" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}
export default App;