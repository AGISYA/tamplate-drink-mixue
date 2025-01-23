import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("coffee"); // Default menu is 'coffee'

  // Data menu dengan gambar dan nama produk
  const menuItems = {
    coffee: [
      { name: "Espresso", img: "/images/expreso.jpg" },
      { name: "Caramel Latte", img: "/images/caramel late.jpg" },
      { name: "Cappuccino", img: "/images/cappucino.jpg" },
    ],
    chocolate: [
      {
        name: "Peppermint Hot Chocolate",
        img: "/images/Peppermint Hot Chocolate.jpg",
      },
      { name: "Hot Chocolate", img: "/images/Hot Chocolate.jpg" },
      { name: "Whit Hot Chocolate", img: "/images/whit hot chocolate.jpg" },
    ],
    others: [
      {
        name: "Iced Gingerbread Oatmilk Chai",
        img: "/images/Iced Gingerbread Oatmilk Chai.jpg",
      },
      {
        name: "Iced Passion Tango Tea",
        img: "/images/Iced Passion Tango Tea.jpg",
      },
      {
        name: "Iced Matcha Lemonade",
        img: "/images/Iced Matcha Lemonade.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#1b3b34] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl mt-10 md:text-4xl font-bold mb-8 text-center">
        Menu Kami
      </h1>
      {/* Deskripsi Menu */}
      <p className="text-center text-base sm:text-lg mb-8 max-w-3xl text-gray-300">
        Nikmati pilihan menu kami yang terbuat dengan bahan-bahan terbaik dan
        rasa yang menggugah selera. Setiap hidangan disiapkan dengan penuh cinta
        dan perhatian agar memberikan pengalaman kuliner yang tak terlupakan.
      </p>

      {/* Menu Tabs */}
      <div className="flex flex-wrap justify-center space-x-6 mb-8">
        <button
          onClick={() => setSelectedMenu("coffee")}
          className={`px-6 py-2 rounded-full text-sm sm:text-base ${
            selectedMenu === "coffee"
              ? "bg-white text-[#1b3b34]"
              : "bg-[#1b3b34] text-white"
          }`}
        >
          Coffee
        </button>
        <button
          onClick={() => setSelectedMenu("chocolate")}
          className={`px-6 py-2 rounded-full text-sm sm:text-base ${
            selectedMenu === "chocolate"
              ? "bg-white text-[#1b3b34]"
              : "bg-[#1b3b34] text-white"
          }`}
        >
          Chocolate
        </button>
        <button
          onClick={() => setSelectedMenu("others")}
          className={`px-6 py-2 rounded-full text-sm sm:text-base ${
            selectedMenu === "others"
              ? "bg-white text-[#1b3b34]"
              : "bg-[#1b3b34] text-white"
          }`}
        >
          Others
        </button>
      </div>

      {/* Menu Items Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems[selectedMenu].map((item, index) => (
          <div
            key={index}
            className="bg-white text-[#1b3b54] p-4 rounded-lg shadow-md text-center"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
