import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  HiMenuAlt3, 
  HiX, 
  HiHome, 
  HiUserGroup, 
  HiOfficeBuilding, 
  HiPhotograph, 
  HiPhone, 
  HiAcademicCap,
  HiChevronRight
} from "react-icons/hi"; // Menggunakan Heroicons untuk kesan clean

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efek ganti warna saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-sm py-2" 
        : "bg-white py-4"
      } border-b border-gray-100`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 text-white transition-transform bg-blue-600 rounded-lg group-hover:rotate-12">
              <HiAcademicCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none tracking-tight text-gray-900">
                SDN 43
              </span>
              <span className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                Bengkulu
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 
                  ${location.pathname === link.path 
                    ? "bg-blue-50 text-blue-600" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="p-2 text-gray-600 transition-colors rounded-lg md:hidden hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Overlay Style) */}
      <div 
        className={`fixed inset-x-0 bg-white border-b shadow-xl transition-all duration-300 md:hidden ${
          isOpen ? "top-[100%] opacity-100 visible" : "top-[110%] opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              onClick={() => setIsOpen(false)}
              to={link.path}
              className="flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-700 transition-colors rounded-xl hover:bg-blue-50 hover:text-blue-600"
            >
              <div className="flex items-center gap-3">
                <span className="text-blue-500">{link.icon}</span>
                {link.name}
              </div>
              <HiChevronRight className="text-gray-300" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;