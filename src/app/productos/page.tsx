import ListaProductos from "@/components/ListaProductos"

const ProductosPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {

    const categoria = (await searchParams).category
    return (
        <div className=''>
            <ListaProductos categoria={categoria} />
        </div>
    )
}

export default ProductosPage