import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, School, Calendar } from "lucide-react";
import axios from "axios";

export default function Stats() {
  const [stats, setStats] = useState([]);
  const [error, setError] = useState("");

  // Base URL aman (kalau env gak kebaca, tetap jalan)
  const API_BASE =
    import.meta.env.VITE_API_URL ||
    "https://sd-web-api.vercel.app";

  // Mapping icon berdasarkan label
  const iconMap = {
    "Jumlah Siswa": <Users size={40} />,
    "Guru & Tenaga Kependidikan": <GraduationCap size={40} />,
    "Rombongan Belajar": <School size={40} />,
    "Tahun Berdiri": <Calendar size={40} />,
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/stats`);

        if (res.data.success) {
          setStats(res.data.data);
        }
      } catch (err) {
        console.error("Gagal fetch stats:", err);
        setError("Data tidak dapat dimuat.");
      }
    };

    fetchStats();
  }, [API_BASE]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Data Sekolah
          </h2>

          <p className="mt-4 text-gray-600">
            Informasi resmi SD Negeri 43 Kota Bengkulu
          </p>
        </motion.div>

        {error && (
          <p className="mb-6 text-center text-red-500">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.05 }}
              className="p-8 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
                {iconMap[item.label] || <Users size={40} />}
              </div>

              <h3 className="text-3xl font-bold text-blue-900">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}