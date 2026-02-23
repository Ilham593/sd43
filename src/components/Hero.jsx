import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
          alt="Sekolah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          SD Negeri 43 Kota Bengkulu
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Membangun Generasi Cerdas, Berkarakter, dan Berprestasi
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/profil"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Lihat Profil
          </Link>

          <Link
            to="/kontak"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
