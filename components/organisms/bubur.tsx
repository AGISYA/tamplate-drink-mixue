import Image from "next/image";

export default function Bubur() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#5b7f3e]">
          Ayo Nikmati Sarapan di Ayu Ayu!
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Nikmati sarapan lezat dengan Bubur Kacang atau Bubur Ketan yang hangat
          dan nikmat. Pilih bubur favoritmu untuk memulai hari dengan penuh
          energi!
        </p>
      </div>

      {/* Menampilkan Bubur Kacang dan Bubur Ketan dalam satu baris */}
      <div className="flex flex-row items-center justify-between gap-8 w-full max-w-screen-lg mx-auto">
        {/* Bubur Kacang - Teks di Kiri */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-[#5b7f3e]">
            Bubur Kacang
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Nikmati kenikmatan bubur kacang dengan rasa manis dan gurih. Bubur
            ini terbuat dari kacang hijau yang direbus hingga empuk, disajikan
            dengan santan kental dan gula merah yang memberikan rasa lezat dan
            menenangkan.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Cocok untuk dinikmati saat pagi hari atau sebagai hidangan penutup
            yang menggugah selera. Rasakan sensasi hangatnya yang penuh cita
            rasa!
          </p>
        </div>

        {/* Gambar - Bubur Kacang */}
        <div className="flex-1 max-w-full">
          <Image
            src="/images/edited-9517.jpg" // Pastikan gambar ada di folder public/images
            alt="Bubur Kacang"
            width={250} // Ukuran gambar yang lebih kecil agar lebih seimbang
            height={200} // Menjaga rasio gambar
            className="rounded-lg object-contain mx-auto"
          />
        </div>
        {/* Gambar - Bubur Ketan */}
        <div className="flex-1 max-w-full">
          <Image
            src="/images/edited-9532.jpg" // Pastikan gambar ada di folder public/images
            alt="Bubur Ketan"
            width={250} // Ukuran gambar yang lebih kecil agar lebih seimbang
            height={200} // Menjaga rasio gambar
            className="rounded-lg object-contain mx-auto"
          />
        </div>
        {/* Bubur Ketan - Teks di Kiri */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-[#5b7f3e]">Bubur Ketan</h2>
          <p className="mt-2 text-sm text-gray-600">
            Bubur ketan hitam yang kenyal dan lezat siap menemani hari Anda.
            Dibuat dari ketan hitam yang direbus dengan santan kelapa,
            memberikan rasa manis alami yang khas.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Bubur ketan ini sangat pas disajikan dengan taburan kelapa parut dan
            gula merah cair yang membuatnya semakin nikmat. Ideal untuk sarapan
            atau camilan sehat.
          </p>
        </div>
      </div>
    </div>
  );
}
