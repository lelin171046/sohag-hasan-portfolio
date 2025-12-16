import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dg04kyz8n/video/upload/v1764962293/Sohag_Stdio_ybjv5f.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content (Centered) */}
      <div className="relative z-20 h-full flex flex-col items-center justify-end-safe text-center px-6 md:px-10 max-w-3xl mx-auto">


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-8 mb-8"
        >
          <a href="#projects">
            <button className="px-6  py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300">
            View Projects
          </button>
          </a>

         <a href="#contact">
           <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Get in Touch
          </button>
         </a>
        </motion.div>
      </div>
    </section>
  );
}
