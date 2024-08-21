'use client'
import {useEffect, useState} from "react";
import Link from "next/link";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

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

    const handlePersonChange = (e) => {
        setPortions(parseInt(e.target.value) || 1);
    };

    const calculateAmountOfIngredients = (ingredientQuantity) => {
        return ingredientQuantity * portions;
    }

    const handleAmountOfIngredients = (ingredientQuantity) => {
        if (!ingredientQuantity) {
            return;
        } else {
            return calculateAmountOfIngredients(ingredientQuantity);
        }
    }

    const handleRatingForm = (e) => {
        e.preventDefault();
        const ratingString = e.target.elements.rating.value;
        const rating = parseInt(ratingString, 10);
        fetch(`http://localhost:4000/recipes/rating/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating})
        })
    }

    useEffect(() => {
        let url = `http://localhost:4000/recipes/detail/${id}`;
        fetchRecipe(url);
    }, [id, handleRatingForm]);

    if (!recipe) {
        return <div>Receta no encontrada</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">{recipe.name} ({recipe.score ? recipe.score : "Sin valoración"})</h2>
            <Tabs selectedTabClassName="active-tab bg-blue-500 text-white">
                <TabList className="flex space-x-4 mb-4">
                    <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer">Ingredientes</Tab>
                    <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer">Pasos</Tab>
                </TabList>

                <TabPanel>
                    <p className="mb-4">
                        Para <input type="number" onChange={handlePersonChange} className="w-10 text-black text-center"/> personas
                    </p>
                    <ul className="list-disc">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li className="py-1" key={index}>
                                <span className="font-bold">{handleAmountOfIngredients(ingredient.quantity)}</span> {ingredient.unity} de {ingredient.name}
                            </li>
                        ))}
                    </ul>
                </TabPanel>

                <TabPanel>
                    <ul className="list-disc">
                        {recipe.steps.map((step, index) => (
                            <li className="py-1" key={index}>{step}</li>
                        ))}
                    </ul>
                </TabPanel>
            </Tabs>

            <form className="flex justify-between w-1/3 my-5" onSubmit={handleRatingForm} method="post">
                <select className="grow text-black" name="rating" id="rating" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="ml-2 p-1 border-2" type="submit">Guardar</button>
            </form>

            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default DetailPage;
