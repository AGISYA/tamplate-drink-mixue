import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5b7f3e] text-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Description */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-black">
            Ayu Ayu Nusantara adalah perusahaan yang berfokus pada produk
            berkualitas tinggi dengan dedikasi untuk memberikan layanan terbaik
            kepada pelanggan. Kami hadir untuk menciptakan masa depan yang penuh
            kesuksesan bersama.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-black">
            Jl. Ahmad Yani no.1, Garut, Jawa Barat, Indonesia
          </p>
          <p className="text-black">cs@ayuayu.com</p>
          <p className="text-black">(+62)888 8990 988</p>
        </div>

        {/* Working Hours & Social Media */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4">Working Hours</h3>
            <p className="text-black">Mon - Fri: 9am - 6pm</p>
            <p className="text-black">Sat & Sun: Closed</p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        {/* Footer Note */}
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Ayu Ayu Nusantara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
