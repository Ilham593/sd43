import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Kontak() {
  return (
    <div className="bg-gray-50">

      {/* Header */}
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Kontak Kami</h1>
        <p className="mt-4 text-gray-200">
          Informasi resmi SD Negeri 43 Kota Bengkulu
        </p>
      </section>

      <div className="grid max-w-6xl gap-16 px-4 py-20 mx-auto md:grid-cols-2">

        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-blue-900">
            Informasi Kontak
          </h2>

          <div className="space-y-6 text-gray-700">

            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-500" size={24} />
              <p>
                JL. Gunung Bungkuk, Tanah Patah, Dusun Besar,  
                Kec. Ratu Agung, Kota Bengkulu 38224
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-yellow-500" size={24} />
              <p>0736343505</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-yellow-500" size={24} />
              <p>sekolahkami43@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-yellow-500" size={24} />
              <p>Senin - Jumat, 07.00 - 14.00 WIB</p>
            </div>

          </div>

          {/* Google Maps Embed */}
          <div className="mt-10 overflow-hidden shadow-lg rounded-xl">
            <iframe
              title="Lokasi Sekolah"
              src="https://www.google.com/maps?q=JL.%20Gunung%20Bungkuk%20Tanah%20Patah%20Bengkulu&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </div>
  );
}