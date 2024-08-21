'use client'
import Link from "next/link";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import RecipesIngredients from "@/components/RecipesIngredients";
import RecipesSteps from "@/components/RecipesSteps";
import useFetch from "@/hooks/useFetch";

const DetailPage = ({params}) => {

    const {id} = params;
    const { data: recipe, isLoading, error, manualFetch } = useFetch(`http://localhost:4000/recipes/detail/${id}`);

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
        manualFetch();
    }

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!recipe) {
        return <div>Receta no encontrada</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">{recipe.name} ({recipe.score ? recipe.score : "Sin valoración"})</h2>

            <Tabs selectedTabClassName="active-tab bg-blue-500 text-white">
                <TabList className="flex space-x-4 mb-4">
                    <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-300 cursor-pointer">Ingredientes</Tab>
                    <Tab className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-300 cursor-pointer">Pasos</Tab>
                </TabList>
                <TabPanel>
                    <RecipesIngredients ingredients={recipe.ingredients}/>
                </TabPanel>
                <TabPanel>
                    <RecipesSteps steps={recipe.steps}/>
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
