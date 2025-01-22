import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function EsTehPandan() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/es teh pandan.jpg" // Ganti dengan gambar Es Teh Pandan
            alt="Es Teh Pandan"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Es Teh Pandan</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Es Teh Pandan adalah minuman teh manis yang disajikan dengan
            tambahan daun pandan, memberikan rasa harum yang khas. Pandan
            dikenal sebagai salah satu daun yang memberikan aroma dan rasa yang
            menyegarkan. Es Teh Pandan biasanya disajikan dingin dengan es batu
            dan dapat dinikmati kapan saja, terutama saat cuaca panas. Minuman
            ini menyegarkan dan memberikan sensasi rasa manis dan harum pandan
            yang menyatu dengan teh yang segar. Es Teh Pandan adalah pilihan
            yang sempurna untuk teman makan atau sekadar pelepas dahaga di siang
            hari.
          </p>
          <div className="border-t pt-4">
            <Link
              href="/item/nasgor-tektek-beef-slice"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/es-kelapa-jeruk"
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
