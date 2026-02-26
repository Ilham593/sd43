import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPPDB() {
  const [ppdbList, setPpdbList] = useState([]);
  const [form, setForm] = useState({
    tahunAjaran: "",
    tanggalPendaftaran: "",
    kuota: "",
    syarat: [""],
    alur: [""],
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "sdn43bkl123";

  const API_BASE = (
    import.meta.env.VITE_API_URL ??
    "https://sd-web-api.vercel.app"
  ).replace(/\/$/, "");

  useEffect(() => {
    fetchPpdb();
  }, []);

  const fetchPpdb = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/ppdb`);
      if (res.data.success) setPpdbList(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Gagal fetch data PPDB. Pastikan server berjalan.");
    }
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (type, index, value) => {
    const updated = [...form[type]];
    updated[index] = value;
    setForm({ ...form, [type]: updated });
  };

  const addArrayField = (type) => {
    setForm({ ...form, [type]: [...form[type], ""] });
  };

  const removeArrayField = (type, index) => {
    const updated = [...form[type]];
    updated.splice(index, 1);
    setForm({ ...form, [type]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = window.prompt("Masukkan password admin untuk aksi ini:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah! Aksi dibatalkan.");
      return;
    }

    try {
      const payload = { ...form, kuota: Number(form.kuota) };

      if (editId) {
        await axios.put(`${API_BASE}/api/ppdb/${editId}`, payload);
      } else {
        await axios.post(`${API_BASE}/api/ppdb`, payload);
      }

      setForm({
        tahunAjaran: "",
        tanggalPendaftaran: "",
        kuota: "",
        syarat: [""],
        alur: [""],
      });
      setEditId(null);
      fetchPpdb();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data PPDB.");
    }
  };

  const handleEdit = (item) => {
    setForm({
      tahunAjaran: item.tahunAjaran,
      tanggalPendaftaran: item.tanggalPendaftaran,
      kuota: item.kuota,
      syarat: item.syarat.length ? item.syarat : [""],
      alur: item.alur.length ? item.alur : [""],
    });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    const input = window.prompt("Masukkan password admin untuk menghapus:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah! Hapus dibatalkan.");
      return;
    }

    if (!window.confirm("Yakin hapus PPDB ini?")) return;

    try {
      await axios.delete(`${API_BASE}/api/ppdb/${id}`);
      setPpdbList(ppdbList.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data PPDB.");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="mb-6 text-2xl font-bold">Admin PPDB</h2>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            name="tahunAjaran"
            placeholder="Tahun Ajaran"
            value={form.tahunAjaran}
            onChange={handleFormChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="tanggalPendaftaran"
            placeholder="Tanggal Pendaftaran"
            value={form.tanggalPendaftaran}
            onChange={handleFormChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="number"
            name="kuota"
            placeholder="Kuota"
            value={form.kuota}
            onChange={handleFormChange}
            className="flex-1 p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-blue-900">Syarat</h3>
          {form.syarat.map((s, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={s}
                onChange={(e) =>
                  handleArrayChange("syarat", i, e.target.value)
                }
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayField("syarat", i)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                Hapus
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("syarat")}
            className="px-4 py-2 text-white bg-blue-600 rounded"
          >
            Tambah Syarat
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-blue-900">Alur</h3>
          {form.alur.map((a, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={a}
                onChange={(e) =>
                  handleArrayChange("alur", i, e.target.value)
                }
                className="flex-1 p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayField("alur", i)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                Hapus
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("alur")}
            className="px-4 py-2 text-white bg-blue-600 rounded"
          >
            Tambah Alur
          </button>
        </div>

        <button className="px-6 py-2 text-white bg-green-600 rounded">
          {editId ? "Update PPDB" : "Tambah PPDB"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full border min-w-[600px] md:min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Tahun Ajaran</th>
              <th className="p-2 border">Tanggal</th>
              <th className="p-2 border">Kuota</th>
              <th className="p-2 border">Syarat</th>
              <th className="p-2 border">Alur</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {ppdbList.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="p-2 border">{item.tahunAjaran}</td>
                <td className="p-2 border">{item.tanggalPendaftaran}</td>
                <td className="p-2 border">{item.kuota}</td>
                <td className="p-2 border">
                  <ul className="pl-5 space-y-1 list-disc">
                    {item.syarat.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-2 border">
                  <ol className="pl-5 space-y-1 list-decimal">
                    {item.alur.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ol>
                </td>
                <td className="flex flex-col gap-2 p-2 border">
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