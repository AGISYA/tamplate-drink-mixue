// components/FeedProduct.js
import Image from "next/image";

export default function FeedProduct() {
  return (
    <div className="space-y-4 bg-white">
      {/* Baris pertama (3 gambar produk di atas) */}
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <Image
            src="/images/1.png" // ganti dengan path gambar Anda
            alt="Product 1"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/White and Black Simple Coming Soon Instagram Post (3).png" // ganti dengan path gambar Anda
            alt="Product 2"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/Black Friday Typography Instagram Post.png" // ganti dengan path gambar Anda
            alt="Product 3"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Baris kedua (3 gambar produk di bawah) */}
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <Image
            src="/images/White and Black Simple Coming Soon Instagram Post.png" // ganti dengan path gambar Anda
            alt="Product 4"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/5.png" // ganti dengan path gambar Anda
            alt="Product 5"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/White and Black Simple Coming Soon Instagram Post (1).png" // ganti dengan path gambar Anda
            alt="Product 6"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <Image
            src="/images/4.png" // ganti dengan path gambar Anda
            alt="Product 4"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/White and Black Simple Coming Soon Instagram Post (2).png" // ganti dengan path gambar Anda
            alt="Product 5"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/White and Black Simple Coming Soon Instagram Post (1).png" // ganti dengan path gambar Anda
            alt="Product 6"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
