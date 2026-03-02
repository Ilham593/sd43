import rombelData from "../data/rombel"

function Rombel() {
  return (
    <div className="space-y-12 md:space-y-16">

      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Struktur Rombongan Belajar
        </h1>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          SD Negeri 43 Kota Bengkulu memiliki 7 rombongan belajar
          dengan distribusi siswa yang merata pada setiap tingkat.
        </p>
      </section>

      {/* GRID ROMBEL */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rombelData.map((kelas, index) => (
          <div
            key={index}
            className="p-5 transition bg-white border shadow-sm sm:p-6 rounded-2xl hover:shadow-md"
          >
            <h2 className="mb-4 text-base font-semibold text-blue-600 sm:text-lg">
              {kelas.nama}
            </h2>

            <div className="space-y-2 text-sm text-gray-600 sm:text-base">
              <p>
                <span className="font-medium text-gray-800">
                  Total Siswa:
                </span>{" "}
                {kelas.total}
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Laki-laki:
                </span>{" "}
                {kelas.laki}{" "}
                <span className="mx-1 text-gray-400">|</span>{" "}
                <span className="font-medium text-gray-800">
                  Perempuan:
                </span>{" "}
                {kelas.perempuan}
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Wali Kelas:
                </span>{" "}
                {kelas.wali}
              </p>

              <p>
                <span className="font-medium text-gray-800">
                  Kurikulum:
                </span>{" "}
                {kelas.kurikulum}
              </p>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Rombel