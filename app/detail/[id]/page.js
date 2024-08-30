import Link from "next/link";
/*import {Tab, TabList, TabPanel, Tabs} from "react-tabs";*/
import {recipesService} from "@/services/recipes";
import RecipesIngredients from "@/components/RecipesIngredients";
import RecipesSteps from "@/components/RecipesSteps";
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

            <RecipesIngredients ingredients={recipe.ingredients}/>
            <RecipesSteps steps={recipe.steps}/>

            {/*<Tabs selectedTabClassName="active-tab bg-blue-500 text-white">
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
            </Tabs>*/}

            <RatingForm recipeId={recipe.id}/>

            <Link href="/" className="block underline mt-4">Volver a las recetas</Link>
        </>
    )
}

export default DetailPage;
