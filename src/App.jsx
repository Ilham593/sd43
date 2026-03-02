import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import Rombel from "./pages/Rombel"
import Fasilitas from "./pages/Fasilitas"
import Galeri from "./pages/Galeri"
import Kontak from "./pages/Kontak"
import Guru from "./pages/Guru"
import Admin from "./pages/Admin"

// Komponen Satpam untuk halaman Admin
const ProtectedAdmin = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const auth = sessionStorage.getItem("adminAuth");
      
      if (auth === "true") {
        setIsAuthorized(true);
      } else {
        const password = window.prompt("Akses Terbatas! Masukkan Sandi Admin SDN 43:");
        if (password === "sdn43bkl123") {
          sessionStorage.setItem("adminAuth", "true");
          setIsAuthorized(true);
        } else {
          alert("Sandi Salah atau Akses Dibatalkan!");
          navigate("/");
        }
      }
    };
    checkAuth();
  }, [navigate]);

  return isAuthorized ? children : null;
};

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/rombongan-belajar" element={<Rombel />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/guru" element={<Guru />} />
        
        {/* Update di sini: Halaman Admin diproteksi */}
        <Route 
          path="/admin" 
          element={
            <ProtectedAdmin>
              <Admin />
            </ProtectedAdmin>
          } 
        />
      </Route>
    </Routes>
  )
}

export default App