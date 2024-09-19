import {Suspense} from "react";
import Link from "next/link";
import {recipesService} from "@/services/recipes";
import RecipeTabsInformation from "@/components/RecipeTabsInformation";
import RatingForm from "@/components/RatingForm";
import Loader from "@/components/Loader";

export async function generateMetadata({params, searchParams}, parent) {
    const {id} = params;
    const recipe = await recipesService.getRecipeById(id);

    return {
        title: "Food Recipes APP | " + recipe.name + " (" + recipe.score + ")",
        description: recipe.description
    }
}

const DetailPage = async ({params}) => {

    const {id} = params;
    const recipe = await recipesService.getRecipeById(id);

    if (!recipe) {
        return <div>Receta no encontrada</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">{recipe.name} ({recipe.score ? recipe.score : "Sin valoración"})</h2>
            <Suspense fallback={<Loader/>}>
                <RecipeTabsInformation recipe={recipe}/>
            </Suspense>
            <RatingForm recipeId={recipe.id}/>
            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default DetailPage;
