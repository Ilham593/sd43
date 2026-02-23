import { motion } from "framer-motion";
import gambar from "../assets/images/test.jpg";
export default function Fasilitas() {
  const facilities = [
    {
      id: 1,
      title: "Ruang Kelas Nyaman",
      desc: "Ruang kelas yang bersih, nyaman, dan dilengkapi fasilitas pendukung pembelajaran.",
      image: gambar,
    },
    {
      id: 2,
      title: "Perpustakaan",
      desc: "Perpustakaan sekolah dengan koleksi buku yang mendukung program literasi siswa.",
      image: gambar,
    },
    {
      id: 3,
      title: "Lapangan Olahraga",
      desc: "Fasilitas lapangan untuk mendukung kegiatan olahraga dan aktivitas fisik siswa.",
      image: gambar,
    },
    {
      id: 4,
      title: "Ruang UKS",
      desc: "Unit Kesehatan Sekolah untuk menjaga kesehatan dan keselamatan siswa.",
      image: gambar,
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Fasilitas Sekolah</h1>
        <p className="mt-4 text-gray-200">
          Sarana dan prasarana pendukung pembelajaran di SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto">

        <div className="grid gap-12 md:grid-cols-2">
          {facilities.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-64"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
