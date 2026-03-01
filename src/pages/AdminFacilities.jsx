import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminFacilities() {
  const [facilities, setFacilities] = useState([]);
  const [form, setForm] = useState({ title: "", desc: "", file: null });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "https://sd-web-api.vercel.app"
  ).replace(/\/$/, "");

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${API_BASE}/api/facilities`);

      if (res.data.success) {
        setFacilities(res.data.data);
      }
    } catch (err) {
      console.error(err);
      setError("Gagal fetch data fasilitas.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = window.prompt("Masukkan password admin:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah!");
      return;
    }

    if (!form.title || (!form.file && !editId)) {
      alert("Judul dan gambar wajib diisi!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("desc", form.desc);

      if (form.file) {
        formData.append("image", form.file);
      }

      if (editId) {
        await axios.put(`${API_BASE}/api/facilities/${editId}`, formData);
      } else {
        await axios.post(`${API_BASE}/api/facilities`, formData);
      }

      setForm({ title: "", desc: "", file: null });
      setEditId(null);
      fetchFacilities();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    }
  };

  const handleDelete = async (id) => {
    const input = window.prompt("Masukkan password admin:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah!");
      return;
    }

    try {
      await axios.delete(`${API_BASE}/api/facilities/${id}`);
      fetchFacilities();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus.");
    }
  };

  return (
    <div className="p-6 md:p-10">
      <h2 className="mb-6 text-2xl font-bold">Admin Fasilitas</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <input
          type="text"
          placeholder="Judul"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setForm({ ...form, file: e.target.files[0] })
          }
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Deskripsi"
          value={form.desc}
          onChange={(e) =>
            setForm({ ...form, desc: e.target.value })
          }
          className="w-full p-2 border rounded"
        />

        <button className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          {editId ? "Update" : "Tambah"}
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="grid gap-6 md:grid-cols-3">
        {facilities.map((item) => (
          <div key={item._id} className="p-4 border rounded shadow">
            
            {/* 🔥 FIX DI SINI */}
            <img
              src={`${API_BASE}/api/facilities/${item._id}/image`}
              alt={item.title}
              className="object-cover w-full h-48 rounded"
            />

            <h3 className="mt-3 font-semibold">{item.title}</h3>

            <p className="text-sm text-gray-600">{item.desc}</p>

            <button
              onClick={() => handleDelete(item._id)}
              className="px-4 py-1 mt-3 text-white bg-red-500 rounded"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}