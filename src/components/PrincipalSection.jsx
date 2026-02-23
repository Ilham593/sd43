import { motion } from "framer-motion";
import gambar from "../assets/images/test.jpg";
export default function PrincipalSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Foto Kepala Sekolah */}
          <div className="flex justify-center">
            <img
              src={gambar}
              alt="Kepala Sekolah"
              className="object-cover shadow-xl rounded-2xl w-80"
            />
          </div>

          {/* Teks Sambutan */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
              Sambutan Kepala Sekolah
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Selamat datang di website resmi SD Negeri 43 Kota Bengkulu.
              Kami berkomitmen untuk memberikan pendidikan yang berkualitas,
              membangun karakter yang kuat, serta menciptakan lingkungan
              belajar yang aman dan nyaman bagi seluruh peserta didik.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Dengan dukungan tenaga pendidik yang profesional dan program
              unggulan yang berorientasi pada pengembangan potensi siswa,
              kami berharap dapat mencetak generasi yang cerdas, berakhlak
              mulia, dan siap menghadapi tantangan masa depan.
            </p>

            <div className="pl-4 mt-6 italic font-semibold text-blue-900 border-l-4 border-yellow-400">
              "Pendidikan adalah fondasi utama dalam membangun masa depan bangsa."
            </div>

            <p className="mt-6 font-semibold text-blue-900">
              Kepala Sekolah  
              <br />
              SD Negeri 43 Kota Bengkulu
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
