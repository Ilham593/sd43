import { motion } from "framer-motion";
import { Users, GraduationCap, School, Calendar } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      title: "Jumlah Siswa",
      value: "156",
      icon: <Users size={40} />,
    },
    {
      id: 2,
      title: "Guru & Tenaga Kependidikan",
      value: "15",
      icon: <GraduationCap size={40} />,
    },
    {
      id: 3,
      title: "Rombongan Belajar",
      value: "7",
      icon: <School size={40} />,
    },
    {
      id: 4,
      title: "Tahun Berdiri",
      value: "1982",
      icon: <Calendar size={40} />,
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
            Data Sekolah
          </h2>
          <p className="mt-4 text-gray-600">
            Informasi resmi SD Negeri 43 Kota Bengkulu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="p-8 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
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