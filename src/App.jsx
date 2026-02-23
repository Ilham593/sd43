import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Guru from "./pages/Guru";
import Fasilitas from "./pages/Fasilitas";
import Kegiatan from "./pages/Kegiatan";
import Akademik from "./pages/Akademik";
import Kontak from "./pages/Kontak";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";
import PPDB from "./pages/PPDB";
import Download from "./pages/Download";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Auto Scroll To Top */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/guru" element={<Guru />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/akademik" element={<Akademik />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<DetailBerita />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
