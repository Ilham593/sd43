function Profil() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Profil Sekolah
        </h1>
        <p className="max-w-3xl text-sm text-gray-600 sm:text-base">
          SD Negeri 43 Kota Bengkulu merupakan sekolah dasar negeri yang
          menerapkan Kurikulum Merdeka dan memiliki lingkungan belajar yang
          terstruktur dengan dukungan fasilitas yang memadai.
        </p>
      </section>

      {/* INFORMASI UMUM + RINGKASAN */}
      <section className="grid gap-6 md:gap-10 md:grid-cols-2">
        {/* INFORMASI UMUM */}
        <div className="p-5 bg-white border shadow-sm sm:p-6 rounded-2xl">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">
            Informasi Umum
          </h2>

          <div className="space-y-3 text-sm text-gray-600 sm:text-base">
            <p>
              <span className="font-medium text-gray-800">Nama Sekolah:</span>{" "}
              SD Negeri 43 Kota Bengkulu
            </p>
            <p>
              <span className="font-medium text-gray-800">Kecamatan:</span> Ratu
              Agung
            </p>
            <p>
              <span className="font-medium text-gray-800">Kabupaten/Kota:</span>{" "}
              Kota Bengkulu
            </p>
            <p>
              <span className="font-medium text-gray-800">Provinsi:</span>{" "}
              Bengkulu
            </p>
            <p>
              <span className="font-medium text-gray-800">Kurikulum:</span>{" "}
              Kurikulum SD Merdeka
            </p>
            <p>
              <span className="font-medium text-gray-800">
                Total Rombongan Belajar:
              </span>{" "}
              7
            </p>
          </div>
        </div>

        {/* RINGKASAN SISWA */}
        <div className="p-5 bg-white border shadow-sm sm:p-6 rounded-2xl">
          <h2 className="mb-6 text-lg font-semibold sm:text-xl">
            Ringkasan Peserta Didik
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SummaryItem label="Total Siswa" value="156" />
            <SummaryItem label="Laki-laki" value="80" />
            <SummaryItem label="Perempuan" value="76" />
            <SummaryItem label="Rentang Usia Dominan" value="6–12 Tahun" />
          </div>
        </div>
      </section>

      {/* KARAKTERISTIK SOSIAL */}
      <section className="p-6 space-y-6 bg-white border shadow-sm sm:p-8 rounded-2xl">
        <h2 className="text-lg font-semibold sm:text-xl">
          Karakteristik Sosial Ekonomi
        </h2>

        <p className="max-w-3xl text-sm text-gray-600 sm:text-base">
          Mayoritas orang tua/wali peserta didik berada pada rentang penghasilan
          Rp 500.000 – Rp 999.999 per bulan, yang menunjukkan karakteristik
          sosial ekonomi masyarakat sekitar sekolah berada pada kategori
          menengah ke bawah.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SummaryItem label="500rb – 999rb" value="100 Siswa" />
          <SummaryItem label="1jt – 1.9jt" value="26 Siswa" />
          <SummaryItem label="2jt – 4.9jt" value="17 Siswa" />
        </div>
      </section>

      {/* FASILITAS UNGGULAN (Tambahan) */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="p-5 border bg-blue-50 rounded-2xl">
          <h3 className="font-semibold text-blue-800">Sanitasi Baik</h3>
          <p className="text-sm text-blue-600">
            Memiliki 9 titik tempat cuci tangan dengan air mengalir dan sabun.
          </p>
        </div>
        <div className="p-5 border bg-green-50 rounded-2xl">
          <h3 className="font-semibold text-green-800">Daya Listrik</h3>
          <p className="text-sm text-green-600">
            Didukung daya listrik 3500 Watt untuk menunjang media pembelajaran
            digital.
          </p>
        </div>
        <div className="p-5 border bg-purple-50 rounded-2xl">
          <h3 className="font-semibold text-purple-800">Perpustakaan</h3>
          <p className="text-sm text-purple-600">
            Tersedia ruang perpustakaan yang nyaman untuk literasi siswa.
          </p>
        </div>
      </section>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="p-4 transition border rounded-xl hover:shadow-sm">
      <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
      <p className="text-lg font-semibold text-blue-600 sm:text-xl">{value}</p>
    </div>
  );
}

export default Profil;
