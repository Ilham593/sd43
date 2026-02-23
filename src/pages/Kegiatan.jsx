import { motion } from "framer-motion";

export default function Kegiatan() {
  const kegiatan = [
    {
      id: 1,
      title: "Upacara Bendera",
      description: "Kegiatan rutin setiap hari Senin untuk menanamkan disiplin dan nasionalisme.",
    },
    {
      id: 2,
      title: "Ekstrakurikuler Pramuka",
      description: "Melatih kemandirian, kepemimpinan, dan kerja sama siswa.",
    },
    {
      id: 3,
      title: "Lomba Antar Kelas",
      description: "Ajang kompetisi untuk meningkatkan semangat belajar dan kreativitas.",
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Kegiatan Sekolah
          </h1>
          <p className="mt-4 text-gray-600">
            Berbagai aktivitas dan kegiatan siswa di SD Negeri 43 Kota Bengkulu
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {kegiatan.map((item) => (
            <div
              key={item.id}
              className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}