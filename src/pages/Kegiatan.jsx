import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GalleryPreview() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "http://localhost:5000"
  ).replace(/\/$/, "");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/gallery`);
        if (res.data.success) setImages(res.data.data);
      } catch (err) {
        console.error("Gagal fetch gallery:", err);
      }
    };

    fetchGallery();
  }, [API_BASE]);

  const goToAdmin = () => {
    const input = window.prompt("Masukkan password admin untuk masuk:");
    if (input === ADMIN_PASSWORD) {
      navigate("/admin/gallery");
    } else {
      alert("Password salah! Akses dibatalkan.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl px-4 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Galeri Kegiatan
          </h2>
          <p className="mt-4 text-gray-600">
            Dokumentasi kegiatan dan aktivitas siswa di SD Negeri 43 Kota Bengkulu
          </p>

          <button
            onClick={goToAdmin}
            className="px-6 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Masuk Admin Edit
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden shadow-lg rounded-xl group"
            >
              <img
                src={`${API_BASE}${item.src}`}
                alt={item.title}
                className="object-cover w-full h-64"
              />

              <div className="absolute inset-0 flex items-center justify-center transition opacity-0 bg-blue-900/70 group-hover:opacity-100">
                <p className="px-4 font-semibold text-center text-white">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}