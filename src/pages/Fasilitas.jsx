import fasilitasData from "../data/fasilitas"

function Fasilitas() {
  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Fasilitas Sekolah
        </h1>

        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          Berbagai fasilitas tersedia untuk mendukung proses belajar
          mengajar di SD Negeri 43 Kota Bengkulu.
        </p>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {fasilitasData.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden transition bg-white border shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="object-cover w-full h-52 sm:h-56 lg:h-64"
            />

            <div className="p-5 space-y-2 sm:p-6">
              <h2 className="text-base font-semibold text-blue-600 sm:text-lg">
                {item.nama}
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                {item.deskripsi}
              </p>
            </div>
          </div>
        ))}

      </section>

    </div>
  )
}

export default Fasilitas