import { motion } from "framer-motion";
import { BookOpen, Trophy, HeartHandshake, Monitor } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Pembelajaran Berbasis Karakter",
      desc: "Menanamkan nilai disiplin, tanggung jawab, dan akhlak mulia dalam setiap kegiatan belajar.",
      icon: <HeartHandshake size={36} />,
    },
    {
      id: 2,
      title: "Program Literasi Sekolah",
      desc: "Meningkatkan minat baca siswa melalui kegiatan literasi rutin dan perpustakaan aktif.",
      icon: <BookOpen size={36} />,
    },
    {
      id: 3,
      title: "Pengembangan Prestasi Siswa",
      desc: "Mendorong siswa untuk aktif mengikuti lomba akademik dan non-akademik.",
      icon: <Trophy size={36} />,
    },
    {
      id: 4,
      title: "Pembelajaran Digital",
      desc: "Pemanfaatan teknologi dalam proses belajar mengajar untuk meningkatkan kualitas pendidikan.",
      icon: <Monitor size={36} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Program Unggulan
          </h2>
          <p className="mt-4 text-gray-600">
            Komitmen kami dalam menciptakan pendidikan yang berkualitas dan berkarakter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {programs.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-yellow-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-blue-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
