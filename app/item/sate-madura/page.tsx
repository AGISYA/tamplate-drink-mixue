import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function SateMadura() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/sate madura.jpg" // Ganti dengan gambar Sate Madura
            alt="Sate Madura"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Sate Madura</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Sate Madura adalah hidangan sate yang berasal dari Madura, Jawa
            Timur. Hidangan ini terdiri dari daging yang dipotong kecil-kecil,
            seperti daging ayam atau kambing, yang ditusuk dengan tusukan bambu
            dan kemudian dipanggang di atas bara api. Setelah dipanggang, sate
            Madura disajikan dengan bumbu kacang yang kaya rasa, yang terbuat
            dari kacang tanah, gula merah, kecap manis, bawang putih, dan
            rempah-rempah lainnya. Sate Madura terkenal dengan rasa bumbunya
            yang manis, gurih, dan sedikit pedas. Hidangan ini sering disajikan
            dengan lontong atau nasi putih dan sering menjadi pilihan makanan
            kaki lima di Indonesia.
          </p>
          <div className="border-t pt-4">
            <Link
              href="/item/mie-goreng"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/sate-ayu-pedas"
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
