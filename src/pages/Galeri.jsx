import { HiCamera, HiExternalLink, HiSearchCircle } from "react-icons/hi";
import galeriData from "../data/galeri";

function Galeri() {
  return (
    <div className="pb-20 space-y-12 sm:space-y-16">
      
      {/* HEADER DENGAN AKSEN VISUAL */}
      <section className="relative p-10 overflow-hidden bg-gray-900 rounded-[40px] text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 translate-x-20 -translate-y-20 rounded-full bg-blue-600/20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-blue-400 border rounded-full bg-blue-500/10 border-blue-500/20 w-fit">
              <HiCamera /> DOKUMENTASI SEKOLAH
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Galeri <span className="font-serif italic font-light tracking-normal text-blue-400">Kegiatan</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-gray-400 sm:text-lg">
              Melihat kembali momen-momen berharga, kreativitas siswa, dan semangat belajar di 
              <span className="font-semibold text-white"> SDN 43 Kota Bengkulu.</span>
            </p>
          </div>
          
          <div className="hidden lg:block">
             <div className="p-4 border bg-white/5 backdrop-blur-md border-white/10 rounded-2xl">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">Pembaruan Terakhir</p>
                <p className="text-sm font-medium text-white">Maret 2026</p>
             </div>
          </div>
        </div>
      </section>

      {/* MASONRY-INSPIRED GRID */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galeriData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm rounded-[32px] hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
              <img
                src={item.gambar}
                alt={item.judul}
                className="object-cover w-full h-full transition duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 opacity-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent group-hover:opacity-100">
                <div className="space-y-3 transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                  <h2 className="text-lg font-bold leading-tight text-white">
                    {item.judul}
                  </h2>
                  <div className="flex items-center gap-4 text-xs font-medium text-white/70">
                    <span className="flex items-center gap-1">
                      <HiSearchCircle size={16} className="text-blue-400" /> Lihat Detail
                    </span>
                    <span className="flex items-center gap-1">
                      <HiExternalLink size={16} className="text-blue-400" /> Share
                    </span>
                  </div>
                </div>
              </div>

              {/* Static Label (Optional - Only if you want it visible before hover) */}
              <div className="absolute transition-opacity top-4 left-4 group-hover:opacity-0">
                 <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold rounded-full shadow-sm text-gray-800 border border-white">
                    {item.id.toString().padStart(2, '0')}
                 </span>
              </div>
            </div>

            {/* Bottom Content (Visible on mobile/default) */}
            <div className="p-6 md:hidden">
              <h2 className="text-sm font-bold text-gray-800 truncate">
                {item.judul}
              </h2>
            </div>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION FOOTER */}
      <section className="py-12 text-center bg-blue-50 rounded-[40px] border-2 border-dashed border-blue-200">
         <h3 className="text-xl font-bold text-blue-900">Ingin melihat lebih banyak momen?</h3>
         <p className="mt-2 text-sm text-blue-600/70">Ikuti media sosial resmi kami untuk update kegiatan harian.</p>
         <button className="px-8 py-3 mt-6 font-bold text-white transition-all bg-blue-600 shadow-lg rounded-2xl shadow-blue-200 hover:bg-blue-700">
            Kunjungi Instagram
         </button>
      </section>

    </div>
  );
}

export default Galeri;