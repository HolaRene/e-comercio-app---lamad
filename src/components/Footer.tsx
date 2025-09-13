import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='flex mt-16 flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg md:justify-between gap-8 md:gap-0'>
      <div className="flex flex-col items-center md:items-start gap-4">
        <Link href={'/'} className="flex items-center">
          <Image src={'/logo.png'} alt="Logo" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">DonJoeComercio</p>
        </Link>
        <p className="text-sm text-gray-300">2025 donJoeComercio</p>
        <p className="text-sm text-gray-300">Todos los derechos reservados</p>
      </div>
      <div className="flex flex-col items-center text-gray-400 md:items-start gap-4 text-sm ">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href={'/'} >Inicio</Link>
        <Link href={'/products'} >Términos y servicios</Link>
        <Link href={'/about'} >Póliticas de privacidad</Link>
        <Link href={'/contact'} >Contacto</Link>
      </div>
      <div className="flex flex-col items-center text-gray-400 md:items-start gap-4 text-sm ">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href={'/'} >Todos los productos</Link>
        <Link href={'/products'} >Nuevos</Link>
        <Link href={'/about'} >Más vendidos</Link>
        <Link href={'/contact'} >Ventas</Link>
      </div>
      <div className="flex flex-col items-center text-gray-400 md:items-start gap-4 text-sm ">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href={'/'} >Sobre nosotros</Link>
        <Link href={'/products'} >Contactanos</Link>
        <Link href={'/about'} >Blog</Link>
        <Link href={'/contact'} >Programas afiliado</Link>
      </div>
    </div>
  )
}

export default Footer