import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <h1 className="text-lg font-semibold text-blue-600 sm:text-xl">
            SDN 43 Bengkulu
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link to="/" className="transition hover:text-blue-600">Home</Link>
            <Link to="/profil" className="transition hover:text-blue-600">Profil</Link>
            <Link to="/rombongan-belajar" className="transition hover:text-blue-600">Rombel</Link>
            <Link to="/fasilitas" className="transition hover:text-blue-600">Fasilitas</Link>
            <Link to="/galeri" className="transition hover:text-blue-600">Galeri</Link>
            <Link to="/kontak" className="transition hover:text-blue-600">Kontak</Link>
            <Link to="/guru" className="transition hover:text-blue-600">Guru</Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-t md:hidden">
          <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">
            <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/profil">Profil</Link>
            <Link onClick={() => setIsOpen(false)} to="/rombongan-belajar">Rombel</Link>
            <Link onClick={() => setIsOpen(false)} to="/fasilitas">Fasilitas</Link>
            <Link onClick={() => setIsOpen(false)} to="/galeri">Galeri</Link>
            <Link onClick={() => setIsOpen(false)} to="/kontak">Kontak</Link>
            <Link onClick={() => setIsOpen(false)} to="/guru">Guru</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar