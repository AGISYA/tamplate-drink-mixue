"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Soto Betawi",
    imageSrc: "/images/soto betawi.jpg",
    alt: "Product 1",
    slug: "soto-betawi", // Add a slug for each product
  },
  {
    title: "Mie Goreng",
    imageSrc: "/images/DSCF0479.jpg",
    alt: "Product 2",
    slug: "mie-goreng",
  },
  {
    title: "Sate Madura",
    imageSrc: "/images/sate madura.jpg",
    alt: "Product 3",
    slug: "sate-madura",
  },
  {
    title: "Sate Ayu Pedas",
    imageSrc: "/images/sate ayu pedas.jpg",
    alt: "Product 4",
    slug: "sate-ayu-pedas",
  },
  {
    title: "NasiGoreng Kulit Usus",
    imageSrc: "/images/nasgor kulit usus.jpg",
    alt: "Product 5",
    slug: "nasgor-kulit-usus",
  },
  {
    title: "NasiGoreng Tektek Beef Slice",
    imageSrc: "/images/nasgor tektek beef slice.jpg",
    alt: "Product 6",
    slug: "nasgor-tektek-beef-slice",
  },
  {
    title: "EsTeh Pandan",
    imageSrc: "/images/es teh pandan.jpg",
    alt: "Product 7",
    slug: "es-teh-pandan",
  },
  {
    title: "Es Kelapa Jeruk",
    imageSrc: "/images/es kelapa jeruk.jpg",
    alt: "Product 8",
    slug: "es-kelapa-jeruk",
  },
];

const Product = () => {
  return (
    <section className="py-16 text-center bg-white">
      {/* Title: Enak dan Lembut */}

      {/* Subtitle: Menu Kami */}
      <h2 className="text-3xl font-medium text-gray-600 mb-4">Menu Kami</h2>

      {/* Description */}
      <p className="text-lg text-gray-500 mx-auto mb-8 max-w-2xl">
        Nikmati pilihan menu kami yang terbuat dengan bahan-bahan terbaik dan
        rasa yang menggugah selera. Setiap hidangan disiapkan dengan penuh cinta
        dan perhatian agar memberikan pengalaman kuliner yang tak terlupakan.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Link to Product Detail Page */}
            <Link href={`/item/${product.slug}`} passHref>
              {/* Product Image */}
              <div className="w-64 h-64 overflow-hidden rounded-lg shadow-lg mb-4">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              {/* Product Title */}
              <h3 className="text-xl font-semibold text-gray-700">
                {product.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="#"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-slate-900 transition"
        >
          Lihat Semua Menu
        </a>
      </div>
    </section>
  );
};

export default Product;
