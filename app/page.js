'use client'
import {useState} from 'react';
import useFetch from "@/hooks/useFetch";
import RecipesTable from "@/components/RecipesTable";
import SearchBar from "@/components/SearchBar";

export default function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const { data: recipes, isLoading, error } = useFetch(`http://localhost:4000/recipes/${searchTerm}`);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <>
            <h1 className="text-2xl mb-2">Food Recipes</h1>
            <SearchBar onSearch={handleSearch} />
            <a href="/ratings" className="block underline py-2">Ver valoraciones</a>
            {isLoading && <div>Cargando...</div>}
            {error && <div>Error: {error.message}</div>}
            {!isLoading && !error && <RecipesTable recipes={recipes} />}
        </>
    );
}
