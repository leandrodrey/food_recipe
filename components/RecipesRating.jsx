'use client'
import { useState, useEffect } from "react";
import useSWR from 'swr';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import { endpoints } from "@/config/endpoints";
import {fetcher} from "@/config/fetcher";
import RecipesTable from "@/components/RecipesTable";
import Loader from "@/components/Loader";

const RecipesRating = ({ recipes: initialRecipes }) => {

    const [sort, setSort] = useState('');
    const [recipes, setRecipes] = useState(initialRecipes || []);

    const { data, error, isLoading } = useSWR(
        sort ? endpoints.recipes.getRecipesByRating(sort) : null,
        fetcher
    );

    const handleSortRating = (newSort) => {
        if (newSort !== 'asc' && newSort !== 'des') {
            console.error('Orden de clasificación inválido:', newSort);
            return;
        }
        setSort(newSort);
    };

    useEffect(() => {
        if (data) {
            setRecipes(data);
        }
    }, [data]);

    if (error) return <div>Error al cargar las recetas</div>;
    if (isLoading && !recipes.length) return <Loader />;

    return (
        <>
            <Tabs selectedTabClassName="active-tab bg-blue-500 text-white">
                <TabList className="flex space-x-4 mb-4">
                    <Tab onClick={() => handleSortRating('des')}  className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-300 cursor-pointer">Mejor Puntaje</Tab>
                    <Tab onClick={() => handleSortRating('asc')}  className="py-2 px-4 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-300 cursor-pointer">Peor Puntaje</Tab>
                </TabList>
                <TabPanel>
                    <RecipesTable recipes={recipes} />
                </TabPanel>
                <TabPanel>
                    <RecipesTable recipes={recipes} />
                </TabPanel>
            </Tabs>
        </>
    )
}

export default RecipesRating;
