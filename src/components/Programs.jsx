import { motion } from "framer-motion";
import { BookOpen, Trophy, HeartHandshake, Monitor } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Implementasi Kurikulum Merdeka",
      desc: "Pelaksanaan pembelajaran berbasis Kurikulum Merdeka yang berfokus pada penguatan kompetensi dan karakter siswa.",
      icon: <BookOpen size={36} />,
    },
    {
      id: 2,
      title: "Penguatan Pendidikan Karakter",
      desc: "Penanaman nilai disiplin, tanggung jawab, dan akhlak mulia melalui kegiatan belajar dan budaya sekolah.",
      icon: <HeartHandshake size={36} />,
    },
    {
      id: 3,
      title: "Pengembangan Prestasi Siswa",
      desc: "Mendorong siswa mengikuti kegiatan lomba akademik dan non-akademik untuk mengembangkan potensi diri.",
      icon: <Trophy size={36} />,
    },
    {
      id: 4,
      title: "Pemanfaatan Teknologi Pembelajaran",
      desc: "Penggunaan media dan perangkat pembelajaran digital untuk mendukung proses belajar yang lebih efektif.",
      icon: <Monitor size={36} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Program Sekolah
          </h2>
          <p className="mt-4 text-gray-600">
            Komitmen SD Negeri 43 Kota Bengkulu dalam meningkatkan kualitas pendidikan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {programs.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="p-8 transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <div className="mb-4 text-yellow-400">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-blue-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}