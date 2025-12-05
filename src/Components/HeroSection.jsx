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
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-3xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Editing Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg md:text-xl mt-4 max-w-xl"
        >
          I craft engaging, emotional, and visually stunning edits — bringing your footage to life with
          precision and creativity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <button className="px-6  py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300">
            View Projects
          </button>

          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
