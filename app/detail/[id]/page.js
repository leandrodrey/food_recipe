import Link from "next/link";
import {recipesService} from "@/services/recipes";
import RecipeTabsInformation from "@/components/RecipeTabsInformation";
import RatingForm from "@/components/RatingForm";

const DetailPage = async ({params}) => {

    const {id} = params;
    const recipe = await recipesService.getRecipeById(id);

    if (!recipe) {
        return <div>Receta no encontrada</div>;
    }

    return (
        <>
            <h2 className="mb-4 text-2xl">{recipe.name} ({recipe.score ? recipe.score : "Sin valoración"})</h2>
            <RecipeTabsInformation recipe={recipe} />
            <RatingForm recipeId={recipe.id}/>
            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default DetailPage;
