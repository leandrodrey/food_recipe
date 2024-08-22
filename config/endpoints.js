const BASE_URL = 'https://food-recipe-api.elsuperhard.com/';

export const endpoints = {
    recipes: {
        getAll:(searchTerm) => `${BASE_URL}recipes/${searchTerm}`,
        getRecipeById: (id) => `${BASE_URL}recipes/detail/${id}`,
        setRecipeRating: (id) => `${BASE_URL}recipes/rating/${id}`,
        getRecipesByRating:(sort) => `${BASE_URL}recipes/rating/${sort}`
    }
};
