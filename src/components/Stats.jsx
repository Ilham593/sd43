import { motion } from "framer-motion";
import { Users, GraduationCap, School, Star } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      title: "Jumlah Siswa",
      value: "320+",
      icon: <Users size={40} />,
    },
    {
      id: 2,
      title: "Jumlah Guru",
      value: "25+",
      icon: <GraduationCap size={40} />,
    },
    {
      id: 3,
      title: "Ruang Kelas",
      value: "12",
      icon: <School size={40} />,
    },
    {
      id: 4,
      title: "Program Unggulan",
      value: "5+",
      icon: <Star size={40} />,
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
            Data Sekolah
          </h2>
          <p className="text-gray-600 mt-4">
            Informasi singkat mengenai SD Negeri 43 Kota Bengkulu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-blue-900">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
