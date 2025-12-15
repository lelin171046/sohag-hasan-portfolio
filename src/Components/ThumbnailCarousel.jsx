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
        <div className="flex space-x-4 px-8 overflow-x-auto scrollbar-hide">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
