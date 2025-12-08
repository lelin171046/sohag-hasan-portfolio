import ThumbnailCarousel from "./ThumbnailCarousel";

export default function ThumSlider() {
  const images = [
    "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122973/Best_Welding_Cart_2025_VEVOR_Heavy-Duty_350_lbs_Welder_Cart_Full_Features_bybdxr.png",
    "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122996/2020-Ferrari-488-Pista-car-wallpaper-4K_fthst1.jpg",
    "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122964/Welding-Cobots_600x600_mfye08.webp",
    "https://res.cloudinary.com/dg04kyz8n/image/upload/v1765122998/thumb-1920-1020345_xslrzl.jpg",
    // Add more...
  ];

  return (
    <div className="bg-gradient-600 id=thumbnails  py-20">
     

      <ThumbnailCarousel images={images} />
    </div>
  );
}
