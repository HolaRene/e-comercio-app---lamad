"use client"

import { ProductType } from "@/type"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const TarjetaProducto = ({ productos }: { productos: ProductType }) => {
    const [tiposProductos, setTiposProductos] = useState({
        size: productos.sizes[0],
        color: productos.colors[0]
    })

    console.log(tiposProductos);

    const manejodeTipoProducto = ({ tipo, valor }: { tipo: "size" | "color", valor: string }) => {
        setTiposProductos((prev) => ({
            ...prev,
            [tipo]: valor
        }))
    }

    return (
        <div className='shadow-lg rounded-lg overflow-hidden'>
            {/* Imagen del producto */}
            <Link href={`/productos/${productos.id}`}>
                <div className="relative aspect-[2/3]">
                    <Image src={productos.images[tiposProductos.color]} alt="img1" fill className="object-cover hover:scale-105 transition-all duration-300 "></Image>
                </div>
            </Link>
            {/* Detalles del producto */}
            <div className="flex flex-col gap-4 p-4">
                <h2 className="text-lg font-semibold">{productos.name}</h2>
                <p className="text-sm text-gray-500">{productos.shortDescription}</p>
                {/* Tipo del producto */}
                <div className="flex items-center gap-4 text-xs">
                    {/* Tamaño */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Tallas:</span>
                        <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1"
                            onChange={(e) => manejodeTipoProducto({ tipo: "size", valor: e.target.value })}
                        >
                            {/* Iteración de tamaños */}
                            {productos.sizes.map((size) => (
                                <option key={size} value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/* Color */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Colores:</span>
                        <div className="flex items-center gap-2">
                            {/* Iteración de colores */}
                            {productos.colors.map((color) => (
                                <div key={color} onClick={() => manejodeTipoProducto({ tipo: "color", valor: color })}
                                    className={`cursor-pointer border-1 rounded-full p-[1.5px] ${tiposProductos.color === color ? "border-gray-400" : "border-gray-200"}`}>
                                    <div className={`w-[14px] h-[14px] rounded-full`} style={{ backgroundColor: color }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Precio y el botón de añadir al carro */}
                <div className="flex items-center justify-between">
                    {/* propiedad tofixed es el número de digitos después del punto decimal */}
                    <p className="font-medium">${productos.price.toFixed(1)}</p>
                    <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"><ShoppingCart className="w-4 h-4" />Añadir al carro</button>
                </div>
            </div>
        </div>
    )
}


export default TarjetaProducto