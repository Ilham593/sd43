import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import Rombel from "./pages/Rombel"
import Fasilitas from "./pages/Fasilitas"
import Galeri from "./pages/Galeri"
import Kontak from "./pages/Kontak"
import Guru from "./pages/Guru"
import Admin from "./pages/Admin"
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
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}

export default App