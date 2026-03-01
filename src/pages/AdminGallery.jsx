import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminGallery() {
  const [gallery, setGallery] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", file: null });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "https://sd-web-api.vercel.app"
  ).replace(/\/$/, "");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${API_BASE}/api/gallery`);
      if (res.data.success) {
        setGallery(res.data.data);
      }
    } catch (err) {
      console.error(err);
      setError("Gagal fetch data gallery.");
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
      formData.append("description", form.description);

      if (form.file) {
        formData.append("image", form.file);
      }

      if (editId) {
        await axios.put(
          `${API_BASE}/api/gallery/${editId}`,
          formData
        );
      } else {
        await axios.post(
          `${API_BASE}/api/gallery`,
          formData
        );
      }

      setForm({ title: "", description: "", file: null });
      setEditId(null);
      fetchGallery();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    }
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      description: item.description || "",
      file: null,
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    const input = window.prompt("Masukkan password admin:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah!");
      return;
    }

    if (!window.confirm("Yakin hapus gambar ini?")) return;

    try {
      await axios.delete(`${API_BASE}/api/gallery/${id}`);
      fetchGallery();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data.");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="mb-6 text-2xl font-bold">Admin Galeri</h2>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            placeholder="Judul"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="flex-1 p-2 border rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setForm({ ...form, file: e.target.files[0] })
            }
            className="flex-1 p-2 border rounded"
          />
        </div>

        <textarea
          placeholder="Deskripsi (opsional)"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full p-2 border rounded"
        />

        <button className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          {editId ? "Update Gambar" : "Tambah Gambar"}
        </button>
      </form>

      {loading && <p className="mb-4 text-gray-500">Loading...</p>}

      <div className="overflow-x-auto">
        <table className="w-full border min-w-[500px] md:min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Judul</th>
              <th className="p-2 border">Gambar</th>
              <th className="p-2 border">Deskripsi</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {gallery.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="p-2 border">{item.title}</td>

                <td className="p-2 border">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-32 h-20 rounded"
                    />
                  )}
                </td>

                <td className="p-2 border">{item.description}</td>

                <td className="flex flex-col gap-2 p-2 border">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
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