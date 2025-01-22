import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function EsKelapaJeruk() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/es kelapa jeruk.jpg" // Ganti dengan gambar Es Kelapa Jeruk
            alt="Es Kelapa Jeruk"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Es Kelapa Jeruk</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Es Kelapa Jeruk adalah minuman segar yang terdiri dari air kelapa
            muda yang dicampur dengan perasan jeruk, memberikan rasa manis,
            segar, dan sedikit asam. Minuman ini cocok untuk menghilangkan
            dahaga di cuaca panas, dengan kombinasi rasa kelapa yang lembut dan
            aroma jeruk yang menyegarkan. Es Kelapa Jeruk biasanya disajikan
            dengan es batu untuk menambah kesegaran serta beberapa potongan buah
            kelapa muda sebagai pelengkap. Minuman ini sangat populer di daerah
            tropis dan menjadi pilihan favorit untuk minuman pelepas dahaga yang
            alami.
          </p>
          <div className="border-t pt-4">
            <Link
              href="/item/es-teh-pandan"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
