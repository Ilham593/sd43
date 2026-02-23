import { motion } from "framer-motion";
import { School, Target, BookOpen, Users } from "lucide-react";

export default function Profil() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Profil Sekolah</h1>
        <p className="mt-4 text-gray-200">
          Informasi lengkap mengenai SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* Sejarah */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Sejarah Singkat
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SD Negeri 43 Kota Bengkulu merupakan salah satu sekolah dasar negeri
            yang berlokasi di Kecamatan Singaran Pati. Sejak berdiri, sekolah
            ini telah berkomitmen memberikan layanan pendidikan yang
            berkualitas, membangun karakter siswa, serta menciptakan lingkungan
            belajar yang aman dan nyaman.
          </p>
        </motion.section>

        {/* Visi & Misi */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Visi & Misi
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4 text-yellow-500">
                <Target size={28} />
                <h3 className="text-xl font-semibold text-blue-900">Visi</h3>
              </div>
              <p className="text-gray-700">
                Mewujudkan peserta didik yang cerdas, berkarakter, berakhlak
                mulia, dan berprestasi.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4 text-yellow-500">
                <BookOpen size={28} />
                <h3 className="text-xl font-semibold text-blue-900">Misi</h3>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Meningkatkan kualitas pembelajaran.</li>
                <li>Menanamkan nilai karakter dan kedisiplinan.</li>
                <li>Mengembangkan potensi akademik dan non-akademik.</li>
                <li>Menciptakan lingkungan belajar yang aman dan nyaman.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Tujuan */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Tujuan Sekolah
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Meningkatkan mutu pendidikan melalui pembelajaran yang inovatif,
            membentuk karakter siswa yang disiplin dan bertanggung jawab, serta
            menciptakan lulusan yang siap melanjutkan pendidikan ke jenjang
            berikutnya.
          </p>
        </motion.section>

        {/* Data Sekolah */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            Data Pokok Sekolah
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">
              <School className="text-yellow-500 mb-3" size={28} />
              <p className="font-semibold text-blue-900">Status</p>
              <p className="text-gray-600 text-sm">Sekolah Negeri</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <Users className="text-yellow-500 mb-3" size={28} />
              <p className="font-semibold text-blue-900">Jumlah Siswa</p>
              <p className="text-gray-600 text-sm">320+ Siswa</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <School className="text-yellow-500 mb-3" size={28} />
              <p className="font-semibold text-blue-900">Akreditasi</p>
              <p className="text-gray-600 text-sm">A</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <School className="text-yellow-500 mb-3" size={28} />
              <p className="font-semibold text-blue-900">NPSN</p>
              <p className="text-gray-600 text-sm">107025XX</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <School className="text-yellow-500 mb-3" size={28} />
              <p className="font-semibold text-blue-900">Kecamatan</p>
              <p className="text-gray-600 text-sm">Singaran Pati</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
