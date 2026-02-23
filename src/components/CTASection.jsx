import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Bergabung Bersama SD Negeri 43 Kota Bengkulu
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Kami berkomitmen memberikan pendidikan terbaik untuk membentuk generasi 
            yang cerdas, berkarakter, dan siap menghadapi masa depan.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/profil"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Lihat Profil Sekolah
            </Link>

            <Link
              to="/kontak"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
