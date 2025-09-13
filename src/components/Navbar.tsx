import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home, ShoppingCart } from "lucide-react"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between w-full border-b border-gray-300 pb-4'>
      {/* Izquierda */}
      <Link href={'/'} className="flex items-center">
        <Image src={'/logo.png'} alt="Logo" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
        <p className="hidden md:block text-md font-medium tracking-wider">DonJoeComercio</p>
      </Link>
      {/* Derecha */}
      <div className="flex items-center gap-4">
        <SearchBar />
        <Link href={'/'}>
          <Home className="h-4 w-4 text-gray-600" />
        </Link>
        <Bell className="h-4 w-4 text-gray-600" />
        <ShoppingCart className="h-4 w-4 text-gray-600" />
        <Link href={'/login'} className="text-sm font-medium px-3 py-1.5 bg-gray-800 text-white rounded-md shadow-md">
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  )
}

export default Navbar