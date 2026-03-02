import galeriData from "../data/galeri"

function Galeri() {
  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Galeri Kegiatan
        </h1>

        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          Dokumentasi kegiatan siswa dan aktivitas sekolah.
        </p>
      </section>

      {/* Grid */}
      <section
        className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {galeriData.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden transition bg-white border shadow-sm rounded-2xl hover:shadow-lg"
          >
            <div className="overflow-hidden">
              <img
                src={item.gambar}
                alt={item.judul}
                className="object-cover w-full h-56 transition duration-300 sm:h-60 lg:h-64 hover:scale-105"
              />
            </div>

            <div className="p-4 sm:p-5">
              <h2 className="text-sm font-medium text-gray-700 sm:text-base">
                {item.judul}
              </h2>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Galeri