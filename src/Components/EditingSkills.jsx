"use client";

import { motion } from "framer-motion";

import { Film, Scissors, Palette, Zap, Sparkles, Target } from "lucide-react";
import LogoLoop from "./LogoLoop";

const skills = [
  {
    icon: Film,
    title: "Motion Graphics",
    description:
      "Creating dynamic animations and kinetic typography that bring stories to life with smooth transitions and eye-catching effects.",
    color: "#eab308",
  },
  {
    icon: Scissors,
    title: "Precision Editing",
    description:
      "Crafting seamless narratives through expert cutting, pacing, and timing. Every frame matters in telling your story.",
    color: "#22c55e",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "Professional color correction and grading to establish mood, enhance visual storytelling, and create cinematic looks.",
    color: "#f97316",
  },
  {
    icon: Zap,
    title: "VFX & Compositing",
    description:
      "Integrating visual effects, green screen keying, and compositing to create stunning impossible shots.",
    color: "#06b6d4",
  },
  {
    icon: Sparkles,
    title: "Sound Design",
    description:
      "Mixing audio, adding foley, and creating immersive soundscapes that complement the visual experience.",
    color: "#a855f7",
  },
  {
    icon: Target,
    title: "Brand Storytelling",
    description:
      "Understanding brand identity and translating it into compelling video content that resonates with audiences.",
    color: "#ec4899",
  },
];

const softwareLogos = [
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765529734/1_fz1odt.png",
    alt: "Adobe Premiere Pro",
  },
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765529723/3_ytjpy1.png",
    alt: "After Effects",
  },
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765529722/2_jzizw3.png",
    alt: "DaVinci Resolve",
  },
];

export default function EditingSkills() {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
              <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
                Expertise
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Editing{" "}
            <motion.span
              className="text-cyan-500 hover:text-cyan-600"
              animate={{
                textShadow: [
                  "0 0 20px rgba(234, 179, 8, 0.5)",
                  "0 0 40px rgba(234, 179, 8, 0.8)",
                  "0 0 20px rgba(234, 179, 8, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Skills
            </motion.span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Transforming raw footage into captivating stories with professional
            precision and creative vision. From concept to final cut, every
            project is crafted with attention to detail.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:border-yellow-500/30 transition-all duration-300"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}15, transparent)`,
                  }}
                />

                <div className="relative">
                  <motion.div
                    className="mb-4 inline-flex"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      <Icon size={28} style={{ color: skill.color }} />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Software Loop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Software Proficiency
          </h3>

          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Mastery of industry-standard tools to deliver professional results
            across all platforms.
          </p>

          <div className="relative h-32 md:h-40">
            <LogoLoop
              logos={softwareLogos}
              speed={120}
              direction="left"
              logoHeight={64}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Video editing software"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
