import { useState, useEffect } from "react";
import axios from "axios";
import { 
  HiSave, HiPlus, HiTrash, HiChartBar, 
  HiUserGroup, HiAcademicCap, HiRefresh, HiCheckCircle 
} from "react-icons/hi";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("stats");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [stats, setStats] = useState({});
  const [rombels, setRombels] = useState([]);
  const [gurus, setGurus] = useState([]);

  const [newRombel, setNewRombel] = useState({ nama: "", laki: 0, perempuan: 0, wali: "", kurikulum: "Merdeka" });
  const [newGuru, setNewGuru] = useState({ nama: "", jabatan: "", status: "PNS", kategori: "Pendidik" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [s, r, g] = await Promise.all([
        axios.get(`${API_BASE}/stats`),
        axios.get(`${API_BASE}/rombel`),
        axios.get(`${API_BASE}/guru`)
      ]);
      setStats(s.data);
      setRombels(r.data);
      setGurus(g.data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  };

  const showToast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleUpdateStats = async () => {
    setLoading(true);
    try {
      await axios.put(`${API_BASE}/stats`, stats);
      showToast("✅ Statistik berhasil diperbarui!");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRombel = async () => {
    try {
      const total = parseInt(newRombel.laki) + parseInt(newRombel.perempuan);
      await axios.post(`${API_BASE}/rombel`, { ...newRombel, total });
      setNewRombel({ nama: "", laki: 0, perempuan: 0, wali: "", kurikulum: "Merdeka" });
      fetchData();
      showToast("✅ Rombel berhasil ditambah!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddGuru = async () => {
    try {
      await axios.post(`${API_BASE}/guru`, newGuru);
      setNewGuru({ nama: "", jabatan: "", status: "PNS", kategori: "Pendidik" });
      fetchData();
      showToast("✅ Guru/Staff berhasil ditambah!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`${API_BASE}/${type}/${id}`);
        fetchData();
        showToast("🗑️ Data berhasil dihapus!");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-6xl px-4 py-6 mx-auto space-y-6 overflow-x-hidden font-sans md:py-10 md:space-y-8">
      
      {/* HEADER - Responsive Padding */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900 md:text-3xl">Admin Panel</h1>
          <p className="text-sm text-gray-500">SDN 43 Kota Bengkulu</p>
        </div>
        {message && (
          <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-green-700 border border-green-100 bg-green-50 rounded-xl animate-pulse">
            <HiCheckCircle /> {message}
          </div>
        )}
      </div>

      {/* TABS NAVIGATION - Scrollable on mobile */}
      <div className="flex w-full p-1 overflow-x-auto bg-gray-100 rounded-2xl md:w-fit no-scrollbar">
        <TabBtn active={activeTab === "stats"} onClick={() => setActiveTab("stats")} icon={<HiChartBar/>} label="Statistik" />
        <TabBtn active={activeTab === "rombel"} onClick={() => setActiveTab("rombel")} icon={<HiUserGroup/>} label="Rombel" />
        <TabBtn active={activeTab === "guru"} onClick={() => setActiveTab("guru")} icon={<HiAcademicCap/>} label="Guru" />
      </div>

      {/* --- CONTENT: STATS --- */}
      {activeTab === "stats" && (
        <div className="duration-500 animate-in fade-in slide-in-from-bottom-4">
          <Section title="Statistik Global" icon={<HiChartBar className="text-blue-600"/>}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Input label="Total Siswa" val={stats.totalSiswa} change={(v) => setStats({...stats, totalSiswa: v})} />
              <Input label="Tenaga Pendidik" val={stats.tenagaPendidik} change={(v) => setStats({...stats, tenagaPendidik: v})} />
              <Input label="Jml Rombel" val={stats.rombelCount} change={(v) => setStats({...stats, rombelCount: v})} />
              <Input label="Akreditasi" val={stats.akreditasi} change={(v) => setStats({...stats, akreditasi: v})} />
              <Input label="Siswa Laki" val={stats.siswaLaki} change={(v) => setStats({...stats, siswaLaki: v})} />
              <Input label="Siswa Perempuan" val={stats.siswaPerempuan} change={(v) => setStats({...stats, siswaPerempuan: v})} />
            </div>
            <button 
              onClick={handleUpdateStats} 
              disabled={loading} 
              className="flex items-center justify-center w-full gap-2 px-8 py-4 mt-6 font-bold text-white transition-all bg-blue-600 shadow-lg md:w-fit rounded-xl hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? <HiRefresh className="animate-spin"/> : <HiSave/>} Simpan Perubahan
            </button>
          </Section>
        </div>
      )}

      {/* --- CONTENT: ROMBEL --- */}
      {activeTab === "rombel" && (
        <div className="grid gap-6 lg:grid-cols-3 animate-in fade-in">
          <div className="lg:col-span-1">
            <Section title="Tambah Rombel" icon={<HiPlus className="text-green-600"/>}>
              <div className="space-y-4">
                <Input label="Nama Kelas" val={newRombel.nama} change={(v) => setNewRombel({...newRombel, nama: v})} />
                <div className="grid grid-cols-2 gap-3">
                  <Input label="Laki-laki" val={newRombel.laki} type="number" change={(v) => setNewRombel({...newRombel, laki: v})} />
                  <Input label="Perempuan" val={newRombel.perempuan} type="number" change={(v) => setNewRombel({...newRombel, perempuan: v})} />
                </div>
                <Input label="Wali Kelas" val={newRombel.wali} change={(v) => setNewRombel({...newRombel, wali: v})} />
                <button onClick={handleAddRombel} className="w-full py-4 font-bold text-white transition-all bg-green-600 shadow-lg rounded-xl hover:bg-green-700 active:scale-95">Tambah Kelas</button>
              </div>
            </Section>
          </div>
          <div className="lg:col-span-2">
            <Section title="Daftar Rombel">
              <div className="-mx-6 overflow-x-auto md:mx-0">
                <div className="inline-block min-w-full px-6 align-middle md:px-0">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr className="text-[10px] tracking-widest text-gray-400 uppercase border-b">
                        <th className="pb-4 font-black">Kelas</th>
                        <th className="pb-4 font-black">Wali Kelas</th>
                        <th className="pb-4 font-black text-center">Siswa</th>
                        <th className="px-2 pb-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {rombels.map(r => (
                        <tr key={r._id} className="group hover:bg-gray-50">
                          <td className="py-4 text-sm font-bold text-gray-800 md:text-base">{r.nama}</td>
                          <td className="py-4 text-xs text-gray-600 md:text-sm">{r.wali}</td>
                          <td className="py-4 text-sm font-black text-center">{r.total}</td>
                          <td className="py-4 text-right">
                            <button onClick={() => handleDelete('rombel', r._id)} className="p-2 text-red-400 transition-colors hover:text-red-600"><HiTrash size={18}/></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Section>
          </div>
        </div>
      )}

      {/* --- CONTENT: GURU --- */}
      {activeTab === "guru" && (
        <div className="grid gap-6 lg:grid-cols-3 animate-in fade-in">
          <div className="lg:col-span-1">
            <Section title="Input Guru" icon={<HiPlus className="text-indigo-600"/>}>
              <div className="space-y-4">
                <Input label="Nama Lengkap" val={newGuru.nama} change={(v) => setNewGuru({...newGuru, nama: v})} />
                <Input label="Jabatan" val={newGuru.jabatan} change={(v) => setNewGuru({...newGuru, jabatan: v})} />
                <div className="grid grid-cols-2 gap-3">
                  <Select label="Kategori" val={newGuru.kategori} change={(v) => setNewGuru({...newGuru, kategori: v})} options={["Pendidik", "Kependidikan"]} />
                  <Select label="Status" val={newGuru.status} change={(v) => setNewGuru({...newGuru, status: v})} options={["PNS", "PPPK", "Honor"]} />
                </div>
                <button onClick={handleAddGuru} className="w-full py-4 font-bold text-white transition-all bg-indigo-600 shadow-lg rounded-xl hover:bg-indigo-700 active:scale-95">Simpan Data</button>
              </div>
            </Section>
          </div>
          <div className="lg:col-span-2">
            <Section title="Daftar Guru & Staff">
               <div className="grid gap-3 sm:grid-cols-2">
                  {gurus.map(g => (
                    <div key={g._id} className="flex items-center justify-between p-4 bg-white border border-gray-100 shadow-sm rounded-2xl group">
                      <div className="flex items-center gap-3">
                        <div className="items-center justify-center hidden w-10 h-10 font-bold text-blue-600 rounded-full sm:flex bg-blue-50">{g.nama.charAt(0)}</div>
                        <div>
                          <p className="text-sm font-bold leading-tight text-gray-800">{g.nama}</p>
                          <p className="text-[10px] font-black text-gray-400 uppercase">{g.jabatan}</p>
                        </div>
                      </div>
                      <button onClick={() => handleDelete('guru', g._id)} className="p-2 text-gray-300 hover:text-red-500"><HiTrash size={18}/></button>
                    </div>
                  ))}
               </div>
            </Section>
          </div>
        </div>
      )}
    </div>
  );
}

/* REUSABLE UI COMPONENTS */
function Section({ title, children, icon }) {
  return (
    <div className="bg-white p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm space-y-5">
      <div className="flex items-center gap-2 pb-4 text-base font-black text-gray-800 border-b md:text-lg">
        {icon} <h2>{title}</h2>
      </div>
      <div className="pt-2">{children}</div>
    </div>
  );
}

function Input({ label, val, change, type = "text" }) {
  return (
    <div className="space-y-1.5 w-full">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <input 
        type={type} 
        value={val || ""} 
        onChange={(e) => change(e.target.value)}
        className="w-full p-3.5 text-sm font-semibold text-gray-700 transition-all border-2 border-transparent outline-none bg-gray-50 rounded-xl focus:bg-white focus:border-blue-500"
        placeholder={`Isi ${label}...`}
      />
    </div>
  );
}

function Select({ label, val, change, options }) {
  return (
    <div className="space-y-1.5 w-full">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <select 
        value={val} 
        onChange={(e) => change(e.target.value)}
        className="w-full p-3.5 text-sm font-semibold text-gray-700 border-none outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none"
      >
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function TabBtn({ active, onClick, icon, label }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${active ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
    >
      {icon} {label}
    </button>
  );
}