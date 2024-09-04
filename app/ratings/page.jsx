import Link from "next/link";
import {recipesService} from "@/services/recipes";
import RecipesRating from "@/components/RecipesRating";

const RatingPage = async () => {

    const recipes = await recipesService.getRecipesByRating("asc");

    if (!recipes) {
        return <div>Recetas no encontrada</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">Valoraciones</h2>
            <RecipesRating recipes={recipes} />
            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default RatingPage;
