"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      image:
        "/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (1).png",
      mobileImage: "/images/11.png",
      title: "Minuman Segar",
      description: "Segarkan diri dengan minuman andalan kami.",
    },
    {
      id: 2,
      image:
        "/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (2).png",
      mobileImage: "/images/12.png",
      title: "Rasakan Kelezatannya",
      description: "Nikmati setiap tegukan minuman premium kami.",
    },
    {
      id: 3,
      image:
        "/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (3).png",
      mobileImage: "/images/13.png",
      title: "Nikmati Bersama Teman",
      description: "Minuman sempurna untuk setiap momen kebersamaan.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Anggap <=768px sebagai mobile
    };

    handleResize(); // Jalankan saat pertama kali render
    window.addEventListener("resize", handleResize); // Dengarkan perubahan ukuran

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselData.map((item) => (
          <div key={item.id} className="w-full h-screen flex-shrink-0 relative">
            <Image
              src={isMobile ? item.mobileImage : item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
            <div className="absolute md:-mt-0 -mt-52 mx-0 md:mx-10 left-0 top-1/2 transform -translate-y-1/2 px-8 py-4 text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center md:text-left">
                {item.title}
              </h2>
              <p className="text-lg mt-2  md:w-screen sm:text-xl md:text-2xl text-center md:text-left">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indikator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
