import {Suspense} from "react";
import Link from "next/link";
import {recipesService} from "@/services/recipes";
import RecipesRating from "@/components/RecipesRating";
import Loader from "@/components/Loader";

export const metadata = {
    title: "Food Recipes APP | Ratings",
    description: "This application is a food recipe app that allows users to search for recipes, view ratings, and save their favorite recipes.",
};

const RatingPage = async () => {

    const recipes = await recipesService.getRecipesByRating("asc");

    if (!recipes) {
        return <div>Recetas no encontrada</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">Valoraciones</h2>
            <Suspense fallback={<Loader/>}>
                <RecipesRating recipes={recipes}/>
            </Suspense>
            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default RatingPage;
