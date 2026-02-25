import { motion } from "framer-motion";
import { School, Target, BookOpen, Users, MapPin } from "lucide-react";

export default function Profil() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Profil Sekolah</h1>
        <p className="mt-4 text-gray-200">
          Informasi resmi SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto space-y-20">

        {/* Sejarah */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-blue-900">
            Sejarah Singkat
          </h2>
          <p className="leading-relaxed text-gray-700">
            SD Negeri 43 Kota Bengkulu berdiri pada tanggal 30 Juni 1982
            dan berada di Kecamatan Ratu Agung, Kota Bengkulu. 
            Sekolah ini berstatus Negeri dengan kepemilikan Pemerintah Pusat,
            serta berkomitmen memberikan pendidikan dasar yang berkualitas,
            berkarakter, dan berorientasi pada pengembangan potensi siswa.
          </p>
        </motion.section>

        {/* Visi & Misi */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 text-3xl font-bold text-blue-900">
            Visi & Misi
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center gap-3 mb-4 text-yellow-500">
                <Target size={28} />
                <h3 className="text-xl font-semibold text-blue-900">Visi</h3>
              </div>
              <p className="text-gray-700">
                Mewujudkan peserta didik yang cerdas, berkarakter,
                berakhlak mulia, dan berprestasi.
              </p>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center gap-3 mb-4 text-yellow-500">
                <BookOpen size={28} />
                <h3 className="text-xl font-semibold text-blue-900">Misi</h3>
              </div>
              <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                <li>Meningkatkan kualitas pembelajaran.</li>
                <li>Menanamkan nilai karakter dan kedisiplinan.</li>
                <li>Mengembangkan potensi akademik dan non-akademik.</li>
                <li>Menciptakan lingkungan belajar yang aman dan nyaman.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Data Sekolah */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 text-3xl font-bold text-blue-900">
            Data Pokok Sekolah
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <School className="mb-3 text-yellow-500" size={28} />
              <p className="font-semibold text-blue-900">Status</p>
              <p className="text-sm text-gray-600">Sekolah Negeri</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <Users className="mb-3 text-yellow-500" size={28} />
              <p className="font-semibold text-blue-900">Jumlah Siswa</p>
              <p className="text-sm text-gray-600">156 Siswa</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <School className="mb-3 text-yellow-500" size={28} />
              <p className="font-semibold text-blue-900">Jumlah PTK</p>
              <p className="text-sm text-gray-600">15 Guru & Tenaga Kependidikan</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <School className="mb-3 text-yellow-500" size={28} />
              <p className="font-semibold text-blue-900">NPSN</p>
              <p className="text-sm text-gray-600">10703114</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <MapPin className="mb-3 text-yellow-500" size={28} />
              <p className="font-semibold text-blue-900">Lokasi</p>
              <p className="text-sm text-gray-600">
                Kec. Ratu Agung, Kota Bengkulu
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <School className="mb-3 text-yellow-500" size={28} />
              <p className="font-semibold text-blue-900">Tahun Berdiri</p>
              <p className="text-sm text-gray-600">1982</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}