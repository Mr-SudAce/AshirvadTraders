import { memo, useEffect, useRef, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import vehicleAPIData from "../../vehicle.json";

const Search = memo(() => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setFilteredItems(
                searchQuery.trim()
                    ? vehicleAPIData.filter(({ name, model }) =>
                        name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
                        model.toLowerCase().startsWith(searchQuery.toLowerCase())
                    ).slice(0, 5)
                    : []
            );
        }, 300);
        return () => clearTimeout(debounceTimeout);
    }, [searchQuery]);

    return (
        <div className="max-w-full mx-auto p-4" ref={searchRef}>
            <div className="relative shadow-amber-400" style={{
                boxShadow: "0 0 50px 20px var(--superbg2)",
            }}>
                <div className="relative flex items-center max-w-[50rem] lg:w-[40rem] md:w-[40rem] w-[20rem] h-15">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setIsOpen(true);
                        }}
                        placeholder="Search Here..."
                        className="w-full h-full text-lg font-bold pl-10 pr-10 py-2 border border-gray-300 outline-none transition-all duration-300 bg-white text-black"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setFilteredItems([]);
                                setIsOpen(false);
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <FiX className="h-5 w-5" />
                        </button>
                    )}
                </div>
                {isOpen && (
                    <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        {filteredItems.length ? (
                            <ul className="max-h-70 overflow-y-auto no-scrollbar">
                                {filteredItems.map(({ id, model, name, image }) => (
                                    <li
                                        key={id}
                                        onClick={() => {
                                            setSearchQuery(`${name} ${model}`);
                                            setIsOpen(false);
                                        }}
                                        className="px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 flex items-center gap-3 border-b border-gray-200"
                                    >
                                        <LazyLoadImage
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{model}</h3>
                                            <p className="text-sm text-gray-500">{name}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                No results found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
});

export default Search;
