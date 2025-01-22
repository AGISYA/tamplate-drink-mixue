import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function NasiGorengKulitUsus() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/nasgor kulit usus.jpg" // Ganti dengan gambar Nasi Goreng Kulit Usus
            alt="Nasi Goreng Kulit Usus"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Nasi Goreng Kulit Usus
          </h1>
          <p className="text-gray-600 text-justify flex-grow">
            Nasi Goreng Kulit Usus adalah varian unik dari nasi goreng yang
            menggunakan kulit usus ayam sebagai bahan pelengkap yang digoreng
            renyah. Nasi goreng ini disiapkan dengan nasi yang digoreng bersama
            bumbu khas seperti bawang merah, bawang putih, kecap manis, cabai,
            dan rempah-rempah lainnya. Kulit usus ayam yang telah dibersihkan
            dan digoreng menjadi garing menambah tekstur crunchy yang khas pada
            hidangan ini. Hidangan ini biasanya disajikan dengan telur mata
            sapi, irisan mentimun, dan acar sebagai pelengkap. Nasi Goreng Kulit
            Usus adalah pilihan makanan yang menggugah selera dan populer di
            kalangan pecinta kuliner Indonesia.
          </p>

          <div className="border-t pt-4">
            <Link
              href="/item/sate-ayu-pedas"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/nasgor-tektek-beef-slice"
              className="ml-4 text-blue-500 hover:underline"
            >
              Next Item →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
