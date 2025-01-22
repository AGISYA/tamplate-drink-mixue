import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import Link from "next/link";

export default function SotoBetawi() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/soto betawi.jpg"
            alt="Soto Betawi"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Soto Betawi</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Soto Betawi adalah hidangan khas Jakarta yang terdiri dari kuah
            santan yang gurih dan kaya rasa, dengan isian daging sapi atau
            jeroan seperti babat, paru, dan hati. Kuahnya dibuat dari campuran
            santan dan susu yang menghasilkan tekstur lembut dan rasa yang khas.
            Hidangan ini biasanya disajikan dengan pelengkap seperti irisan
            tomat, daun bawang, emping, jeruk nipis, serta sambal untuk menambah
            cita rasa. Soto Betawi mencerminkan kekayaan kuliner Indonesia dan
            menjadi favorit banyak orang karena rasa dan aromanya yang menggugah
            selera.
          </p>

          <div className="border-t pt-4">
            <Link
              href="/item/mie-goreng"
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
