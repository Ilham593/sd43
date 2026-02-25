import ppdb from "../data/ppdb";

export default function PPDB() {
  return (
    <div className="bg-gray-50">

      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">
          PPDB {ppdb.tahunAjaran}
        </h1>
        <p className="mt-4 text-gray-200">
          Penerimaan Peserta Didik Baru SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto space-y-16">

        <div className="grid gap-8 text-center md:grid-cols-3">
          <div className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold text-blue-900">
              Jadwal Pendaftaran
            </h3>
            <p className="mt-4 text-gray-600">
              {ppdb.tanggalPendaftaran}
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold text-blue-900">
              Kuota Siswa
            </h3>
            <p className="mt-4 text-gray-600">
              {ppdb.kuota} Siswa
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold text-blue-900">
              Lokasi Sekolah
            </h3>
            <p className="mt-4 text-gray-600">
              Kota Bengkulu
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Persyaratan
          </h2>
          <ul className="space-y-3">
            {ppdb.syarat.map((item, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Alur Pendaftaran
          </h2>
          <ol className="space-y-3">
            {ppdb.alur.map((step, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="px-8 py-4 font-semibold text-white transition bg-blue-900 rounded-xl hover:bg-blue-800"
          >
            Download Formulir Pendaftaran
          </a>
        </div>

      </div>
    </div>
  );
}