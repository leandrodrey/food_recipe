'use client'
import {useState} from 'react';
import Link from "next/link";
import {endpoints} from "@/config/endpoints";
import useFetch from "@/hooks/useFetch";
import SearchBar from "@/components/SearchBar";
import RecipesTable from "@/components/RecipesTable";

export default function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const { data: recipes, isLoading, error } = useFetch(endpoints.recipes.getAll(searchTerm));

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!recipes) {
        return <div>Recetas no encontrada</div>;
    }

    return (
        <>
            <h1 className="text-2xl mb-2">Food Recipes</h1>
            <SearchBar onSearch={handleSearch} />
            <Link href="/ratings" className="block underline py-2">Ver valoraciones</Link>
            <RecipesTable recipes={recipes} />
        </>
    );
}
