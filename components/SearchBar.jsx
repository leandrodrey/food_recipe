'use client';

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
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
