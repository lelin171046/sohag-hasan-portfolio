import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradiant-600 text-white py-20 px-6 md:px-16">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
  {/* RIGHT — Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <motion.img
            src="https://res.cloudinary.com/dg04kyz8n/image/upload/v1765189254/473079996_2416711891993497_8233879651832613748_n_ubc7nf.jpg?auto=format&fit=crop&w=600&q=80"
            alt="Video Editor"
            className="w-64 md:w-80 rounded-full shadow-6xl border-4 border-blue-500 object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Glow effect */}
          <div className="absolute -bottom-6 w-44 h-44 bg-blue-500/20 blur-3xl rounded-full"></div>
        </motion.div>
        {/* LEFT — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-blue-400 tracking-wide"
          >
            👋 Hi, I’m a Video Editor
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold leading-snug"
          >
            Crafting Dynamic <span className="text-blue-400">Stories</span><br />
            Through Creative Editing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 leading-relaxed text-sm md:text-base"
          >
            I specialize in editing high-quality content including <b>Shorts, Reels,
            YouTube videos, promotional ads, cinematic edits</b> and more.  
            My goal is simple — to turn raw footage into visually engaging stories that
            leave an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
            >
              View My Work
            </a>

            <a
              href="https://wa.me/8801775587380"
              target="_blank"
              className="px-6 py-3 border border-blue-400 hover:bg-blue-400/20 rounded-lg font-semibold transition"
            >
              WhatsApp Me
            </a>
          </motion.div>
        </motion.div>

      

      </div>
    </section>
  );
}
