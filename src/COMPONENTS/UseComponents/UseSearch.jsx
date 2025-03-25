import { useState, useEffect, useRef } from "react";

const useSearchHandler = (dataSource, filterKey = "name") => {
    const [searchQuery, setSearchQuery] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [itemList, setItemList] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
        fetch(dataSource)            
        .then((data) => {
                setItemList(data.default);
            })
            .catch((err) => console.error("Error loading data:", err));
    }, [dataSource]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            if (searchQuery.trim() === "") {
                setFilteredItems([]);
                return;
            }
            const filtered = itemList
                .filter((item) => item[filterKey]?.toLowerCase().startsWith(searchQuery.toLowerCase()))
                .slice(0, 5);
            setFilteredItems(filtered);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchQuery, itemList, filterKey]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setIsOpen(true);
    };

    const handleItemClick = (item) => {
        console.log("Selected item:", item);
        setIsOpen(false);
        setSearchQuery("");
    };

    const clearSearch = () => {
        setSearchQuery("");
        setFilteredItems([]);
        setIsOpen(false);
    };

    return {
        searchQuery,
        setSearchQuery,
        isOpen,
        setIsOpen,
        filteredItems,
        handleSearchChange,
        handleItemClick,
        clearSearch,
        searchRef,
    };
};

export default useSearchHandler;