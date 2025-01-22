"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      image:
        "/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (1).png",
      title: "Minuman Segar",
      description: "Segarkan diri dengan minuman andalan kami.",
    },
    {
      id: 2,
      image:
        "/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (2).png",
      title: "Rasakan Kelezatannya",
      description: "Nikmati setiap tegukan minuman premium kami.",
    },
    {
      id: 3,
      image:
        "/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (3).png",
      title: "Nikmati Bersama Teman",
      description: "Minuman sempurna untuk setiap momen kebersamaan.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
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
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover "
              width={10000}
              height={10000}
            />
            <div className="absolute md:mx-36 left-0 top-1/2 transform -translate-y-1/2 px-8 py-4 text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                {item.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl">
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
