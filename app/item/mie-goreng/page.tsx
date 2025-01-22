import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function MieGoreng() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/DSCF0479.jpg" // Ganti dengan gambar Mie Goreng
            alt="Mie Goreng"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Mie Goreng</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Mie Goreng adalah hidangan mie yang dimasak dengan cara digoreng
            menggunakan bumbu khas yang kaya rasa. Biasanya, mie goreng
            menggunakan mie telur yang direbus terlebih dahulu dan kemudian
            digoreng bersama bahan-bahan lainnya seperti sayuran, daging ayam,
            udang, atau bakso. Bumbu mie goreng biasanya terdiri dari kecap
            manis, bawang putih, bawang merah, cabai, dan sedikit minyak wijen
            untuk memberikan aroma yang khas. Mie Goreng sering disajikan dengan
            tambahan telur mata sapi di atasnya dan taburan bawang goreng.
            Hidangan ini sangat populer di Indonesia dan juga menjadi makanan
            yang mudah ditemukan di banyak negara Asia Tenggara.
          </p>

          <div className="border-t pt-4">
            <Link
              href="/item/soto-betawi"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/sate-madura"
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
