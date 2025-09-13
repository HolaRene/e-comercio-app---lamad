import ListaProductos from "@/components/ListaProductos"
import Image from "next/image"

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {

  const categoria = (await searchParams).category || ''
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12">
        <Image src={'/logo-1.png'} alt="Producto" fill></Image>
      </div>
      <ListaProductos categoria={categoria} />
    </div>
  )
}

export default Homepage