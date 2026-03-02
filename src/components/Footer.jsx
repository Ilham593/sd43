import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 text-gray-300 bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Kolom 1 */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white sm:text-xl">
              SD Negeri 43 Kota Bengkulu
            </h2>
            <p className="text-sm leading-relaxed">
              Sekolah dasar negeri yang berkomitmen memberikan pendidikan 
              berkualitas, berkarakter, dan berorientasi pada masa depan.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="transition hover:text-white">Beranda</Link></li>
              <li><Link to="/profil" className="transition hover:text-white">Profil</Link></li>
              <li><Link to="/rombongan-belajar" className="transition hover:text-white">Rombel</Link></li>
              <li><Link to="/fasilitas" className="transition hover:text-white">Fasilitas</Link></li>
              <li><Link to="/galeri" className="transition hover:text-white">Galeri</Link></li>
              <li><Link to="/kontak" className="transition hover:text-white">Kontak</Link></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Kontak
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Jl. Gunung Bungkuk, Kota Bengkulu</li>
              <li>Telp: 0736-343505</li>
              <li>Email: sekolahkami43@gmail.com</li>
              <li>
                <a
                  href="https://sdn43bkl.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all transition hover:text-white"
                >
                  https://sdn43bkl.vercel.app
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="px-4 py-4 mx-auto text-sm text-center text-gray-400 max-w-7xl sm:px-6 lg:px-8">
          © {new Date().getFullYear()} SD Negeri 43 Kota Bengkulu. 
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}