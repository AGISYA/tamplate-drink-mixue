import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Judul Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b3b34]">
          Tentang Kami
        </h1>
        <p className="mt-4 text-xs sm:text-lg text-gray-600">
          Kami adalah penyedia minuman segar dan berkualitas yang mengutamakan
          rasa dan kesegaran alami.
        </p>
      </div>

      {/* Section Tentang Kami */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Teks Deskripsi */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b3b34] mb-4">
            Selamat Datang di Ayu Ayu
          </h2>
          <p className="text-gray-600 leading-relaxed text-xs sm:text-base mb-4">
            Nikmati berbagai minuman segar berbahan alami yang diracik dengan
            cinta. Kami menghadirkan pilihan minuman seperti jus buah segar, teh
            herbal, dan minuman khas kami.
          </p>
          <p className="text-gray-600 leading-relaxed text-xs sm:text-base mb-4">
            Setiap minuman dibuat dengan bahan-bahan berkualitas tinggi untuk
            memastikan kesegaran dan cita rasa terbaik dalam setiap tegukan.
          </p>
          <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
            Minuman khas kami, seperti Es Segar Nusantara, menggabungkan
            berbagai rasa tropis yang memanjakan lidah dan memberikan kesegaran
            maksimal sepanjang hari.
          </p>
        </div>

        {/* Gambar */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0 w-full">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
            <Image
              src="/images/Green Minimalist Matcha Latte Instagram Story (Presentasi) (4).png"
              alt="Ayu Ayu Minuman"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
