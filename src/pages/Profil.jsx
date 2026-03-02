import { 
  HiInformationCircle, 
  HiUserGroup, 
  HiTrendingUp, 
  HiSparkles,
  HiMap,
  HiBookOpen,
  HiLightningBolt,
  HiHand
} from "react-icons/hi";
import { FaVenus, FaMars } from "react-icons/fa";

function Profil() {
  return (
    <div className="pb-20 space-y-12 md:space-y-20">
      
      {/* HEADER WITH ACCENT */}
      <section className="relative p-8 overflow-hidden bg-blue-600 rounded-[32px] text-white shadow-2xl shadow-blue-200">
        <div className="absolute top-0 right-0 w-64 h-64 translate-x-32 -translate-y-32 rounded-full bg-white/10 blur-3xl"></div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md w-fit">
            <HiSparkles /> AKREDITASI B
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Profil Sekolah
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-lg">
            SD Negeri 43 Kota Bengkulu berkomitmen menerapkan <span className="font-bold text-white underline decoration-yellow-400">Kurikulum Merdeka</span> 
            dengan lingkungan belajar yang inklusif dan fasilitas yang mendukung kreativitas siswa.
          </p>
        </div>
      </section>

      {/* INFORMASI UMUM & RINGKASAN SISWA */}
      <section className="grid gap-8 lg:grid-cols-3">
        
        {/* KOLOM 1: INFORMASI UMUM (Lebih Lebar) */}
        <div className="lg:col-span-2 p-8 bg-white border border-gray-100 shadow-xl rounded-[32px] space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 text-blue-600 bg-blue-50 rounded-2xl">
              <HiInformationCircle size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Identitas Sekolah</h2>
          </div>

          <div className="grid gap-6 text-sm sm:grid-cols-2 sm:text-base">
            <InfoRow label="Nama Sekolah" value="SDN 43 Kota Bengkulu" icon={<HiMap className="text-blue-400" />} />
            <InfoRow label="Kecamatan" value="Ratu Agung" icon={<HiMap className="text-blue-400" />} />
            <InfoRow label="Kota" value="Bengkulu" icon={<HiMap className="text-blue-400" />} />
            <InfoRow label="Provinsi" value="Bengkulu" icon={<HiMap className="text-blue-400" />} />
            <InfoRow label="Kurikulum" value="Kurikulum Merdeka" icon={<HiBookOpen className="text-orange-400" />} />
            <InfoRow label="Rombongan Belajar" value="7 Rombel" icon={<HiUserGroup className="text-purple-400" />} />
          </div>
        </div>

        {/* KOLOM 2: RINGKASAN SISWA (Visual Card) */}
        <div className="p-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-[32px] shadow-xl space-y-8">
          <h2 className="text-xl font-bold">Statistik Siswa</h2>
          
          <div className="space-y-6">
            <div className="p-4 text-center border bg-white/10 rounded-2xl backdrop-blur-sm border-white/10">
              <p className="text-xs font-bold tracking-widest text-blue-300 uppercase">Total Peserta Didik</p>
              <p className="mt-1 text-5xl font-black">156</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-3 border bg-blue-500/20 rounded-xl border-blue-400/20">
                <FaMars className="mb-1 text-blue-400" />
                <span className="text-xl font-bold">80</span>
                <span className="text-[10px] opacity-70 uppercase font-bold">Laki-laki</span>
              </div>
              <div className="flex flex-col items-center p-3 border bg-pink-500/20 rounded-xl border-pink-400/20">
                <FaVenus className="mb-1 text-pink-400" />
                <span className="text-xl font-bold">76</span>
                <span className="text-[10px] opacity-70 uppercase font-bold">Perempuan</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex justify-between mb-2 text-xs">
                <span>Rentang Usia Dominan</span>
                <span className="font-bold text-blue-300">6–12 Tahun</span>
              </div>
              <div className="w-full h-2 overflow-hidden rounded-full bg-white/10">
                <div className="w-full h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KARAKTERISTIK SOSIAL (Bento Style) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-3 text-orange-600 bg-orange-50 rounded-2xl">
            <HiTrendingUp size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Karakteristik Sosial Ekonomi</h2>
            <p className="text-sm text-gray-500">Distribusi penghasilan orang tua/wali siswa</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <EconomiCard label="Rp 500rb – 999rb" value="100" sub="Siswa" color="bg-blue-600" />
          <EconomiCard label="Rp 1jt – 1.9jt" value="26" sub="Siswa" color="bg-indigo-500" />
          <EconomiCard label="Rp 2jt – 4.9jt" value="17" sub="Siswa" color="bg-purple-500" />
        </div>
      </section>

      {/* FASILITAS UNGGULAN (Hover Cards) */}
      <section className="grid gap-6 md:grid-cols-3">
        <FacilityCard 
          icon={<HiHand className="text-blue-600" size={32} />} 
          title="Sanitasi Baik" 
          desc="Tersedia 9 titik tempat cuci tangan higienis dengan air mengalir."
          bgColor="bg-blue-50"
        />
        <FacilityCard 
          icon={<HiLightningBolt className="text-yellow-600" size={32} />} 
          title="Daya Listrik Besar" 
          desc="3500 Watt untuk mendukung Lab Komputer & Smart Classroom."
          bgColor="bg-yellow-50"
        />
        <FacilityCard 
          icon={<HiBookOpen className="text-green-600" size={32} />} 
          title="Literasi Digital" 
          desc="Perpustakaan nyaman dengan koleksi buku lengkap & area baca."
          bgColor="bg-green-50"
        />
      </section>
    </div>
  );
}

/* COMPONENT HELPER */

function InfoRow({ label, value, icon }) {
  return (
    <div className="flex items-center gap-4 p-4 transition-colors rounded-2xl bg-gray-50 hover:bg-gray-100">
      <div className="text-xl">{icon}</div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function EconomiCard({ label, value, sub, color }) {
  return (
    <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-[24px] hover:shadow-xl transition-all group">
      <p className="mb-4 text-sm font-medium text-gray-500">{label}</p>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-black text-gray-900">{value}</span>
        <span className="mb-1 text-gray-400">{sub}</span>
      </div>
      <div className="mt-4 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-1000 group-hover:opacity-80`} style={{ width: `${(value/156)*100}%` }}></div>
      </div>
    </div>
  );
}

function FacilityCard({ icon, title, desc, bgColor }) {
  return (
    <div className={`p-8 ${bgColor} rounded-[32px] border border-white shadow-sm hover:shadow-md transition-all`}>
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

export default Profil;