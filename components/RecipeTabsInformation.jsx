'use client'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import RecipesIngredients from "@/components/RecipesIngredients";
import RecipesSteps from "@/components/RecipesSteps";

const RecipeTabsInformation = ({recipe}) => {
    return (
        <>
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
        </>
    )
}

export default RecipeTabsInformation;
