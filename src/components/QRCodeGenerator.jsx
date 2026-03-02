import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { HiDownload } from "react-icons/hi";

const QRCodeGenerator = () => {
  // Default ke link website sekolah sesuai permintaanmu
  const [text] = useState("https://sdn43bkl.vercel.app/");
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    
    // Membuat canvas baru untuk memastikan background putih (penting agar bisa di-scan)
    const finalCanvas = document.createElement("canvas");
    const context = finalCanvas.getContext("2d");
    
    // Set ukuran canvas hasil download (lebih besar agar tajam/HD)
    const size = 500; 
    finalCanvas.width = size;
    finalCanvas.height = size;

    // 1. Gambar background putih (Tanpa ini, hasil download bisa transparan & gagal scan)
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, size, size);

    // 2. Gambar QR Code dari canvas asli ke canvas baru ini
    context.drawImage(canvas, 0, 0, size, size);

    // 3. Proses Download
    const pngUrl = finalCanvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `QR-SDN43-Website.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Container QR untuk ditampilkan di web */}
      <div ref={qrRef} className="p-2 bg-white shadow-inner rounded-xl">
        <QRCodeCanvas
          value={text}
          size={180} // Ukuran tampilan di layar
          level={"H"} // High Error Correction agar lebih kuat di-scan
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          includeMargin={true}
        />
      </div>

      <button
        onClick={downloadQRCode}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-2xl transition-all active:scale-95 shadow-lg"
      >
        <HiDownload size={16} /> Download QR (HD)
      </button>
      
      <p className="mt-2 text-[10px] text-gray-400 font-medium">
        Format: PNG • Resolusi Tinggi
      </p>
    </div>
  );
};

export default QRCodeGenerator;