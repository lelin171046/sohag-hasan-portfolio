import { motion } from "framer-motion";

export function Hero3D() {


  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 via-purple-900 to-black flex items-center  xl:flex flex-col-reverse justify-between lg:px-24 relative px-10 overflow-hidden">
      {/* left section */}
      <div className="">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl z-10 font-bold text-white mb-4">
          Creating fast-paced, engaging edits for modern audiences.
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
          Explore interactive 3D models and animations built with Three.js.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-colors font-medium">
          Get Started
        </button>
      </div>

    </section>
  )
  
}
export default Hero3D;