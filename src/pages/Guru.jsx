import { motion } from "framer-motion";
import defaultPhoto from "../assets/images/test.jpg";

export default function Guru() {

    const teachers = [
  {
    id: 1,
    name: "Sunisti, S.Pd",
    position: "Kepala Sekolah",
    nip: "197002152006042003",
    photo: defaultPhoto,
  },
  {
    id: 2,
    name: "Ansori, S.Pd",
    position: "Guru",
    nip: "198302092005021002",
    photo: defaultPhoto,
  },
  {
    id: 3,
    name: "Herlina, S.Pd",
    position: "Guru",
    nip: "198102102014072002",
    photo: defaultPhoto,
  },
  {
    id: 4,
    name: "Ita Riani, S.Pd",
    position: "Guru",
    nip: "196805281990122001",
    photo: defaultPhoto,
  },
  {
    id: 5,
    name: "Kalaluddin",
    position: "Tenaga Kependidikan",
    nip: "-",
    photo: defaultPhoto,
  },
  {
    id: 6,
    name: "Khairunnisa, S.Pd",
    position: "Guru",
    nip: "199611022023212023",
    photo: defaultPhoto,
  },
  {
    id: 7,
    name: "Kiki Riski Kelana Putra, S.Pd",
    position: "Guru",
    nip: "199604042025211058",
    photo: defaultPhoto,
  },
  {
    id: 8,
    name: "M. Nurkholil, S.Pd.I",
    position: "Guru",
    nip: "198405052023211005",
    photo: defaultPhoto,
  },
  {
    id: 9,
    name: "Mei Tri Hastuti, S.Pd",
    position: "Guru",
    nip: "-",
    photo: defaultPhoto,
  },
  {
    id: 10,
    name: "Nersih, S.Pt",
    position: "Tenaga Kependidikan",
    nip: "-",
    photo: defaultPhoto,
  },
  {
    id: 11,
    name: "Parisa Purnama Sari, S.Pd",
    position: "Guru",
    nip: "-",
    photo: defaultPhoto,
  },
  {
    id: 12,
    name: "Rizki Tri Permatasari, S.Pd",
    position: "Guru",
    nip: "199508252023212033",
    photo: defaultPhoto,
  },
  {
    id: 13,
    name: "Siska Dewi, S.Pd",
    position: "Guru",
    nip: "199108052023212024",
    photo: defaultPhoto,
  },
  {
    id: 14,
    name: "Sukma Nerawati, S.Pd",
    position: "Guru",
    nip: "199410312023212022",
    photo: defaultPhoto,
  },

  ];

  const kepalaSekolah = teachers.find(
    (t) => t.position === "Kepala Sekolah"
  );

  const daftarGuru = teachers.filter(
    (t) => t.position !== "Kepala Sekolah"
  );

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Guru & Tenaga Pendidik</h1>
        <p className="mt-4 text-gray-200">
          SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto space-y-20">

        {/* Kepala Sekolah */}
        {kepalaSekolah && (
          <section>
            <h2 className="mb-10 text-2xl font-bold text-center text-blue-900">
              Kepala Sekolah
            </h2>

            <div className="flex justify-center">
              <motion.div
                whileHover={{ y: -6 }}
                className="p-8 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl w-80"
              >
                <img
                  src={kepalaSekolah.photo}
                  alt={kepalaSekolah.name}
                  className="object-cover w-40 h-40 mx-auto rounded-full shadow-md"
                />

                <h3 className="mt-6 text-xl font-semibold text-blue-900">
                  {kepalaSekolah.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {kepalaSekolah.position}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {kepalaSekolah.nip
                    ? `NIP: ${kepalaSekolah.nip}`
                    : "NIP: -"}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Guru & Tenaga Kependidikan */}
        <section>
          <h2 className="mb-10 text-2xl font-bold text-center text-blue-900">
            Guru & Tenaga Kependidikan
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {daftarGuru.map((teacher) => (
              <motion.div
                key={teacher.id}
                whileHover={{ y: -6 }}
                className="p-6 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="object-cover mx-auto rounded-full shadow-md w-28 h-28"
                />

                <h3 className="mt-5 text-lg font-semibold text-blue-900">
                  {teacher.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {teacher.position}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {teacher.nip
                    ? `NIP: ${teacher.nip}`
                    : "NIP: -"}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}