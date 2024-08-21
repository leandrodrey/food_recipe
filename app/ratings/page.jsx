'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

const RatingPage = () => {

    const [recipes, setRecipes] = useState(null);

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

    const handleSortRating = (sort) => {
        if (sort !== 'asc' && sort !== 'des') {
            console.error('Orden de clasificación inválido:', sort);
            return;
        }
        let url = `http://localhost:4000/recipes/rating/${sort}`;
        fetchRecipes(url);
    };

    useEffect(() => {
        handleSortRating('des');
    }, []);

    if (!recipes) {
        return <div>No hay recetas</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">Valoraciones</h2>
            <div>
                <div className="flex space-x-4 mb-4">
                        <a onClick={() => handleSortRating('des')} href="#" className="bg-blue-500 text-white py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer">
                            Mejor Puntaje
                        </a>
                        <a onClick={() => handleSortRating('asc')} href="#" className="bg-blue-500 text-white py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer">
                            Peor Puntaje
                        </a>
                </div>
            </div>
            <div>
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-center">Nombre</th>
                        <th className="px-4 py-2 text-center">Promedio</th>
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
            </div>

            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default RatingPage;
