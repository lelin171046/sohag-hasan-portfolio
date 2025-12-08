import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const getYoutubeId = (url) => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/.*v=)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const getAspectClass = (url) => {
  if (url.includes("shorts") || url.includes("reels")) return "aspect-[9/16]";
  return "aspect-video";
};

// Generate Cloudinary thumbnail
const getCloudinaryThumbnail = (url) => {
  if (!url.includes("cloudinary")) return null;

  return url.replace("/upload/", "/upload/so_0/") + ".jpg";
};

const videoData = [
  {
    id: 8,
    title: "Edit 8",
    category: "Reels/Shorts Editing",
    video:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/v1764954973/Insta_reels_sample_estrcx.mp4",
  },
  {
    id: 9,
    title: "Edit 9",
    category: "Personal Projects",
    video:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/v1764962293/Sohag_Stdio_ybjv5f.mp4",
  },
{
    id: 10,
    title: "Edit 10",
    category: "Motion Graphics",
    video: "https://drive.google.com/file/d/120MFbyRLwumy9VkokMkBCyfN5RAN72Lv/view?usp=sharing"
}
];

const categories = [
  "All",
  "Motion Graphics",
  "Reels/Shorts Editing",
  "Short Form",
  "Social Media",
  "Personal Projects",
];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "All"
      ? videoData
      : videoData.filter((v) => v.category === active);

  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-600 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide">
        PROJECTS
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 border border-white rounded-md text-sm font-semibold transition-all
              ${
                active === cat
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map(({ id, title, video }) => {
            const youtubeId = getYoutubeId(video);
            const cloudThumb = getCloudinaryThumbnail(video);

            const thumb = youtubeId
              ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
              : cloudThumb;

            const aspectClass = getAspectClass(video);

            return (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-xl ${aspectClass}`}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hover → Show clean video */}
                {hovered === id ? (
                  youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`}
                      allow="autoplay"
                      className="w-full h-full object-cover pointer-events-none"
                      frameBorder="0"
                    />
                  ) : (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted={false}
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <img
                    src={thumb}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
