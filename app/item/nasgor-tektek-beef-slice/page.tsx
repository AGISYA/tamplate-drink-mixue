import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function NasiGorengTektekBeefSlice() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/nasgor tektek beef slice.jpg" // Ganti dengan gambar Nasi Goreng Tektek Beef Slice
            alt="Nasi Goreng Tektek Beef Slice"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Nasi Goreng Tektek Beef Slice
          </h1>
          <p className="text-gray-600 text-justify flex-grow">
            Nasi Goreng Tektek Beef Slice adalah hidangan nasi goreng khas
            Indonesia yang disajikan dengan irisan tipis daging sapi. Nasi
            goreng ini dimasak dengan bumbu rempah yang khas seperti bawang
            merah, bawang putih, kecap manis, dan cabai, memberikan rasa gurih,
            manis, dan sedikit pedas. Daging sapi yang dipotong tipis dan
            digoreng bersama nasi menambah cita rasa nikmat dan tekstur pada
            hidangan ini. Biasanya, Nasi Goreng Tektek Beef Slice disajikan
            dengan telur mata sapi di atasnya, serta irisan mentimun dan kerupuk
            sebagai pelengkap. Hidangan ini cocok untuk disantap sebagai makan
            siang atau makan malam yang lezat.
          </p>
          <div className="border-t pt-4">
            <Link
              href="/item/nasgor-kulit-usus"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/es-teh-pandan"
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
