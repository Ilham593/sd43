export default function Guru() {
  const tenagaPendidik = [
    { nama: "Sunisti, S.Pd", jabatan: "Kepala Sekolah", status: "PNS" },
    { nama: "Ansori, S.Pd", jabatan: "Guru Kelas", status: "PNS" },
    { nama: "Herlina, S.Pd", jabatan: "Guru Kelas", status: "PNS" },
    { nama: "Ita Riani, S.Pd", jabatan: "Guru Kelas", status: "PNS" },
    { nama: "Khairunnisa, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
    {
      nama: "Kiki Riski Kelana Putra, S.Pd",
      jabatan: "Guru Penjasorkes",
      status: "PPPK",
    },
    {
      nama: "M. Nurkholil, S.Pd.I",
      jabatan: "Guru Agama Islam",
      status: "PPPK",
    },
    {
      nama: "Mei Tri Hastuti, S.Pd",
      jabatan: "Guru Bahasa Inggris",
      status: "Honor",
    },
    {
      nama: "Parisa Purnama Sari, S.Pd",
      jabatan: "Guru Kelas",
      status: "Honor",
    },
    {
      nama: "Rizki Tri Permatasari, S.Pd",
      jabatan: "Guru Kelas",
      status: "PPPK",
    },
    { nama: "Siska Dewi, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
    { nama: "Sukma Nerawati, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
  ];

  const tenagaKependidikan = [
    {
      nama: "Nersih, S.Pt",
      jabatan: "Tenaga Administrasi Sekolah",
      status: "Honor",
    },
    { nama: "Kalaluddin", jabatan: "Penjaga Sekolah", status: "Honor" },
  ];

  return (
    <div className="py-8 space-y-12 sm:space-y-16 sm:py-12">
      {/* Header */}
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Pendidik & Tenaga Kependidikan
        </h1>
        <p className="text-sm text-gray-600 sm:text-base">
          SD Negeri 43 Kota Bengkulu
        </p>
      </div>

      {/* Tenaga Pendidik */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">
          Tenaga Pendidik
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tenagaPendidik.map((guru, index) => (
            <div
              key={index}
              className="p-5 transition bg-white border shadow-sm rounded-2xl sm:p-6 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold sm:text-lg">
                {guru.nama}
              </h3>
              <p className="text-sm text-gray-600">{guru.jabatan}</p>

              {/* Logika warna status yang lebih menarik */}
              <span
                className={`inline-block px-3 py-1 mt-3 text-xs rounded-full font-medium ${
                  guru.status === "PNS"
                    ? "bg-green-100 text-green-700"
                    : guru.status === "PPPK"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                }`}
              >
                {guru.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tenaga Kependidikan */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">
          Tenaga Kependidikan
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tenagaKependidikan.map((staff, index) => (
            <div
              key={index}
              className="p-5 transition bg-white border shadow-sm rounded-2xl sm:p-6 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold sm:text-lg">
                {staff.nama}
              </h3>
              <p className="text-sm text-gray-600">{staff.jabatan}</p>

              <span className="inline-block px-3 py-1 mt-3 text-xs text-blue-600 bg-blue-100 rounded-full">
                {staff.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
