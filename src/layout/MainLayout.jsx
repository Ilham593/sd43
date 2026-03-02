import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-6xl px-4 py-8 mx-auto sm:px-6 md:px-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout