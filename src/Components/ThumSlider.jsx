import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const thumbnails = [
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122973/Best_Welding_Cart_2025_VEVOR_Heavy-Duty_350_lbs_Welder_Cart_Full_Features_bybdxr.png",
    title: "Premiere Pro Edit",
  },
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122996/2020-Ferrari-488-Pista-car-wallpaper-4K_fthst1.jpg",
    title: "After Effects Motion",
  },
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122964/Welding-Cobots_600x600_mfye08.webp",
    title: "Photoshop Visual",
  },
  {
    src: "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122998/thumb-1920-1020345_xslrzl.jpg",
    title: "Illustrator Design",
  },
]

export default function ThumbSlider({
  speed = 14, // lower = faster
  gap = 24,
}) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }, [controls, speed])

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Creative Thumbnails
        </h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          High-impact visuals crafted for engagement, clarity, and brand consistency.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <motion.div
          className="flex"
          style={{ gap }}
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: "-100%",
              transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              },
            })
          }
        >
          {[...thumbnails, ...thumbnails, ...thumbnails].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative flex-shrink-0 w-[260px] sm:w-[320px] md:w-[420px]"
            >
              {/* 16:9 thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white font-semibold">
                  {item.title}
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl bg-yellow-500/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
