import { useState, useEffect } from "react"; // 1. Import hooks
import axios from "axios"; // 2. Import axios
import { Link } from "react-router-dom";
import {
  HiUserGroup,
  HiAcademicCap,
  HiOfficeBuilding,
  HiBadgeCheck,
  HiArrowRight,
  HiExternalLink,
} from "react-icons/hi";

function Home() {
  // 3. Setup state untuk menampung data dari MongoDB
  const [stats, setStats] = useState({
    totalSiswa: "...",
    tenagaPendidik: "...",
    rombelCount: "...",
    akreditasi: "...",
  });

  // Mengambil URL API dari Environment Variable Vercel
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // 4. Ambil data saat halaman dimuat
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${API_URL}/stats`); // Gunakan template literal
        setStats(response.data);
      } catch (error) {
        console.error("Gagal mengambil data statistik:", error);
      }
    };
    fetchStats();
  }, [API_URL]);

  return (
    <div className="pb-20 space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[40px] sm:rounded-b-[80px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050853063-bd80e27433fb?auto=format&fit=crop&q=80&w=1200"
            alt="SD Negeri 43 Kota Bengkulu"
            className="object-cover w-full h-full scale-105 animate-soft-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6 space-y-8 text-center">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase border rounded-full bg-blue-500/10 backdrop-blur-md border-blue-400/30">
            NPSN: 10702462
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            SD Negeri 43 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Kota Bengkulu
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-200 sm:text-xl">
            Membangun pondasi masa depan yang kuat melalui pendidikan yang
            inovatif, berkarakter, dan lingkungan belajar yang menginspirasi.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Link
              to="/profil"
              className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-all bg-blue-600 shadow-lg group rounded-2xl shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1"
            >
              Profil Sekolah{" "}
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/kontak"
              className="px-8 py-4 font-bold text-white transition-all border shadow-xl bg-white/10 backdrop-blur-md border-white/30 rounded-2xl hover:bg-white hover:text-blue-900"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTIK SECTION - Sekarang Menggunakan Data dari Backend */}
      <section className="px-4 mx-auto max-w-7xl">
        <div className="relative z-20 grid grid-cols-2 gap-4 -mt-24 sm:gap-6 lg:grid-cols-4">
          <StatCard
            title="Total Siswa"
            value={stats.totalSiswa}
            icon={<HiUserGroup />}
            color="blue"
          />
          <StatCard
            title="Tenaga Pendidik"
            value={stats.tenagaPendidik}
            icon={<HiAcademicCap />}
            color="purple"
          />
          <StatCard
            title="Rombongan Belajar"
            value={stats.rombelCount}
            icon={<HiOfficeBuilding />}
            color="orange"
          />
          <StatCard
            title="Akreditasi"
            value={stats.akreditasi}
            icon={<HiBadgeCheck />}
            color="green"
          />
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="px-4 mx-auto space-y-12 max-w-7xl">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Informasi Sekolah
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <InfoCard
            title="Struktur Rombongan Belajar"
            desc={`Terdiri dari ${stats.rombelCount} rombongan belajar dengan kurikulum terbaru untuk memastikan distribusi ilmu yang merata ke setiap siswa.`}
            link="/rombongan-belajar"
            img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600"
          />
          <InfoCard
            title="Fasilitas & Prasarana"
            desc="Kami menyediakan 17 unit fasilitas lengkap mulai dari ruang kelas yang nyaman hingga area olahraga yang mendukung kreativitas."
            link="/fasilitas"
            img="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600"
          />
        </div>
      </section>
    </div>
  );
}

// Sub-komponen StatCard dan InfoCard tetap sama seperti kodinganmu sebelumnya
function StatCard({ title, value, icon, color }) {
  const colors = {
    blue: "text-blue-600 bg-blue-50",
    purple: "text-purple-600 bg-purple-50",
    orange: "text-orange-600 bg-orange-50",
    green: "text-green-600 bg-green-50",
  };

  return (
    <div className="p-6 text-center transition-all bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-2 group">
      <div
        className={`w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${colors[color]}`}
      >
        {icon}
      </div>
      <p className="mb-1 text-3xl font-black text-gray-900 sm:text-4xl">
        {value}
      </p>
      <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
        {title}
      </h3>
    </div>
  );
}

function InfoCard({ title, desc, link, img }) {
  return (
    <div className="group overflow-hidden bg-white border border-gray-100 shadow-lg rounded-[32px] transition-all hover:shadow-2xl">
      <div className="overflow-hidden aspect-video">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">{desc}</p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-3"
        >
          Lihat Detail <HiExternalLink />
        </Link>
      </div>
    </div>
  );
}

export default Home;