import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Convert YouTube URL → ID → Thumbnail
const getYoutubeId = (url) => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/.*v=)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const videoData = [
  {
    id: 1,
    category: "Video Editing",
    title: "Edit 1",
    video: "https://www.youtube.com/watch?v=aijyqICKGfQ"
  },
  {
    id: 2,
    category: "Video Editing",
    title: "Edit 2",
    video: "https://www.youtube.com/watch?v=f9YbyjNYnOQ"
  },
  {
    id: 3,
    category: "Video Editing",
    title: "Edit 3",
    video: "https://www.youtube.com/watch?v=9WN_3GhpdJ4"
  },
  {
    id: 4,
    category: "Video Editing",
    title: "Edit 4",
    video: "https://www.youtube.com/watch?v=pD4d8OjqmbQ"
  },
  {
    id: 5,
    category: "Video Editing",
    title: "Edit 5",
    video: "https://www.youtube.com/watch?v=J0ydlAqg6_8"
  },
  {
    id: 6,
    category: "Video Editing",
    title: "Edit 6",
    video: "https://www.youtube.com/watch?v=W3sOezpkGWI"
  },
  {
    id: 7,
    category: "Video Editing",
    title: "Edit 7",
    video: "https://www.youtube.com/watch?v=YOLRjBnKo5A"
  },
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
    <section className="py-16 px-4 md:px-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white tracking-wide">
        PROJECTS
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 border border-white rounded-md text-sm font-semibold transition-all
              ${active === cat ? "bg-white text-black" : "text-white hover:bg-blue-300/20"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map(({ id, title, video }) => {
            const youtubeId = getYoutubeId(video);
            const thumb = youtubeId
              ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
              : ""; // fallback

            return (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-xl overflow-hidden bg-black/40 backdrop-blur-xl"
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Thumbnail or Hover Video */}
                {hovered === id ? (
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <img
                    src={thumb}
                    alt={title}
                    className="w-full aspect-video object-cover"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-black text-3xl font-bold group-hover:scale-110 transition">
                    ▶
                  </div>
                  <p className="text-white mt-3 text-sm opacity-80">{title}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
