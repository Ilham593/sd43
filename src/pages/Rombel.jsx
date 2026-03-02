import { useState, useEffect } from "react";
import axios from "axios";
import { HiUserCircle, HiIdentification, HiChip, HiUserGroup } from "react-icons/hi";
import { FaMars, FaVenus } from "react-icons/fa";

// Mengambil URL API dari Environment Variable Vercel
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Rombel() {
  const [rombels, setRombels] = useState([]);

  useEffect(() => {
    // Menggunakan template literal untuk menggabungkan API_URL dan endpoint
    axios.get(`${API_URL}/rombel`)
      .then((res) => setRombels(res.data))
      .catch((err) => console.error("Gagal memuat data rombel:", err));
  }, []);

  return (
    <div className="pb-20 space-y-12">
      {/* HEADER SECTION */}
      <section className="p-10 bg-white border rounded-[40px] shadow-2xl">
        <h1 className="text-4xl font-black">
          Struktur <span className="text-blue-600">Rombel</span>
        </h1>
        <p className="mt-2 text-gray-500">
          Mengelola {rombels.length} Rombongan Belajar.
        </p>
      </section>

      {/* GRID CARDS SECTION */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {rombels.map((r) => (
          <div 
            key={r._id} 
            className="bg-white border rounded-[32px] overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300"
          >
            {/* ACCENT LINE */}
            <div className="h-2 bg-blue-600"></div>
            
            <div className="p-8 space-y-4">
              <h2 className="text-2xl font-black">{r.nama}</h2>
              
              {/* STATS BADGE */}
              <div className="flex gap-4 p-4 text-sm font-bold bg-gray-50 rounded-2xl">
                <span className="flex items-center gap-1 text-blue-600">
                  <FaMars /> {r.laki}
                </span>
                <span className="flex items-center gap-1 text-pink-600">
                  <FaVenus /> {r.perempuan}
                </span>
                <span className="ml-auto font-black text-gray-400">
                  {r.total} Siswa
                </span>
              </div>

              {/* WALI KELAS SECTION */}
              <div className="flex items-center gap-3 pt-4 border-t">
                <HiUserCircle size={40} className="text-blue-200" />
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">
                    Wali Kelas
                  </p>
                  <p className="font-bold text-gray-800">{r.wali}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}