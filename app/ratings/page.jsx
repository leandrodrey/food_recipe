'use client'
import {useEffect, useState} from "react";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import RecipesTable from "@/components/RecipesTable";

const RatingPage = () => {

    const [sort, setSort] = useState('des');
    const { data: recipes, isLoading, error } = useFetch(`https://food-recipe.elsuperhard.com/recipes/rating/${sort}`);

    const handleSortRating = (newSort) => {
        if (newSort !== 'asc' && newSort !== 'des') {
            console.error('Orden de clasificación inválido:', newSort);
            return;
        }
        setSort(newSort);
    };

    useEffect(() => {
        handleSortRating('des');
    }, []);

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
            <h2 className="mb-4 text-2xl">Valoraciones</h2>
            <div>
                <div className="flex space-x-4 mb-4">
                        <a onClick={() => handleSortRating('des')} href="#" className="bg-blue-500 text-white py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-300 cursor-pointer">
                            Mejor Puntaje
                        </a>
                        <a onClick={() => handleSortRating('asc')} href="#" className="bg-blue-500 text-white py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-300 cursor-pointer">
                            Peor Puntaje
                        </a>
                </div>
            </div>
            <RecipesTable recipes={recipes} />
            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default RatingPage;
