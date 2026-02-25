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
              alt="Kepala Sekolah SD Negeri 43 Kota Bengkulu"
              className="object-cover shadow-xl rounded-2xl w-80"
            />
          </div>

          {/* Teks Sambutan */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
              Sambutan Kepala Sekolah
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Assalamu’alaikum warahmatullahi wabarakatuh.
              Selamat datang di website resmi SD Negeri 43 Kota Bengkulu.
              Website ini kami hadirkan sebagai media informasi dan komunikasi
              antara sekolah dengan orang tua, peserta didik, serta masyarakat.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              SD Negeri 43 Kota Bengkulu yang berdiri sejak tahun 1982
              berkomitmen untuk memberikan layanan pendidikan dasar yang
              berkualitas, berkarakter, serta mendukung pengembangan potensi
              akademik dan non-akademik siswa. Dengan dukungan 15 tenaga
              pendidik dan kependidikan serta 7 rombongan belajar, kami terus
              berupaya menciptakan lingkungan belajar yang aman, nyaman,
              dan inspiratif.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Semoga website ini dapat memberikan informasi yang bermanfaat
              dan menjadi jembatan komunikasi yang baik antara sekolah dan
              masyarakat.
            </p>

            <div className="pl-4 mt-6 italic font-semibold text-blue-900 border-l-4 border-yellow-400">
              Kepala Sekolah  
              <br />
              SD Negeri 43 Kota Bengkulu
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}