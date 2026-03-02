import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center text-center text-white">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="SD Negeri 43 Kota Bengkulu"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 space-y-5 sm:px-6 sm:space-y-6">
          <h1 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            SD Negeri 43 Kota Bengkulu
          </h1>

          <p className="text-sm text-gray-200 sm:text-base">
            Sekolah Dasar Negeri yang berkomitmen membangun generasi unggul
            melalui pendidikan berkualitas, berkarakter, dan lingkungan belajar
            yang kondusif.
          </p>

          <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
            <Link
              to="/profil"
              className="px-6 py-3 transition bg-blue-600 shadow rounded-xl hover:bg-blue-700"
            >
              Profil Sekolah
            </Link>

            <Link
              to="/kontak"
              className="px-6 py-3 text-gray-800 transition bg-white shadow rounded-xl hover:bg-gray-200"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
<StatCard title="Total Siswa" value="156" icon="👥" />
<StatCard title="Tenaga Pendidik" value="14" icon="👨‍🏫" /> 
<StatCard title="Rombongan Belajar" value="7" icon="🏫" />
<StatCard title="Akreditasi" value="B" icon="📜" /> 
      </section>

      {/* PREVIEW */}
      <section className="space-y-8 sm:space-y-10">
        <h2 className="text-xl font-semibold text-center sm:text-2xl">
          Informasi Sekolah
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
          <InfoCard
            title="Struktur Rombongan Belajar"
            desc="Terdiri dari 7 rombongan belajar dengan distribusi siswa yang merata."
            link="/rombongan-belajar"
          />
          <InfoCard
            title="Fasilitas & Prasarana"
            desc="Memiliki 17 unit fasilitas penunjang kegiatan belajar mengajar."
            link="/fasilitas"
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="p-5 text-center transition bg-white border shadow-sm rounded-2xl sm:p-6 hover:shadow-lg hover:-translate-y-1">
      <h3 className="mb-2 text-xs text-gray-500 sm:text-sm">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 sm:text-3xl">{value}</p>
    </div>
  );
}

function InfoCard({ title, desc, link }) {
  return (
    <div className="p-5 transition bg-white border shadow-sm rounded-2xl sm:p-6 hover:shadow-lg hover:-translate-y-1">
      <h3 className="mb-3 text-base font-semibold sm:text-lg">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">{desc}</p>
      <Link
        to={link}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        Selengkapnya →
      </Link>
    </div>
  );
}

export default Home;
