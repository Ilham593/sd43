import { motion } from "framer-motion";
import { BookOpen, CalendarDays, Award, Music } from "lucide-react";

export default function Akademik() {
  const ekstrakurikuler = [
    {
      id: 1,
      title: "Pramuka",
      icon: <Award size={28} />,
      desc: "Melatih kemandirian, kedisiplinan, dan kepemimpinan siswa.",
    },
    {
      id: 2,
      title: "Drumband",
      icon: <Music size={28} />,
      desc: "Mengembangkan bakat seni dan kerja sama tim.",
    },
    {
      id: 3,
      title: "Olahraga",
      icon: <Award size={28} />,
      desc: "Meningkatkan kebugaran dan prestasi non-akademik.",
    },
    {
      id: 4,
      title: "Literasi",
      icon: <BookOpen size={28} />,
      desc: "Meningkatkan minat baca dan kemampuan literasi siswa.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Akademik</h1>
        <p className="mt-4 text-gray-200">
          Sistem pembelajaran dan kegiatan akademik SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">

        {/* Kurikulum */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Kurikulum
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SD Negeri 43 Kota Bengkulu menerapkan Kurikulum Merdeka yang
            berfokus pada pengembangan kompetensi, karakter, serta kreativitas
            peserta didik. Pembelajaran dirancang interaktif dan inovatif
            untuk mendukung potensi setiap siswa.
          </p>
        </motion.section>

        {/* Program Pembelajaran */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Program Pembelajaran
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Pembelajaran tematik terpadu.</li>
            <li>Program literasi harian.</li>
            <li>Pembiasaan karakter dan disiplin.</li>
            <li>Penguatan numerasi dan sains dasar.</li>
          </ul>
        </motion.section>

        {/* Ekstrakurikuler */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Ekstrakurikuler
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {ekstrakurikuler.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
              >
                <div className="text-yellow-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Kalender Akademik */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Kalender Akademik
          </h2>

          <div className="bg-white shadow-md rounded-xl p-8 flex items-start gap-4">
            <CalendarDays className="text-yellow-500" size={32} />
            <p className="text-gray-700 leading-relaxed">
              Tahun ajaran dimulai pada bulan Juli dan berakhir pada bulan Juni.
              Kegiatan akademik meliputi penilaian tengah semester,
              penilaian akhir semester, serta kegiatan pengembangan karakter
              dan ekstrakurikuler.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
