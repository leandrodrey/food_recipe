'use client'
import {useEffect, useState} from "react";

const DetailPage = ({params}) => {

    const {id} = params;
    const [recipe, setRecipe] = useState(null);
    const [portions, setPortions] = useState(1);

    const fetchRecipe = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error al obtener las recetas');
            }
            const data = await response.json();
            setRecipe(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        let url = `http://localhost:4000/recipes/detail/${id}`;
        fetchRecipe(url);
    }, [id]);

    const handlePersonChange = (e) => {
        setPortions(parseInt(e.target.value) || 1);
    };

    const calculateAmountOfIngredients = (ingredientQuantity) => {
        return ingredientQuantity * portions;
    }

    if (!recipe) {
        return <div>Receta no encontrada</div>;
    }

    return (
        <>
            <h2>{recipe.name}</h2>
            <p>Para <input type="number" onChange={handlePersonChange} /> personas </p>

            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{calculateAmountOfIngredients(ingredient.quantity)} {ingredient.name}</li>
                ))}
            </ul>
        </>
    )
}

export default DetailPage;
