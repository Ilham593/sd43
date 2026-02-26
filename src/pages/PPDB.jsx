import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PPDB() {
  const [ppdb, setPpdb] = useState(null);
  const navigate = useNavigate();
  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "http://localhost:5000"
  ).replace(/\/$/, "");

  useEffect(() => {
    const fetchPpdb = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/ppdb`);
        if (res.data.success && res.data.data.length > 0) {
          setPpdb(res.data.data[0]);
        }
      } catch (err) {
        console.error("Gagal fetch PPDB:", err);
      }
    };

    fetchPpdb();
  }, [API_BASE]);

  const goToAdmin = () => {
    const input = window.prompt("Masukkan password admin untuk masuk:");
    if (input === ADMIN_PASSWORD) {
      navigate("/admin/ppdb");
    } else {
      alert("Password salah! Akses dibatalkan.");
    }
  };

  if (!ppdb) return <p className="p-8 text-center">Loading...</p>;

  return (
    <div className="bg-gray-50">
      <section className="py-16 text-center text-white bg-blue-900">
        <h1 className="text-4xl font-bold">
          PPDB {ppdb.tahunAjaran}
        </h1>
        <p className="mt-4 text-gray-200">
          Penerimaan Peserta Didik Baru SD Negeri 43 Kota Bengkulu
        </p>
        <button
          onClick={goToAdmin}
          className="px-6 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Masuk Admin Edit
        </button>
      </section>

      <div className="max-w-6xl px-4 py-20 mx-auto space-y-16">
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold text-blue-900">
              Jadwal Pendaftaran
            </h3>
            <p className="mt-4 text-gray-600">
              {ppdb.tanggalPendaftaran}
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold text-blue-900">
              Kuota Siswa
            </h3>
            <p className="mt-4 text-gray-600">
              {ppdb.kuota} Siswa
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-lg font-semibold text-blue-900">
              Lokasi Sekolah
            </h3>
            <p className="mt-4 text-gray-600">
              Kota Bengkulu
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Persyaratan
          </h2>
          <ul className="space-y-3">
            {ppdb.syarat.map((item, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-blue-900">
            Alur Pendaftaran
          </h2>
          <ol className="space-y-3">
            {ppdb.alur.map((step, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="px-8 py-4 font-semibold text-white transition bg-blue-900 rounded-xl hover:bg-blue-800"
          >
            Download Formulir Pendaftaran
          </a>
        </div>
      </div>
    </div>
  );
}