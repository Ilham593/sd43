import { useEffect, useState } from "react";

export default function AdminGuru() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    mapel: "",
    noHp: "",
    alamat: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "sdn43bkl123"; // password untuk semua aksi

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/guru");
      const result = await res.json();
      if (result.success) {
        setTeachers(result.data);
      }
    } catch (err) {
      console.error(err);
      setError("Gagal fetch data guru. Pastikan server berjalan.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password prompt
    const input = window.prompt("Masukkan password admin untuk aksi ini:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah! Aksi dibatalkan.");
      return;
    }

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/guru/${editingId}`
      : "http://localhost:5000/api/guru";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await res.json();
      if (result.success) {
        setForm({ nama: "", mapel: "", noHp: "", alamat: "" });
        setEditingId(null);
        fetchData();
      } else {
        alert("Gagal menyimpan data guru.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan, gagal menyimpan data.");
    }
  };

  const handleEdit = (teacher) => {
    setForm(teacher);
    setEditingId(teacher._id);
  };

  const handleDelete = async (id) => {
    // Password prompt sebelum hapus
    const input = window.prompt("Masukkan password admin untuk menghapus:");
    if (input !== ADMIN_PASSWORD) {
      alert("Password salah! Hapus dibatalkan.");
      return;
    }

    if (!window.confirm("Yakin hapus guru ini?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/guru/${id}`, {
        method: "DELETE"
      });
      const result = await res.json();
      if (result.success) {
        setTeachers(teachers.filter((t) => t._id !== id));
      } else {
        alert("Gagal menghapus data guru.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan, gagal menghapus data.");
    }
  };

  return (
    <div className="max-w-4xl py-16 mx-auto">
      <h1 className="mb-8 text-2xl font-bold">Admin Guru</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="mapel"
          placeholder="Mapel"
          value={form.mapel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="noHp"
          placeholder="No HP"
          value={form.noHp}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={form.alamat}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button className="px-6 py-2 text-white bg-blue-900 rounded hover:bg-blue-800">
          {editingId ? "Update Guru" : "Tambah Guru"}
        </button>
      </form>

      {/* List Teachers */}
      <div className="space-y-4">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="flex flex-col justify-between p-4 border rounded md:flex-row md:items-center"
          >
            <div>
              <p className="font-semibold">{teacher.nama}</p>
              <p className="text-sm text-gray-600">{teacher.mapel}</p>
              {teacher.noHp && <p className="text-sm text-gray-500">HP: {teacher.noHp}</p>}
              {teacher.alamat && <p className="text-sm text-gray-500">Alamat: {teacher.alamat}</p>}
            </div>

            <div className="flex gap-2 mt-2 md:mt-0">
              <button
                onClick={() => handleEdit(teacher)}
                className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(teacher._id)}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}