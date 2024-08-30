import {endpoints} from "@/config/endpoints";

const getRecipes = async ({searchTerm = ""}) => {
    const url = endpoints.recipes.getAll(searchTerm);
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }
    return await response.json();
}

const getRecipeById = async (id) => {
    const url = endpoints.recipes.getRecipeById(id);
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }
    return await response.json();
}

const updateRatingById = async (id, rating) => {
    const url = endpoints.recipes.setRecipeRating(id);
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({rating})
    });
    if (!response.ok) {
        throw new Error('Error al guardar la valoración');
    }
    return await response.json();
}

export const recipesService = {
    getRecipes,
    getRecipeById,
    updateRatingById
}
