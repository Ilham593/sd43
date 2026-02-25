import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 text-gray-300 bg-gray-900">
      <div className="grid max-w-6xl gap-10 px-4 mx-auto md:grid-cols-3">
        {/* Tentang */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            SD Negeri 43 Kota Bengkulu
          </h3>
          <p className="text-sm leading-relaxed">
            Sekolah dasar negeri yang berkomitmen menciptakan lingkungan belajar
            yang aman, nyaman, dan berkualitas untuk membentuk generasi cerdas
            dan berkarakter.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Kontak Kami</h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                JL. Gunung Bungkuk, Tanah Patah, Dusun Besar, Kec. Ratu Agung,
                Kota Bengkulu 38224
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>0736343505</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>sekolahkami43@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Beranda
              </a>
            </li>
            <li>
              <a href="/profil" className="hover:text-yellow-400">
                Profil
              </a>
            </li>
            <li>
              <a href="/guru" className="hover:text-yellow-400">
                Guru
              </a>
            </li>
            <li>
              <a href="/akademik" className="hover:text-yellow-400">
                Akademik
              </a>
            </li>
            <li>
              <a href="/kontak" className="hover:text-yellow-400">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-12 text-sm text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} SD Negeri 43 Kota Bengkulu. All rights
        reserved.
      </div>
    </footer>
  );
}
