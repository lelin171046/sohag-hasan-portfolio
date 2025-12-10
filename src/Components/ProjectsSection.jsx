import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const categories = [
  "All Projects",
  "Reels/Hooks Editing",
  "UGC/Pro-Diva",
  "Splash Animations",
  "SaaS/E-commerce",
  "Hand drawn animations",
  "Before/After",
  "Digital Products",
];

const videos = [
  {
    id: 1,
    title: "Haunted Hotel Ship",
    category: "Reels/Hooks Editing",
    url: "https://res.cloudinary.com/dg04kyz8n/video/upload/v1765258154/The_Most_Haunted_Hotel_Ship_In_America_720p_luxwho.mp4",
    thumbnail:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/so_0/v1765258154/The_Most_Haunted_Hotel_Ship_In_America_720p_luxwho.jpg",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "PR IMON Gig",
    category: "UGC/Pro-Diva",
    url: "https://res.cloudinary.com/dg04kyz8n/video/upload/v1765257996/PR_IMON_With_Gig_Image_i60e4l.mp4",
    thumbnail:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/so_0/v1765257996/PR_IMON_With_Gig_Image_i60e4l.jpg",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "Fitness AI App",
    category: "SaaS/E-commerce",
    url: "https://res.cloudinary.com/dg04kyz8n/video/upload/v1765209886/Fitness_AI_App_1_dzkiev.mp4",
    thumbnail:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/so_0/v1765209886/Fitness_AI_App_1_dzkiev.jpg",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    title: "Main Humanizer",
    category: "Digital Products",
    url: "https://res.cloudinary.com/dg04kyz8n/video/upload/v1765209647/Main_Humanizer_3_xqmgzz.mp4",
    thumbnail:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/so_0/v1765209647/Main_Humanizer_3_xqmgzz.jpg",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    title: "Humanizer Reel",
    category: "Splash Animations",
    url: "https://res.cloudinary.com/dg04kyz8n/video/upload/v1765209829/Humanizer_Reel_Final_fg04vw.mp4",
    thumbnail:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/so_0/v1765209829/Humanizer_Reel_Final_fg04vw.jpg",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    title: "PR Humanizer Reel 3",
    category: "Before/After",
    url: "https://res.cloudinary.com/dg04kyz8n/video/upload/v1765209769/PR_Humanizer_Reel_3_hxqrf4.mp4",
    thumbnail:
      "https://res.cloudinary.com/dg04kyz8n/video/upload/so_0/v1765209769/PR_Humanizer_Reel_3_hxqrf4.jpg",
    aspectRatio: "square",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [playingVideo, setPlayingVideo] = useState(null);
  const scrollRef = useRef(null);

  const filteredVideos =
    activeCategory === "All Projects"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-black px-4 py-12 md:px-8 lg:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
          PROJECTS
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-yellow-400">swipe</span>
          <ChevronRight className="h-4 w-4 text-yellow-400" />
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-6"
      >
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-900/80 p-2 text-white backdrop-blur-sm hover:bg-zinc-800"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-2 overflow-x-auto px-10 py-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "border border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-900/80 p-2 text-white backdrop-blur-sm hover:bg-zinc-800"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 text-center text-sm text-white"
      >
        Animated Reels and Shorts that boost your page/brand 🔥{" "}
        <span className="text-zinc-400">
          Here are a few of my recent projects (more coming)
        </span>
      </motion.p>

      {/* Video Grid */}
      <motion.div
        layout
        className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl bg-zinc-900"
            >
              <div
                className={
                  video.aspectRatio === "portrait"
                    ? "relative aspect-[9/16]"
                    : video.aspectRatio === "landscape"
                    ? "relative aspect-video"
                    : "relative aspect-square"
                }
              >
                {playingVideo === video.id ? (
                  <video
                    src={video.url}
                    autoPlay
                    controls
                    className="h-full w-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <>
                    <video
                      src={video.url}
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onMouseEnter={(e) => {
                        e.currentTarget.muted = false;
                        e.currentTarget.volume = 0.5;
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPlayingVideo(video.id)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/30 bg-black/50 p-3 text-white backdrop-blur-sm hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                      <Play className="h-6 w-6" />
                    </motion.button>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-0 left-0 right-0 p-4"
                    >
                      <h3 className="text-sm font-semibold text-white">
                        {video.title}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs text-yellow-400">
                        {video.category}
                      </span>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredVideos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-zinc-500">No projects found in this category yet.</p>
        </motion.div>
      )}
    </section>
  );
}
