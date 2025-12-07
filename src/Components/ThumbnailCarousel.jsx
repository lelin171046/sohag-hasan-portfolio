export default function ThumbnailCarousel({ images }) {
  return (
    <div className="w-full bg-black py-16 text-white">
      {/* Top Title + Text */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Thumbnail Design Showcase
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Sleek, engaging thumbnail designs crafted for maximum viewer attention.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden bg-black py-4">
        <style>{`
          .carousel-track {
            display: flex;
            gap: 1.5rem; 
            width: max-content;
            animation: scroll-left var(--time) linear infinite;
          }

          .carousel-paused {
            animation-play-state: paused !important;
          }

          .carousel-item {
            flex-shrink: 0;
            width: 22rem; 
            height: 14rem;
            transition: transform 0.4s ease-in-out;
            border-radius: 1rem;
            overflow: hidden;
          }

          /* RESPONSIVE SIZES */
          @media (max-width: 1024px) {
            .carousel-item { width: 18rem; height: 12rem; }
          }

          @media (max-width: 768px) {
            .carousel-item { width: 16rem; height: 10rem; }
          }

          @media (max-width: 480px) {
            .carousel-item { width: 14rem; height: 9rem; }
          }

          .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease-in-out;
          }

          /* Hover enlarge */
          .carousel-item:hover {
            transform: scale(1.12);
            z-index: 10;
          }

          .carousel-item:hover img {
            transform: scale(1.15);
          }

          @keyframes scroll-left {
            from { transform: translateX(0); }
            to {
              transform: translateX(calc(-1 * (var(--singleWidth) * var(--total)) - (1.5rem * var(--total))));
            }
          }
        `}</style>

        <div
          className="carousel-track"
          id="track"
          style={{
            "--time": "40s",
            "--total": images.length,
            "--singleWidth": "22rem",
          }}
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="carousel-item"
              onMouseEnter={() => {
                document.getElementById("track").classList.add("carousel-paused");
              }}
              onMouseLeave={() => {
                document.getElementById("track").classList.remove("carousel-paused");
              }}
            >
              <img src={img} alt="thumbnail" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
