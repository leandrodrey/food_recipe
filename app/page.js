'use client'
import {useEffect, useState} from 'react';
import Link from "next/link";

export default function Home() {

    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.elements.search.value);
    }

    const fetchRecipes = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error al obtener las recetas');
            }
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        let url = 'http://localhost:4000/recipes';
        if (searchTerm) {
            url = `http://localhost:4000/recipes/${searchTerm}`;
        }
        fetchRecipes(url);
    }, [searchTerm]);

    return (
        <>
            <h1 className="text-2xl mb-2">Food Recipes</h1>
            <form onSubmit={handleSearch} className="flex flex-row">
                <input
                    type="text"
                    id="search"
                    name="search"
                    className="border-2 px-1 py-1 text-black"
                />
                <button type="submit" className="px-1 py-1 border-2">
                    Search
                </button>
            </form>

            <a href="/ratings" className="block underline py-2">Ver valoraciones</a>

            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2 text-center">Nombre</th>
                    <th className="px-4 py-2 text-center">Valoración</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                        <td className="border px-4 py-2">
                            <Link className="underline text-blue-300 hover:text-blue-500" href={`detail/${recipe.id}`}>
                                {recipe.name}
                            </Link>
                        </td>
                        <td className="border px-4 py-2 text-center">{recipe.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
