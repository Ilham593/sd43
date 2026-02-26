import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminStats() {
  const [stats, setStats] = useState([]);
  const [form, setForm] = useState({ label: "", value: "" });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "http://localhost:5000"
  ).replace(/\/$/, "");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/stats`);
      if (res.data.success) setStats(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Gagal fetch data stats. Pastikan server berjalan.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = window.prompt("Masukkan password admin untuk aksi ini:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah! Aksi dibatalkan.");
      return;
    }

    try {
      if (editId) {
        await axios.put(`${API_BASE}/api/stats/${editId}`, form);
      } else {
        await axios.post(`${API_BASE}/api/stats`, form);
      }
      setForm({ label: "", value: "" });
      setEditId(null);
      fetchStats();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data stats.");
    }
  };

  const handleEdit = (item) => {
    setForm({ label: item.label, value: item.value });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    const input = window.prompt("Masukkan password admin untuk menghapus:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah! Hapus dibatalkan.");
      return;
    }

    if (!window.confirm("Yakin hapus stats ini?")) return;

    try {
      await axios.delete(`${API_BASE}/api/stats/${id}`);
      setStats(stats.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data stats.");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="mb-6 text-2xl font-bold">Admin Stats</h2>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mb-6 md:flex-row md:items-center"
      >
        <input
          type="text"
          placeholder="Label"
          value={form.label}
          onChange={(e) => setForm({ ...form, label: e.target.value })}
          className="flex-1 p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Value"
          value={form.value}
          onChange={(e) =>
            setForm({ ...form, value: Number(e.target.value) })
          }
          className="flex-1 p-2 border rounded"
          required
        />
        <button className="w-full px-4 py-2 text-white bg-blue-600 rounded md:w-auto">
          {editId ? "Update" : "Tambah"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full border min-w-[500px] md:min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Label</th>
              <th className="p-2 border">Value</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="p-2 border">{item.label}</td>
                <td className="p-2 border">{item.value}</td>
                <td className="flex flex-wrap gap-2 p-2 border">
                  <button
                    onClick={() => handleEdit(item)}
                    className="w-full px-2 py-1 bg-yellow-400 rounded md:w-auto"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="w-full px-2 py-1 text-white bg-red-500 rounded md:w-auto"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}