import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  HiMenuAlt3, HiX, HiHome, HiUserGroup, HiOfficeBuilding, 
  HiPhotograph, HiPhone, HiAcademicCap, HiChevronRight, HiLockClosed 
} from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdminClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate("/admin"); 
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "Profil", path: "/profil", icon: <HiAcademicCap /> },
    { name: "Rombel", path: "/rombongan-belajar", icon: <HiUserGroup /> },
    { name: "Fasilitas", path: "/fasilitas", icon: <HiOfficeBuilding /> },
    { name: "Galeri", path: "/galeri", icon: <HiPhotograph /> },
    { name: "Guru", path: "/guru", icon: <HiUserGroup /> },
    { name: "Kontak", path: "/kontak", icon: <HiPhone /> },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-white py-3"} border-b border-gray-100`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo - Dibuat lebih kecil sedikit agar tidak makan tempat */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="p-1.5 text-white bg-blue-600 rounded-lg shadow-sm">
              <HiAcademicCap size={20} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-gray-900">SDN 43</span>
              <span className="text-[10px] font-medium text-blue-600 uppercase tracking-tighter">Bengkulu</span>
            </div>
          </Link>

          {/* Desktop Menu - Menggunakan Gap yang lebih kecil (gap-1) agar muat banyak */}
          <nav className="items-center hidden gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  location.pathname === link.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={handleAdminClick}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gray-900 rounded-full hover:bg-blue-600 transition-colors shadow-sm"
            >
              <HiLockClosed size={14} /> Admin
            </button>
          </nav>

          {/* Menu Hamburger - Muncul di layar < 1024px (lg) */}
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 rounded-lg hover:bg-gray-100">
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-0 bg-white border-b shadow-2xl transition-all duration-300 lg:hidden ${isOpen ? "top-[100%] opacity-100 visible" : "top-[110%] opacity-0 invisible"}`}>
        <div className="p-4 space-y-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              onClick={() => setIsOpen(false)}
              to={link.path}
              className={`flex items-center justify-between px-4 py-3 text-sm font-bold rounded-xl ${
                location.pathname === link.path ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-blue-500">{link.icon}</span> {link.name}
              </div>
              <HiChevronRight size={16} className="text-gray-300" />
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t">
            <button onClick={handleAdminClick} className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-black text-white bg-gray-900 rounded-xl">
              <HiLockClosed size={18} /> Panel Admin
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar; 