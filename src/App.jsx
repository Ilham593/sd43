import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Guru from "./pages/Guru";
import Kegiatan from "./pages/Kegiatan";
import Kontak from "./pages/Kontak";
import PPDB from "./pages/PPDB";
import AdminGuru from "./pages/AdminGuru";
import AdminStats from "./pages/AdminStats";
import AdminPPDB from "./pages/AdminPPDB";
import AdminGallery from "./pages/AdminGallery";
import { Routes, Route } from "react-router-dom";
import FacilitiesPreview from "./pages/FacilitiesPreview";
import AdminFacilities from "./pages/AdminFacilities";
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
          <Route path="/admin/guru" element={<AdminGuru />} />
          <Route path="/admin/stats" element={<AdminStats />} />
          <Route path="/admin/ppdb" element={<AdminPPDB />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/fasilitas" element={<FacilitiesPreview />} />
          <Route path="/admin/facilities" element={<AdminFacilities />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
