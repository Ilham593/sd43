import prestasi from "../data/prestasi";
import { motion } from "framer-motion";

export default function PrestasiSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            Prestasi Sekolah
          </h2>
          <p className="mt-4 text-gray-600">
            Bukti komitmen SD Negeri 43 Kota Bengkulu dalam mencetak generasi berprestasi
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {prestasi.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="overflow-hidden transition bg-white shadow-md rounded-2xl hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-52"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500">
                  {item.year}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-blue-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}