"use client"

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all",
    },
    {
        name: "T-shirts",
        icon: <Shirt className="w-4 h-4" />,
        slug: "t-shirts",
    },
    {
        name: "Shoes",
        icon: <Footprints className="w-4 h-4" />,
        slug: "shoes",
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories",
    },
    {
        name: "Bags",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "bags",
    },
    {
        name: "Dresses",
        icon: <Venus className="w-4 h-4" />,
        slug: "dresses",
    },
    {
        name: "Jackets",
        icon: <Shirt className="w-4 h-4" />,
        slug: "jackets",
    },
    {
        name: "Gloves",
        icon: <Hand className="w-4 h-4" />,
        slug: "gloves",
    },
];

const Categorias = () => {

    const searchParams = useSearchParams()
    const seleccionCategoria = searchParams.get('category')
    const router = useRouter()

    const pathName = usePathname()
    console.log(pathName);

    const manejoCambios = (categoria: string) => {
        const parametro = new URLSearchParams(searchParams)
        parametro.set('category', categoria || 'all')
        router.push(`${pathName}?${parametro.toString()}`, { scroll: false })
    }


    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg text-sm mb-2'>
            {categories.map((category) => (
                <div key={category.name} className={`flex items-center justify-center px-2 py-1 gap-2 cursor-pointer ${seleccionCategoria === category.slug ? 'bg-white' : 'text-gray-500'}`}
                    onClick={() => manejoCambios(category.slug)}>
                    {category.icon}
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default Categorias