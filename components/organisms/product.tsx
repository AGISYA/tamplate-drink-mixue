"use client";

import Image from "next/image";
// import Link from "next/link";

const products = [
  {
    title: "Kopi Susu",
    imageSrc: "/images/download.jpg",
    alt: "Es Teh Manis",
    slug: "es-teh-manis",
  },
  {
    title: "Hot Matcha",
    imageSrc: "/images/스타벅스 커피 코리아.jpg",
    alt: "Jus Jeruk Segar",
    slug: "jus-jeruk-segar",
  },
  {
    title: "Es Kelapa Muda",
    imageSrc: "/images/Starbucks®.jpg",
    alt: "Es Kelapa Muda",
    slug: "es-kelapa-muda",
  },
  {
    title: "Es Kopi Susu",
    imageSrc: "/images/Starbucks® (2).jpg",
    alt: "Es Kopi Susu",
    slug: "es-kopi-susu",
  },
  {
    title: "Air Mineral",
    imageSrc: "/images/Starbucks® (1).jpg",
    alt: "Air Mineral",
    slug: "air-mineral",
  },
  {
    title: "Jus Mangga",
    imageSrc: "/images/Starbucks.jpg",
    alt: "Jus Mangga",
    slug: "jus-mangga",
  },
  {
    title: "Es Cincau",
    imageSrc: "/images/Starbucks (3).jpg",
    alt: "Es Cincau",
    slug: "es-cincau",
  },
  {
    title: "Teh Tarik",
    imageSrc: "/images/Starbucks (2).jpg",
    alt: "Teh Tarik",
    slug: "teh-tarik",
  },
];

const Product = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-medium text-gray-600 mb-4">Menu Kami</h2>
      <p className="md:text-lg text-xs text-gray-500 mx-auto p-3 mb-8 max-w-2xl">
        Nikmati pilihan menu kami yang terbuat dengan bahan-bahan terbaik dan
        rasa yang menggugah selera. Setiap hidangan disiapkan dengan penuh cinta
        dan perhatian agar memberikan pengalaman kuliner yang tak terlupakan.
      </p>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-8 py-4 rounded-lg animate-marquee">
          {products.concat(products).map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-48 md:w-64 lg:w-64 xl:w-80 h-auto flex flex-col items-center justify-center "
            >
              <div className="w-56 h-44 sm:w-40 sm:h-40 md:w-64 md:h-64 overflow-hidden rounded-lg shadow-lg mb-4">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                  width={256} // Fixed width for desktop
                  height={256} // Fixed height for desktop
                />
              </div>

              {/* Ensure the title is displayed and not overlapping
              <h3 className="text-xl font-semibold text-gray-700 mt-2 text-center px-2">
                {product.title}
              </h3> */}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        /* To simulate continuous scrolling, ensure the container width is large enough */
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Product;
