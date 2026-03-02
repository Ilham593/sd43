import { HiOutlineOfficeBuilding, HiCheckCircle, HiArrowSmRight } from "react-icons/hi";
import fasilitasData from "../data/fasilitas";

function Fasilitas() {
  return (
    <div className="pb-20 space-y-16 sm:space-y-24">
      
      {/* HEADER DENGAN AKSEN GRADASI */}
      <section className="relative py-12 px-8 overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-[40px]">
        {/* Dekorasi Background */}
        <div className="absolute w-40 h-40 rounded-full -bottom-10 -left-10 bg-blue-50 blur-3xl opacity-60"></div>
        <div className="absolute w-40 h-40 rounded-full -top-10 -right-10 bg-indigo-50 blur-3xl opacity-60"></div>

        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-blue-700 rounded-full bg-blue-50 w-fit">
              <HiOutlineOfficeBuilding /> SARANA & PRASARANA
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Fasilitas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sekolah</span>
            </h1>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Kami menyediakan lingkungan belajar yang lengkap dan modern untuk mendukung 
              kreativitas serta kenyamanan <span className="font-semibold text-blue-600">seluruh siswa SDN 43 Kota Bengkulu.</span>
            </p>
          </div>
          
          {/* Badge Statistik Cepat */}
          <div className="flex-col items-center hidden p-6 border border-gray-100 lg:flex bg-gray-50 rounded-3xl">
            <span className="text-4xl font-black text-blue-600">17+</span>
            <span className="mt-1 text-xs font-bold tracking-widest text-gray-400 uppercase">Total Fasilitas</span>
          </div>
        </div>
      </section>

      {/* GRID FASILITAS MODERN */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {fasilitasData.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col bg-white border border-gray-100 shadow-lg rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container with Overlay */}
            <div className="relative overflow-hidden h-60 sm:h-64 lg:h-72">
              <img
                src={item.gambar}
                alt={item.nama}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100"></div>
              
              {/* Floating ID atau Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-blue-600 text-[10px] font-black rounded-full shadow-sm">
                FASILITAS #{item.id}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-8">
              <div className="flex items-center gap-2 mb-3">
                <HiCheckCircle className="text-green-500 shrink-0" size={20} />
                <h2 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {item.nama}
                </h2>
              </div>

              <p className="flex-grow text-sm leading-relaxed text-gray-600">
                {item.deskripsi}
              </p>

              {/* Action/Detail Hint */}
              <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-50">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tersedia</span>
                <div className="p-2 text-blue-600 transition-all bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white">
                  <HiArrowSmRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Fasilitas;