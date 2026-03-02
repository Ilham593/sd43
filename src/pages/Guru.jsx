import { useState, useEffect } from "react";
import axios from "axios";
import { HiUserCircle, HiBadgeCheck, HiStar, HiUserGroup, HiBriefcase } from "react-icons/hi";

// Mengambil URL API dari Environment Variable Vercel
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Guru() {
  // Pastikan inisialisasi awal adalah array kosong []
  const [dataGuru, setDataGuru] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuru = async () => {
      try {
        const res = await axios.get(`${API_URL}/guru`);
        // Proteksi: Jika res.data bukan array, kita paksa jadi array
        const validatedData = Array.isArray(res.data) ? res.data : [];
        setDataGuru(validatedData);
      } catch (err) {
        console.error("Gagal memuat data guru:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGuru();
  }, []);

  // --- LOGIKA FILTER AMAN ---
  // Kita pastikan dataGuru selalu diperlakukan sebagai array dengan fallback []
  const safeData = Array.isArray(dataGuru) ? dataGuru : [];
  
  const kepalaSekolah = safeData.find(g => g.jabatan === "Kepala Sekolah");
  const tenagaPendidik = safeData.filter(g => g.kategori === "Pendidik" && g.jabatan !== "Kepala Sekolah");
  const tenagaKependidikan = safeData.filter(g => g.kategori === "Kependidikan");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pb-20 space-y-20 duration-700 animate-in fade-in">
      
      {/* HEADER SECTION */}
      <section className="max-w-3xl px-4 py-10 mx-auto space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase border border-blue-100">
          <HiUserGroup size={16} /> Profil Pendidik
        </div>
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl">
          Pendidik & Tenaga <br />
          <span className="text-blue-600">Kependidikan</span>
        </h1>
      </section>

      {/* KEPALA SEKOLAH */}
      {kepalaSekolah && (
        <section className="px-4">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 translate-x-32 -translate-y-32 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
              <div className="flex items-center justify-center w-32 h-32 border md:w-40 md:h-40 bg-white/20 backdrop-blur-md rounded-3xl border-white/30">
                <HiUserCircle size={100} className="text-white/80" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-yellow-300 uppercase md:justify-start">
                  <HiStar /> Pimpinan Sekolah
                </div>
                <h2 className="text-3xl font-black sm:text-4xl">{kepalaSekolah.nama}</h2>
                <p className="text-lg font-medium text-blue-100">{kepalaSekolah.jabatan}</p>
                <span className="inline-block px-4 py-1 text-xs font-bold text-blue-700 bg-white rounded-full">
                  Status: {kepalaSekolah.status}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TENAGA PENDIDIK */}
      <section className="px-4 mx-auto space-y-10 max-w-7xl">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
           <div className="p-2 text-blue-600 bg-blue-50 rounded-xl"><HiBadgeCheck size={32} /></div>
           <h2 className="text-2xl font-bold text-gray-900">Tenaga Pendidik</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tenagaPendidik.length > 0 ? (
            tenagaPendidik.map((guru) => <StaffCard key={guru._id} data={guru} />)
          ) : (
            <p className="italic text-gray-400">Belum ada data tenaga pendidik.</p>
          )}
        </div>
      </section>

      {/* TENAGA KEPENDIDIKAN */}
      <section className="px-4 mx-auto space-y-10 max-w-7xl">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
           <div className="p-2 text-indigo-600 bg-indigo-50 rounded-xl"><HiBriefcase size={32} /></div>
           <h2 className="text-2xl font-bold text-gray-900">Tenaga Kependidikan</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tenagaKependidikan.length > 0 ? (
            tenagaKependidikan.map((staff) => <StaffCard key={staff._id} data={staff} isStaff={true} />)
          ) : (
            <p className="italic text-gray-400">Belum ada data tenaga kependidikan.</p>
          )}
        </div>
      </section>
    </div>
  );
}

function StaffCard({ data, isStaff = false }) {
  const statusStyles = {
    PNS: "bg-green-50 text-green-700 border-green-100",
    PPPK: "bg-blue-50 text-blue-700 border-blue-100",
    Honor: "bg-orange-50 text-orange-700 border-orange-100",
  };

  return (
    <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-[32px] hover:shadow-xl hover:-translate-y-2 transition-all group">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold transition-transform group-hover:scale-110 ${isStaff ? 'bg-indigo-50 text-indigo-600' : 'bg-blue-50 text-blue-600'}`}>
          {data.nama ? data.nama.charAt(0) : "?"}
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">{data.nama}</h3>
          <p className="text-xs font-medium text-gray-500 uppercase">{data.jabatan}</p>
        </div>
        <span className={`px-4 py-1 text-[10px] font-black rounded-full border uppercase tracking-widest ${statusStyles[data.status] || "bg-gray-50 text-gray-600"}`}>
          {data.status}
        </span>
      </div>
    </div>
  );
}