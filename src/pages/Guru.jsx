import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Guru() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "http://localhost:5000"
  ).replace(/\/$/, "");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/guru`);
        const result = await res.json();

        if (!result.success) {
          throw new Error("Gagal mengambil data guru");
        }

        setTeachers(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [API_BASE]);

  const goToAdmin = () => {
    const input = window.prompt("Masukkan password admin untuk masuk:");
    if (input === ADMIN_PASSWORD) {
      navigate("/admin/guru");
    } else {
      alert("Password salah! Akses dibatalkan.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Memuat data guru...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">Guru & Tenaga Pendidik</h1>
        <p className="mt-4 text-gray-200">
          SD Negeri 43 Kota Bengkulu
        </p>
        <button
          onClick={goToAdmin}
          className="px-6 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Masuk Admin Edit
        </button>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto">
        <section>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <motion.div
                key={teacher._id}
                whileHover={{ y: -6 }}
                className="p-6 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {teacher.nama}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {teacher.mapel}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  {teacher.noHp ? `No HP: ${teacher.noHp}` : "No HP: -"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {teacher.alamat ? teacher.alamat : ""}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}