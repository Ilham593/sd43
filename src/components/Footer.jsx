import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        {/* Tentang */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
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
          <h3 className="text-xl font-semibold text-white mb-4">
            Kontak Kami
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                JL. Gunung Bungkuk, Tanah Patah, Dusun Besar,
                Kec. Singaran Pati, Kota Bengkulu 38224
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>(0736) 000000</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>sdn43bengkulu@email.com</span>
            </div>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Beranda</a></li>
            <li><a href="/profil" className="hover:text-yellow-400">Profil</a></li>
            <li><a href="/guru" className="hover:text-yellow-400">Guru</a></li>
            <li><a href="/akademik" className="hover:text-yellow-400">Akademik</a></li>
            <li><a href="/kontak" className="hover:text-yellow-400">Kontak</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SD Negeri 43 Kota Bengkulu. All rights reserved.
      </div>
    </footer>
  );
}
