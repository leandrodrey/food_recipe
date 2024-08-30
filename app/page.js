import Link from "next/link";
import {recipesService} from "@/services/recipes";
import SearchBar from "@/components/SearchBar";
import RecipesTable from "@/components/RecipesTable";

export default async function Home({searchParams}) {

    let recipes = await recipesService.getRecipes({ searchTerm: searchParams.search });

    if (!recipes) {
        return <div>Recetas no encontradas</div>;
    }

    return (
        <>
            <h1 className="text-2xl mb-2">Food Recipes</h1>
            <SearchBar />
            <Link href="/ratings" className="block underline py-2">Ver valoraciones</Link>
            <RecipesTable recipes={recipes}/>
        </>
    );
}
