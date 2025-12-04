import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 flex items-center py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></span>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a full-stack developer passionate about creating stunning,
              performant web experiences. With expertise in modern frameworks
              and 3D web technologies, I build applications that push the
              boundaries of what's possible on the web.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Whether it's crafting intuitive interfaces, optimizing backend
              systems, or exploring cutting-edge technologies like Three.js and
              WebGL, I approach every project with meticulous attention to
              detail and a commitment to excellence.
            </p>

            {/* Resume Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                Download Resume
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-slate-300">Projects Completed</p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <p className="text-slate-300">Years Experience</p>
            </div>

            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
              <p className="text-slate-300">Happy Clients</p>
            
            </div>

            <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <p className="text-slate-300">Tech Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>  

  );
}

export default AboutSection;