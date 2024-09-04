'use client';
import { useState } from 'react';
import {useRouter} from "next/navigation";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const router = useRouter();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUrl = `/?search=${encodeURIComponent(searchTerm)}`;
        router.push(newUrl);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-row">
            <input
                type="text"
                id="search"
                name="search"
                value={searchTerm}
                onChange={handleInputChange}
                className="border-2 px-1 py-1 text-black"
            />
            <button type="submit" className="px-1 py-1 border-2">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
