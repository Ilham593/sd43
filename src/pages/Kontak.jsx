import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiGlobeAlt, 
  HiClock, 
  HiExternalLink,
  HiChatAlt2
} from "react-icons/hi";

export default function Kontak() {
  return (
    <div className="pb-20 space-y-12 sm:space-y-20">
      
      {/* HEADER DENGAN AKSEN GRADASI */}
      <section className="max-w-3xl px-4 pt-10 mx-auto space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase border border-blue-100">
          <HiChatAlt2 size={16} /> Layanan Informasi
        </div>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
          Hubungi <span className="text-blue-600">Kami</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-500">
          Kami siap melayani kebutuhan informasi Anda seputar pendidikan dan administrasi di <span className="font-bold text-gray-800">SDN 43 Kota Bengkulu</span>.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-5 max-w-7xl">
        
        {/* INFO KARTU (2/5 Kolom) */}
        <div className="space-y-6 lg:col-span-2">
          <div className="p-8 bg-white border border-gray-100 shadow-2xl rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 transition-transform duration-700 translate-x-16 -translate-y-16 rounded-full bg-blue-50 group-hover:scale-150"></div>
            
            <h2 className="relative z-10 flex items-center gap-2 mb-8 text-2xl font-bold text-gray-900">
              Informasi Resmi
            </h2>

            <div className="relative z-10 space-y-6">
              <ContactItem 
                icon={<HiLocationMarker />} 
                label="Alamat Sekolah" 
                value="Jl. Gunung Bungkuk, Kel. Tanah Patah, Kec. Ratu Agung, Kota Bengkulu 38224" 
              />
              <ContactItem 
                icon={<HiPhone />} 
                label="Telepon" 
                value="0736-343505" 
                isLink={`tel:0736343505`}
              />
              <ContactItem 
                icon={<HiMail />} 
                label="Email" 
                value="sekolahkami43@gmail.com" 
                isLink={`mailto:sekolahkami43@gmail.com`}
              />
              <ContactItem 
                icon={<HiGlobeAlt />} 
                label="Website" 
                value="sdn43bkl.vercel.app" 
                isLink={`https://sdn43bkl.vercel.app`}
              />
              <ContactItem 
                icon={<HiClock />} 
                label="Waktu Belajar" 
                value="Pagi / 5 Hari Sekolah" 
              />
            </div>
          </div>

          {/* Social Media Mini Card */}
          <div className="p-6 bg-blue-600 rounded-[32px] text-white flex items-center justify-between shadow-xl shadow-blue-200">
             <div>
                <p className="text-xs font-bold tracking-widest uppercase opacity-80">Update Harian</p>
                <p className="font-bold">Ikuti Kami di Instagram</p>
             </div>
             <button className="p-3 transition-all bg-white/20 hover:bg-white/40 rounded-2xl">
                <HiExternalLink size={24} />
             </button>
          </div>
        </div>

        {/* MAPS (3/5 Kolom) */}
        <div className="lg:col-span-3 h-[450px] lg:h-auto min-h-[400px] relative">
          <div className="absolute inset-0 bg-gray-200 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              title="Lokasi SDN 43 Kota Bengkulu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.023456!2d102.2848!3d-3.8058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDgnMjAuOSJTIDEwMsKwMTcnMDUuMyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Floating Address Card on Map */}
          <div className="absolute items-start hidden gap-3 p-4 border shadow-xl bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-72 bg-white/90 backdrop-blur-md rounded-2xl border-white/50 sm:flex">
             <div className="p-2 text-white bg-blue-600 rounded-lg">
                <HiLocationMarker size={20} />
             </div>
             <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Petunjuk Arah</p>
                <p className="mt-1 text-xs font-bold leading-tight text-gray-800">Klik untuk navigasi via Google Maps</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Component for Contact Info
function ContactItem({ icon, label, value, isLink }) {
  const content = (
    <div className="flex items-start gap-4 p-3 -m-3 transition-colors rounded-2xl hover:bg-gray-50 group/item">
      <div className="p-2 mt-1 text-blue-600 transition-all bg-blue-50 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">{label}</p>
        <p className={`text-sm sm:text-base font-bold text-gray-700 leading-snug ${isLink ? 'text-blue-600' : ''}`}>
          {value}
        </p>
      </div>
    </div>
  );

  return isLink ? (
    <a href={isLink} target={isLink.startsWith('http') ? "_blank" : "_self"} rel="noreferrer">
      {content}
    </a>
  ) : content;
}