// components/Banner.js
import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex  overflow-hidden bg-[#1b3b34]">
      <div className="w-1/3">
        <Image
          src="/images/Dark Blue Minimal Ice Coffee Discount Promo Instagram Post.png" // ganti dengan path gambar Anda
          alt="Banner 1"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-1/3">
        <Image
          src="/images/Iced Bubble Drink Menu - Instagram Post.png" // ganti dengan path gambar Anda
          alt="Banner 2"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-1/3">
        <Image
          src="/images/Blue and White Bold Drink Promo Instagram Post.png" // ganti dengan path gambar Anda
          alt="Banner 3"
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
