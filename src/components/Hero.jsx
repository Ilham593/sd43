import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gerbang from "../assets/images/gerbang.jpeg";
export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen text-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={gerbang}
          alt="Sekolah"
          className="object-cover w-full h-full"
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
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          SD Negeri 43 Kota Bengkulu
        </h1>

        <p className="mt-6 text-lg text-gray-200 md:text-xl">
          Membangun Generasi Cerdas, Berkarakter, dan Berprestasi
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
          <Link
            to="/profil"
            className="px-6 py-3 font-semibold text-blue-900 transition bg-yellow-400 rounded-lg hover:bg-yellow-300"
          >
            Lihat Profil
          </Link>

          <Link
            to="/kontak"
            className="px-6 py-3 font-semibold transition border border-white rounded-lg hover:bg-white hover:text-blue-900"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
