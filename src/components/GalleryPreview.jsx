import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gambar from "../assets/images/test.jpg";

export default function GalleryPreview() {
  const images = [
    {
      id: 1,
      src: gambar,
      title: "Kegiatan Belajar Mengajar",
    },
    {
      id: 2,
      src: gambar,
      title: "Upacara Bendera",
    },
    {
      id: 3,
      src: gambar,
      title: "Lomba Siswa",
    },
    {
      id: 4,
      src: gambar,
      title: "Kegiatan Ekstrakurikuler",
    },
    {
      id: 5,
      src: gambar,
      title: "Perpustakaan Sekolah",
    },
    {
      id: 6,
      src: gambar,
      title: "Class Meeting",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Galeri Kegiatan
          </h2>
          <p className="mt-4 text-gray-600">
            Dokumentasi kegiatan dan aktivitas siswa di SD Negeri 43 Kota Bengkulu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden shadow-lg rounded-xl group"
            >
              <img
                src={item.src}
                alt={item.title}
                className="object-cover w-full h-64"
              />

              <div className="absolute inset-0 flex items-center justify-center transition opacity-0 bg-blue-900/70 group-hover:opacity-100">
                <p className="px-4 font-semibold text-center text-white">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/kegiatan"
            className="px-6 py-3 font-semibold text-white transition bg-blue-900 rounded-lg hover:bg-blue-800"
          >
            Lihat Semua Kegiatan
          </Link>
        </div>

      </div>
    </section>
  );
}
