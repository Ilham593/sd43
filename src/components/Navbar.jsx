import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "hover:text-yellow-300 transition duration-200";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block py-2 text-yellow-300 font-semibold"
      : "block py-2 hover:text-yellow-300 transition duration-200";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 text-white bg-blue-600 shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        {/* Logo */}
        <h1 className="text-lg font-bold tracking-wide">SD Negeri 43</h1>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 font-medium md:flex">
          <NavLink to="/" className={desktopLinkClass}>
            Home
          </NavLink>
          <NavLink to="/profil" className={desktopLinkClass}>
            Profil
          </NavLink>
          <NavLink to="/guru" className={desktopLinkClass}>
            Guru
          </NavLink>

          {/* <NavLink to="/akademik" className={desktopLinkClass}>
            Akademik
          </NavLink> */}
          <NavLink to="/kegiatan" className={desktopLinkClass}>
            Kegiatan
          </NavLink>
          <NavLink to="/fasilitas" className={desktopLinkClass}>
            Fasilitas
          </NavLink>
          {/* <NavLink to="/berita" className={desktopLinkClass}>
            Berita
          </NavLink> */}
          {/* <NavLink to="/download" className={desktopLinkClass}>
            Download
          </NavLink> */}
          <NavLink to="/ppdb" className={desktopLinkClass}>
            PPDB
          </NavLink>
          <NavLink to="/kontak" className={desktopLinkClass}>
            Kontak
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-4 pb-4 font-medium bg-blue-700 md:hidden">
          <NavLink to="/" className={mobileLinkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/profil" className={mobileLinkClass} onClick={closeMenu}>
            Profil
          </NavLink>
          <NavLink to="/guru" className={mobileLinkClass} onClick={closeMenu}>
            Guru
          </NavLink>
          {/* <NavLink
            to="/akademik"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Akademik
          </NavLink> */}
          <NavLink
            to="/kegiatan"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Kegiatan
          </NavLink>
          <NavLink
            to="/fasilitas"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Fasilitas
          </NavLink>
          {/* <NavLink to="/berita" className={mobileLinkClass} onClick={closeMenu}>
            Berita
          </NavLink> */}
          {/* <NavLink
            to="/download"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Download
          </NavLink> */}
          <NavLink to="/ppdb" className={mobileLinkClass} onClick={closeMenu}>
            PPDB
          </NavLink>
          <NavLink to="/kontak" className={mobileLinkClass} onClick={closeMenu}>
            Kontak
          </NavLink>
        </div>
      )}
    </nav>
  );
}
