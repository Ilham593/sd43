import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiGlobeAlt,
  HiClock,
  HiExternalLink,
  HiChatAlt2,
} from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import QRCodeGenerator from "../components/QRCodeGenerator";

export default function Kontak() {
  const websiteUrl = "https://sdn43bkl.vercel.app/";

  return (
    <div className="pb-20 space-y-12 sm:space-y-20 bg-gray-50/30">
      {/* HEADER SECTION */}
      <section className="max-w-3xl px-4 pt-16 mx-auto space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase border border-blue-100">
          <HiChatAlt2 size={16} /> Layanan Informasi
        </div>
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
          Hubungi <span className="text-blue-600">Kami</span>
        </h1>
        <p className="text-lg font-medium leading-relaxed text-gray-500">
          Kami siap melayani kebutuhan informasi Anda seputar pendidikan di{" "}
          <span className="font-bold text-gray-800">SDN 43 Kota Bengkulu</span>.
        </p>
      </section>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-12 max-w-7xl">
        
        {/* KOLOM KIRI: INFO & QR CODE (4/12) */}
        <div className="space-y-6 lg:col-span-4">
          
          {/* Info Card */}
          <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 transition-transform duration-700 translate-x-16 -translate-y-16 rounded-full bg-blue-50 group-hover:scale-150"></div>
            
            <h2 className="relative z-10 flex items-center gap-2 mb-8 text-2xl font-bold text-gray-900">
              Informasi Resmi
            </h2>

            <div className="relative z-10 space-y-6">
              <ContactItem
                icon={<HiLocationMarker />}
                label="Alamat Sekolah"
                value="Jl. Gunung Bungkuk, Tanah Patah, Kec. Ratu Agung, Kota Bengkulu"
              />
              <ContactItem
                icon={<HiPhone />}
                label="Telepon"
                value="0736-343505"
                isLink="tel:0736343505"
              />
              <ContactItem
                icon={<HiMail />}
                label="Email"
                value="sekolahkami43@gmail.com"
                isLink="mailto:sekolahkami43@gmail.com"
              />
              <ContactItem
                icon={<HiGlobeAlt />}
                label="Website"
                value="sdn43bkl.vercel.app"
                isLink={websiteUrl}
              />
            </div>
          </div>

          {/* QR Code Card - DEFAULT KE WEBSITE */}
          <div className="p-8 bg-blue-600 shadow-xl shadow-blue-200 rounded-[40px] text-center flex flex-col items-center">
            <p className="text-[10px] font-black text-blue-100 uppercase tracking-[0.2em] mb-4 text-center">
              Scan Website Resmi
            </p>
            <div className="p-4 bg-white shadow-inner rounded-3xl">
              <QRCodeGenerator />
            </div>
            <p className="mt-4 text-xs italic font-bold text-white opacity-80">
              sdn43bkl.vercel.app
            </p>
          </div>
        </div>

        {/* KOLOM KANAN: MAPS & INSTAGRAM (8/12) */}
        <div className="space-y-6 lg:col-span-8">
          
          {/* Maps Card */}
          <div className="h-[450px] lg:h-[500px] bg-white border-8 border-white shadow-2xl rounded-[40px] overflow-hidden relative">
            <iframe
              title="Lokasi SDN 43 Kota Bengkulu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.026417482834!2d102.2818!3d-3.8123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDgnNDQuMyJTIDEwMsKwMTYnNTQuNSJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
            <div className="absolute items-center hidden gap-3 p-4 border shadow-lg bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl border-white/50 sm:flex">
              <div className="p-2 text-white bg-blue-600 rounded-lg shadow-lg">
                <HiLocationMarker size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase">Petunjuk Arah</p>
                <p className="text-xs font-bold leading-tight text-gray-800">Navigasi via Google Maps</p>
              </div>
            </div>
          </div>

          {/* Instagram Link Footer */}
          <a
            href="https://www.instagram.com/sdn43kotabengkulu/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[32px] text-white flex items-center justify-between shadow-xl transition-all duration-300 hover:shadow-pink-200 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <FaInstagram size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase opacity-70">Dokumentasi Sekolah</p>
                  <p className="text-lg font-bold">@sdn43kotabengkulu</p>
                </div>
              </div>
              <div className="p-3 transition-all rounded-full bg-white/10 group-hover:bg-white/30 group-hover:rotate-12">
                <HiExternalLink size={24} />
              </div>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
}

// Helper Component for Contact Info
function ContactItem({ icon, label, value, isLink }) {
  const content = (
    <div className="flex items-start gap-4 p-3 -m-3 transition-colors rounded-2xl hover:bg-gray-50 group/item">
      <div className="p-2.5 mt-1 text-blue-600 transition-all bg-blue-50 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {label}
        </p>
        <p className={`text-sm sm:text-base font-bold text-gray-700 leading-snug ${isLink ? "text-blue-600" : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );

  return isLink ? (
    <a href={isLink} target={isLink.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}