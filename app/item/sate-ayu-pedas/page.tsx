import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function SateAyuPedas() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/sate ayu pedas.jpg" // Ganti dengan gambar Sate Ayu Pedas
            alt="Sate Ayu Pedas"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Sate Ayu Pedas</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Sate Ayu Pedas adalah hidangan sate khas Indonesia yang menggunakan
            bahan utama daging ayam yang ditusuk dengan tusukan bambu, kemudian
            dibakar di atas bara api. Sate ini memiliki cita rasa pedas yang
            khas berkat bumbu sambal pedas yang melapisi daging ayam. Bumbu
            pedasnya terbuat dari cabai, bawang merah, bawang putih, kecap
            manis, dan rempah-rempah lainnya, memberikan rasa yang kaya dan
            menggugah selera. Sate Ayu Pedas biasanya disajikan dengan nasi
            putih, lontong, atau ketupat, dan ditambah dengan irisan timun atau
            tomat sebagai pelengkap. Hidangan ini populer di banyak daerah di
            Indonesia dan sering menjadi pilihan makanan di acara makan bersama.
          </p>

          <div className="border-t pt-4">
            <Link
              href="/item/sate-madura"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/nasgor-kulit-usus"
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
