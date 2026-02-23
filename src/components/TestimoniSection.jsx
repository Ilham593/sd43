import testimoni from "../data/testimoni";
import { motion } from "framer-motion";

export default function TestimoniSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            Testimoni
          </h2>
          <p className="mt-4 text-gray-600">
            Apa kata orang tua dan alumni tentang SD Negeri 43 Kota Bengkulu
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimoni.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="p-8 transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <p className="italic text-gray-700">
                "{item.komentar}"
              </p>

              <div className="mt-6">
                <p className="font-semibold text-blue-900">
                  {item.nama}
                </p>
                <p className="text-sm text-gray-500">
                  {item.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}