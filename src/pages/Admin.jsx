import { useState, useEffect } from "react";
import axios from "axios";
import { 
  HiSave, HiPlus, HiTrash, HiChartBar, 
  HiUserGroup, HiAcademicCap, HiRefresh, HiCheckCircle 
} from "react-icons/hi";

// Pastikan VITE_API_URL sudah diset di Vercel atau .env
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("stats");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // States untuk Data dari MongoDB
  const [stats, setStats] = useState({});
  const [rombels, setRombels] = useState([]);
  const [gurus, setGurus] = useState([]);

  // States untuk Form Input Baru (Reset State)
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

  // --- CRUD HANDLERS ---

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
    <div className="max-w-6xl px-4 py-10 mx-auto space-y-8 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900">SDN 43 Admin Panel</h1>
          <p className="text-gray-500">Kelola konten website secara real-time</p>
        </div>
        {message && (
          <div className="flex items-center gap-2 px-6 py-3 font-bold text-green-700 border border-green-100 bg-green-50 rounded-2xl animate-pulse">
            <HiCheckCircle /> {message}
          </div>
        )}
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex p-1 bg-gray-100 rounded-2xl w-fit">
        <TabBtn active={activeTab === "stats"} onClick={() => setActiveTab("stats")} icon={<HiChartBar/>} label="Statistik" />
        <TabBtn active={activeTab === "rombel"} onClick={() => setActiveTab("rombel")} icon={<HiUserGroup/>} label="Rombel" />
        <TabBtn active={activeTab === "guru"} onClick={() => setActiveTab("guru")} icon={<HiAcademicCap/>} label="Guru & Staff" />
      </div>

      {/* --- CONTENT: STATS --- */}
      {activeTab === "stats" && (
        <div className="grid gap-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
          <Section title="Update Statistik Global (Home & Profil)" icon={<HiChartBar className="text-blue-600"/>}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Input label="Total Siswa" val={stats.totalSiswa} change={(v) => setStats({...stats, totalSiswa: v})} />
              <Input label="Tenaga Pendidik" val={stats.tenagaPendidik} change={(v) => setStats({...stats, tenagaPendidik: v})} />
              <Input label="Jml Rombel" val={stats.rombelCount} change={(v) => setStats({...stats, rombelCount: v})} />
              <Input label="Akreditasi" val={stats.akreditasi} change={(v) => setStats({...stats, akreditasi: v})} />
              <Input label="Siswa Laki" val={stats.siswaLaki} change={(v) => setStats({...stats, siswaLaki: v})} />
              <Input label="Siswa Perempuan" val={stats.siswaPerempuan} change={(v) => setStats({...stats, siswaPerempuan: v})} />
              <Input label="Ekon. Rendah" val={stats.ekonomiRendah} change={(v) => setStats({...stats, ekonomiRendah: v})} />
              <Input label="Ekon. Menengah" val={stats.ekonomiMenengah} change={(v) => setStats({...stats, ekonomiMenengah: v})} />
              <Input label="Ekon. Atas" val={stats.ekonomiAtas} change={(v) => setStats({...stats, ekonomiAtas: v})} />
            </div>
            <button 
              onClick={handleUpdateStats} 
              disabled={loading} 
              className="flex items-center gap-2 px-8 py-3 mt-6 font-bold text-white transition-all bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? <HiRefresh className="animate-spin"/> : <HiSave/>} Simpan Perubahan Angka
            </button>
          </Section>
        </div>
      )}

      {/* --- CONTENT: ROMBEL --- */}
      {activeTab === "rombel" && (
        <div className="grid gap-8 duration-500 md:grid-cols-3 animate-in fade-in">
          <div className="md:col-span-1">
            <Section title="Tambah Rombel" icon={<HiPlus className="text-green-600"/>}>
              <div className="space-y-4">
                <Input label="Nama Kelas" val={newRombel.nama} change={(v) => setNewRombel({...newRombel, nama: v})} />
                <div className="grid grid-cols-2 gap-2">
                  <Input label="Laki-laki" val={newRombel.laki} type="number" change={(v) => setNewRombel({...newRombel, laki: v})} />
                  <Input label="Perempuan" val={newRombel.perempuan} type="number" change={(v) => setNewRombel({...newRombel, perempuan: v})} />
                </div>
                <Input label="Wali Kelas" val={newRombel.wali} change={(v) => setNewRombel({...newRombel, wali: v})} />
                <button onClick={handleAddRombel} className="w-full py-3 font-bold text-white transition-all bg-green-600 shadow-lg rounded-xl hover:bg-green-700">Tambah Kelas</button>
              </div>
            </Section>
          </div>
          <div className="md:col-span-2">
            <Section title="Daftar Rombongan Belajar">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs tracking-widest text-gray-400 uppercase border-b">
                      <th className="pb-4 font-black">Kelas</th>
                      <th className="pb-4 font-black">Wali</th>
                      <th className="pb-4 font-black text-center">Total</th>
                      <th className="pb-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {rombels.map(r => (
                      <tr key={r._id} className="transition-colors group hover:bg-gray-50">
                        <td className="py-4 font-bold text-gray-800">{r.nama}</td>
                        <td className="py-4 text-gray-600">{r.wali}</td>
                        <td className="py-4 font-black text-center">{r.total}</td>
                        <td className="py-4 text-right">
                          <button onClick={() => handleDelete('rombel', r._id)} className="p-2 text-red-400 rounded-lg hover:text-red-600 hover:bg-red-50"><HiTrash size={20}/></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          </div>
        </div>
      )}

      {/* --- CONTENT: GURU --- */}
      {activeTab === "guru" && (
        <div className="grid gap-8 duration-500 md:grid-cols-3 animate-in fade-in">
          <div className="md:col-span-1">
            <Section title="Tambah Guru/Staff" icon={<HiPlus className="text-indigo-600"/>}>
              <div className="space-y-4">
                <Input label="Nama Lengkap" val={newGuru.nama} change={(v) => setNewGuru({...newGuru, nama: v})} />
                <Input label="Jabatan" val={newGuru.jabatan} change={(v) => setNewGuru({...newGuru, jabatan: v})} />
                <div className="space-y-1">
                   <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Kategori</label>
                   <select className="w-full p-3 font-semibold text-gray-700 transition-all border-none outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500" value={newGuru.kategori} onChange={e => setNewGuru({...newGuru, kategori: e.target.value})}>
                      <option value="Pendidik">Tenaga Pendidik</option>
                      <option value="Kependidikan">Tenaga Kependidikan</option>
                   </select>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Status</label>
                   <select className="w-full p-3 font-semibold text-gray-700 transition-all border-none outline-none bg-gray-50 rounded-xl focus:ring-2 focus:ring-indigo-500" value={newGuru.status} onChange={e => setNewGuru({...newGuru, status: e.target.value})}>
                      <option value="PNS">PNS</option>
                      <option value="PPPK">PPPK</option>
                      <option value="Honor">Honor</option>
                   </select>
                </div>
                <button onClick={handleAddGuru} className="w-full py-3 font-bold text-white transition-all bg-indigo-600 shadow-lg rounded-xl hover:bg-indigo-700">Simpan Guru</button>
              </div>
            </Section>
          </div>
          <div className="md:col-span-2">
            <Section title="Daftar Tenaga Pendidik & Kependidikan">
               <div className="grid gap-4 sm:grid-cols-2">
                  {gurus.map(g => (
                    <div key={g._id} className="flex items-center justify-between p-4 transition-all border border-gray-100 bg-gray-50 rounded-2xl group hover:shadow-md">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 font-bold text-blue-600 bg-white border border-gray-100 rounded-full shadow-sm">{g.nama.charAt(0)}</div>
                        <div>
                          <p className="font-bold leading-tight text-gray-800">{g.nama}</p>
                          <p className="text-[10px] font-black tracking-tighter text-gray-400 uppercase">{g.jabatan} • {g.status}</p>
                        </div>
                      </div>
                      <button onClick={() => handleDelete('guru', g._id)} className="p-2 text-gray-300 transition-colors hover:text-red-500"><HiTrash size={18}/></button>
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

/* HELPER COMPONENTS */
function Section({ title, children, icon }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-50/50 space-y-6 h-full">
      <div className="flex items-center gap-2 text-lg font-black text-gray-800">
        {icon} <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Input({ label, val, change, type = "text" }) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">{label}</label>
      <input 
        type={type} 
        value={val || ""} 
        onChange={(e) => change(e.target.value)}
        className="w-full p-3 font-semibold text-gray-700 transition-all border-2 border-transparent outline-none bg-gray-50 rounded-xl focus:bg-white focus:border-blue-500"
        placeholder={`Isi ${label}...`}
      />
    </div>
  );
}

function TabBtn({ active, onClick, icon, label }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${active ? 'bg-white text-blue-600 shadow-lg ring-1 ring-gray-100' : 'text-gray-500 hover:text-gray-700'}`}
    >
      {icon} {label}
    </button>
  );
}