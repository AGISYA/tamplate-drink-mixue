import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1b3b34] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Deskripsi Perusahaan */}
        <div>
          <h3 className="text-lg font-bold mb-4">Tentang Kami</h3>
          <p className="text-gray-200">
            Starbucks adalah pemimpin global dalam industri kopi, menghadirkan
            minuman berkualitas tinggi dan pengalaman luar biasa kepada setiap
            pelanggan. Kami berdedikasi untuk menciptakan tempat di mana semua
            orang dapat terhubung.
          </p>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
          <p className="text-gray-200">Jl. Thamrin no.10, Jakarta, Indonesia</p>
          <p className="text-gray-200">cs@starbucks.co.id</p>
          <p className="text-gray-200">(+62)21 1234 5678</p>
        </div>

        {/* Jam Operasional & Media Sosial */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4">Jam Operasional</h3>
            <p className="text-gray-200">Senin - Jumat: 7am - 10pm</p>
            <p className="text-gray-200">Sabtu & Minggu: 8am - 11pm</p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <h3 className="text-lg font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        {/* Catatan Footer */}
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Starbucks Indonesia. Semua hak cipta
          dilindungi.
        </p>
      </div>
    </footer>
  );
}
