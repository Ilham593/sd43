import downloads from "../data/downloads";

export default function Download() {
  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">
          Download Center
        </h1>
        <p className="mt-4 text-gray-200">
          Unduh dokumen resmi SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto">

        <div className="grid gap-8 md:grid-cols-3">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="p-8 transition bg-white shadow-md rounded-2xl hover:shadow-xl"
            >
              <p className="text-sm text-gray-500">
                {item.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-blue-900">
                {item.title}
              </h3>

              <a
                href={item.file}
                className="inline-block px-5 py-2 mt-6 text-white transition bg-blue-900 rounded-lg hover:bg-blue-800"
              >
                Download
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}