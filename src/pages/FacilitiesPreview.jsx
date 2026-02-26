import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FacilitiesPreview() {
  const [facilities, setFacilities] = useState([]);
  const navigate = useNavigate();
  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "http://localhost:5000"
  ).replace(/\/$/, "");

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/facilities`
      );

      if (res.data.success) {
        setFacilities(res.data.data);
      }
    } catch (err) {
      console.error("Gagal fetch fasilitas:", err);
    }
  };

  const goToAdmin = () => {
    const input = window.prompt(
      "Masukkan password admin untuk masuk ke halaman edit:"
    );

    if (input === ADMIN_PASSWORD) {
      navigate("/admin/facilities");
    } else {
      alert("Password salah!");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Fasilitas Sekolah
          </h2>

          <p className="mt-4 text-gray-600">
            Sarana dan prasarana pendukung kegiatan belajar
          </p>

          <button
            onClick={goToAdmin}
            className="px-6 py-2 mt-6 text-white transition bg-red-600 rounded hover:bg-red-700"
          >
            Masuk Admin Edit
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden transition shadow-lg rounded-xl hover:shadow-xl"
            >
              <img
                src={`${API_BASE}/uploads/facilities/${item.image}`}
                alt={item.title}
                className="object-cover w-full h-64"
              />

              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className="mt-2 text-sm text-gray-600">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}