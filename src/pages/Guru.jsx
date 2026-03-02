import { HiUserCircle, HiBadgeCheck, HiStar, HiUserGroup, HiBriefcase } from "react-icons/hi";

export default function Guru() {
  const tenagaPendidik = [
    { nama: "Sunisti, S.Pd", jabatan: "Kepala Sekolah", status: "PNS" },
    { nama: "Ansori, S.Pd", jabatan: "Guru Kelas", status: "PNS" },
    { nama: "Herlina, S.Pd", jabatan: "Guru Kelas", status: "PNS" },
    { nama: "Ita Riani, S.Pd", jabatan: "Guru Kelas", status: "PNS" },
    { nama: "Khairunnisa, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
    { nama: "Kiki Riski Kelana Putra, S.Pd", jabatan: "Guru Penjasorkes", status: "PPPK" },
    { nama: "M. Nurkholil, S.Pd.I", jabatan: "Guru Agama Islam", status: "PPPK" },
    { nama: "Mei Tri Hastuti, S.Pd", jabatan: "Guru Bahasa Inggris", status: "Honor" },
    { nama: "Parisa Purnama Sari, S.Pd", jabatan: "Guru Kelas", status: "Honor" },
    { nama: "Rizki Tri Permatasari, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
    { nama: "Siska Dewi, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
    { nama: "Sukma Nerawati, S.Pd", jabatan: "Guru Kelas", status: "PPPK" },
  ];

  const tenagaKependidikan = [
    { nama: "Nersih, S.Pt", jabatan: "Tenaga Administrasi Sekolah", status: "Honor" },
    { nama: "Kalaluddin", jabatan: "Penjaga Sekolah", status: "Honor" },
  ];

  // Memisahkan Kepala Sekolah untuk tampilan spesial
  const kepalaSekolah = tenagaPendidik.find(g => g.jabatan === "Kepala Sekolah");
  const guruLainnya = tenagaPendidik.filter(g => g.jabatan !== "Kepala Sekolah");

  return (
    <div className="pb-20 space-y-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-3xl px-4 mx-auto space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase border border-blue-100">
          <HiUserGroup size={16} /> Profil Pendidik
        </div>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
          Pendidik & Tenaga <br />
          <span className="text-blue-600">Kependidikan</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-500">
          Mengenal lebih dekat para penggerak pendidikan di <span className="font-bold text-gray-800">SDN 43 Kota Bengkulu</span> yang berdedikasi tinggi.
        </p>
      </section>

      {/* KEPALA SEKOLAH - FEATURED CARD */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] shadow-2xl shadow-blue-200 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 translate-x-20 -translate-y-20 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
            <div className="flex items-center justify-center w-32 h-32 border-2 shadow-inner sm:w-40 sm:h-40 bg-white/20 backdrop-blur-md rounded-3xl border-white/30">
               <HiUserCircle size={100} className="text-white/80" />
            </div>
            <div className="space-y-3 text-center md:text-left">
               <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-300 font-bold text-xs uppercase tracking-[0.2em]">
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

      {/* DAFTAR GURU LAINNYA */}
      <section className="px-4 space-y-10">
        <div className="flex items-center gap-3 pb-4 mx-auto border-b border-gray-100 max-w-7xl">
           <HiBadgeCheck size={32} className="text-blue-600" />
           <h2 className="text-2xl font-bold text-gray-900">Tenaga Pendidik</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl">
          {guruLainnya.map((guru, index) => (
            <StaffCard key={index} data={guru} />
          ))}
        </div>
      </section>

      {/* TENAGA KEPENDIDIKAN */}
      <section className="px-4 space-y-10">
        <div className="flex items-center gap-3 pb-4 mx-auto border-b border-gray-100 max-w-7xl">
           <HiBriefcase size={32} className="text-indigo-600" />
           <h2 className="text-2xl font-bold text-gray-900">Tenaga Kependidikan</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {tenagaKependidikan.map((staff, index) => (
            <StaffCard key={index} data={staff} isStaff={true} />
          ))}
        </div>
      </section>

    </div>
  );
}

// Sub-komponen Card agar kode bersih
function StaffCard({ data, isStaff = false }) {
  const statusStyles = {
    PNS: "bg-green-50 text-green-700 border-green-100",
    PPPK: "bg-blue-50 text-blue-700 border-blue-100",
    Honor: "bg-orange-50 text-orange-700 border-orange-100",
  };

  return (
    <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-xl hover:-translate-y-2 group">
      <div className="flex flex-col items-center space-y-4 text-center">
        {/* Avatar Placeholder */}
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-inner group-hover:scale-110 transition-transform ${isStaff ? 'bg-indigo-50 text-indigo-600' : 'bg-blue-50 text-blue-600'}`}>
          {data.nama.charAt(0)}
        </div>
        
        <div className="space-y-1">
          <h3 className="text-base font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
            {data.nama}
          </h3>
          <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
            {data.jabatan}
          </p>
        </div>

        <span className={`px-4 py-1 text-[10px] font-black rounded-full border uppercase tracking-widest ${statusStyles[data.status] || "bg-gray-50"}`}>
          {data.status}
        </span>
      </div>
    </div>
  );
}