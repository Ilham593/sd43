export default function Kontak() {
  return (
    <div className="py-8 space-y-12 sm:space-y-16 sm:py-12">
      {/* Heading */}
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
          Hubungi Kami
        </h1>
        <p className="text-sm text-gray-600 sm:text-base">
          Kami siap melayani informasi dan kebutuhan pendidikan Anda.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2">
        {/* Informasi */}
        <div className="p-6 transition bg-white border shadow-sm rounded-2xl sm:p-8 hover:shadow-lg">
          <h2 className="mb-6 text-lg font-semibold text-gray-800 sm:text-2xl">
            Informasi Sekolah
          </h2>

          <div className="space-y-4 text-sm text-gray-700 sm:text-base">
            <div>
              <p className="font-semibold">Nama Sekolah</p>
              <p>SD Negeri 43 Kota Bengkulu</p>
            </div>

            <div>
              <p className="font-semibold">Alamat</p>
              <p>
                Jl. Gunung Bungkuk, RT 7 / RW 5 <br />
                Kel. Tanah Patah, Kec. Ratu Agung <br />
                Kota Bengkulu, Prov. Bengkulu 38224
              </p>
            </div>

            <div>
              <p className="font-semibold">Telepon</p>
              <p>0736-343505</p>
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <p className="break-all">sekolahkami43@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold">Website Resmi</p>
              <a
                href="https://sdn43bkl.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 break-all hover:underline"
              >
                https://sdn43bkl.vercel.app
              </a>
            </div>

            <div>
              <p className="font-semibold">Waktu Penyelenggaraan</p>
              <p>Pagi / 5 Hari Sekolah</p>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="overflow-hidden border shadow-sm rounded-2xl">
          <iframe
            title="Lokasi SDN 43 Kota Bengkulu"
            // Menggunakan koordinat real dari data: -3.8058, 102.2848
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0!2d102.2848!3d-3.8058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDgnMjAuOSJTIDEwMsKwMTcnMDUuMyJF!5e0!3m2!1sid!2sid!4v1700000000000"
            className="w-full h-[300px] sm:h-[350px] lg:h-full min-h-[300px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
