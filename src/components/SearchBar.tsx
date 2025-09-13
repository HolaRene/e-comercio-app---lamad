import { SearchSlash } from "lucide-react"


const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
      <SearchSlash className="h-4 w-4 text-gray-500" />
      <input id="busqueda" placeholder="Buscar..." className="text-sm outline-0" />
    </div>
  )
}

export default SearchBar