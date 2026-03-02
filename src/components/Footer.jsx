import { Link } from "react-router-dom";
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiExternalLink, 
  HiChevronRight 
} from "react-icons/hi";
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaGraduationCap 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 text-gray-400 bg-gray-950">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Kolom 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FaGraduationCap size={24} />
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                SDN 43 <span className="text-blue-500">Bengkulu</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Mewujudkan generasi cerdas, berakhlak mulia, dan unggul dalam prestasi di Kota Bengkulu. Kami percaya setiap anak memiliki potensi luar biasa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 transition-all bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="p-2 transition-all bg-gray-900 rounded-full hover:bg-pink-600 hover:text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-2 transition-all bg-gray-900 rounded-full hover:bg-red-600 hover:text-white">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-white uppercase">
              Jelajahi
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Beranda", path: "/" },
                { name: "Profil Sekolah", path: "/profil" },
                { name: "Data Rombel", path: "/rombongan-belajar" },
                { name: "Fasilitas & Sarana", path: "/fasilitas" },
                { name: "Galeri Kegiatan", path: "/galeri" },
                { name: "Daftar Guru", path: "/guru" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 transition-all hover:text-blue-400 group"
                  >
                    <HiChevronRight className="transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Info Kontak */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-white uppercase">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="mt-1 text-blue-500 shrink-0" size={20} />
                <span>Jl. Gunung Bungkuk, Kec. Tanah Patah, Kota Bengkulu, 38224</span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-blue-500 shrink-0" size={20} />
                <span>(0736) 343505</span>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-blue-500 shrink-0" size={20} />
                <span className="break-all">sekolahkami43@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Link Web & Maps */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-white uppercase">
              Lokasi Strategis
            </h3>
            <div className="relative mb-4 overflow-hidden bg-gray-900 rounded-xl aspect-video group">
              {/* Gambar statis peta sebagai ilustrasi */}
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400" 
                alt="Map Preview"
                className="object-cover w-full h-full transition-transform duration-500 opacity-50 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700"
                >
                  Buka di Maps <HiExternalLink />
                </a>
              </div>
            </div>
            <p className="text-[11px] leading-relaxed italic text-gray-500">
              Kunjungi kami langsung untuk informasi pendaftaran dan melihat fasilitas sekolah.
            </p>
          </div>

        </div>
      </div>

      {/* Baris Paling Bawah */}
      <div className="border-t border-gray-900 bg-black/30">
        <div className="flex flex-col items-center justify-between px-4 py-8 mx-auto space-y-4 max-w-7xl sm:px-6 lg:px-8 md:flex-row md:space-y-0">
          <p className="text-xs text-center md:text-left">
            © {currentYear} <span className="font-medium text-white">SD Negeri 43 Kota Bengkulu</span>. 
            Dikembangkan untuk Pendidikan Masa Depan.
          </p>
          <div className="flex gap-6 text-xs font-medium">
            <Link to="#" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="#" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}