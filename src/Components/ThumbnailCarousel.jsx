import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";

export default function ThumbnailCarousel({ images }) {
  return (
    <div className="w-full bg-gradient-600 py-16 text-white">
      {/* Top Title + Text */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="thumbnails"
        className="text-3xl md:text-4xl font-bold tracking-wide">
          Thumbnail Design Showcase
        </motion.h2>
        <p className="text-gray-300 mt-3 text-lg">
          Sleek, engaging thumbnail designs crafted for maximum viewer attention.
        </p>
      </div>
      <div  style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery />
    </div>
      {/* Slider */}
      <div className="relative w-full overflow-hidden bg-gradient-600 py-4">
       
      </div>
    </div>
  );
}
