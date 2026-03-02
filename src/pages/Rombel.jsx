import { HiUserCircle, HiIdentification, HiChip, HiUserGroup } from "react-icons/hi";
import { FaMars, FaVenus } from "react-icons/fa";
import rombelData from "../data/rombel";

function Rombel() {
  return (
    <div className="pb-20 space-y-12 md:space-y-16">
      
      {/* HEADER DENGAN DEKORASI */}
      <section className="relative p-10 overflow-hidden bg-white border shadow-2xl rounded-[40px] border-gray-100">
        <div className="absolute top-0 right-0 p-12 translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 bg-blue-50"></div>
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-blue-600 rounded-full bg-blue-50 w-fit">
            <HiUserGroup /> TAHUN AJARAN 2023/2024
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Struktur <span className="text-blue-600">Rombongan Belajar</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-gray-500">
            SD Negeri 43 Kota Bengkulu mengelola <span className="font-bold text-gray-800">7 Rombongan Belajar</span> 
            yang dirancang untuk menciptakan suasana belajar yang kondusif dan fokus pada perkembangan siswa.
          </p>
        </div>
      </section>

      {/* GRID ROMBEL DENGAN DESIGN CARD BARU */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rombelData.map((kelas, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 shadow-lg rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Top Pattern / Accent */}
            <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            
            <div className="p-8 space-y-6">
              {/* Nama Kelas & Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 transition-colors group-hover:text-blue-600">
                    {kelas.nama}
                  </h2>
                  <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-green-50 text-green-700 border border-green-100 uppercase tracking-wider">
                    <HiChip /> {kelas.kurikulum}
                  </span>
                </div>
                <div className="p-3 text-gray-400 transition-all bg-gray-50 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600">
                  <HiIdentification size={28} />
                </div>
              </div>

              {/* Statistik Gender Ringkas */}
              <div className="grid grid-cols-2 gap-3 p-4 transition-colors bg-gray-50 rounded-2xl group-hover:bg-blue-50/50">
                <div className="flex flex-col border-r border-gray-200">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase">
                    <FaMars className="text-blue-500" /> Laki-laki
                  </span>
                  <span className="text-xl font-bold text-gray-800">{kelas.laki}</span>
                </div>
                <div className="flex flex-col pl-2">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase">
                    <FaVenus className="text-pink-500" /> Perempuan
                  </span>
                  <span className="text-xl font-bold text-gray-800">{kelas.perempuan}</span>
                </div>
              </div>

              {/* Info Wali Kelas */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 overflow-hidden text-blue-600 bg-blue-100 rounded-full shadow-inner">
                  {/* Bisa diganti <img> jika ada foto guru */}
                  <HiUserCircle size={40} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Wali Kelas</p>
                  <p className="text-sm font-bold leading-tight text-gray-800">
                    {kelas.wali}
                  </p>
                </div>
              </div>

              {/* Total Siswa Footer */}
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-500">Total Kapasitas</span>
                <span className="px-3 py-1 text-xs font-bold text-white transition-colors bg-gray-900 rounded-full shadow-lg group-hover:bg-blue-600">
                  {kelas.total} Siswa
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Rombel;