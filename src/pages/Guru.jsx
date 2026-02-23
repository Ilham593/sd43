import { motion } from "framer-motion";
import gambar from "../assets/images/test.jpg";
export default function Guru() {
  const teachers = [
    {
      id: 1,
      name: "Budi Santoso, S.Pd",
      position: "Kepala Sekolah",
      status: "PNS",
      photo: gambar,
    },
    {
      id: 2,
      name: "Siti Aminah, S.Pd",
      position: "Guru Kelas",
      status: "PNS",
      photo: gambar,
    },
    {
      id: 3,
      name: "Andi Pratama, S.Pd",
      position: "Guru Olahraga",
      status: "Honorer",
      photo:gambar,
    },
    {
      id: 4,
      name: "Rina Marlina, S.Pd",
      position: "Guru Bahasa Indonesia",
      status: "PNS",
      photo: gambar,
    },
    {
      id: 5,
      name: "Dedi Saputra, S.Pd",
      position: "Guru Matematika",
      status: "PNS",
      photo: gambar,
    },
    {
      id: 6,
      name: "Maya Lestari, S.Pd",
      position: "Guru Kelas",
      status: "Honorer",
      photo: gambar,
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Guru & Tenaga Pendidik</h1>
        <p className="mt-4 text-gray-200">
          Tenaga pendidik profesional SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto">

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              whileHover={{ y: -8 }}
              className="p-8 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="object-cover w-32 h-32 mx-auto rounded-full shadow-md"
              />

              <h3 className="mt-6 text-xl font-semibold text-blue-900">
                {teacher.name}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {teacher.position}
              </p>

              <span className="inline-block px-4 py-1 mt-4 text-xs font-semibold text-blue-900 bg-yellow-400 rounded-full">
                {teacher.status}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
