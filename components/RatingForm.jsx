'use client'

import {recipesService} from "@/services/recipes";

const RatingForm = ({recipeId}) => {

    const handleRatingForm = async (e) => {
        e.preventDefault();
        const ratingString = e.target.elements.rating.value;
        const rating = parseInt(ratingString, 10);
        await recipesService.updateRatingById(recipeId, rating);
    }

    return (
        <>
            <form className="flex justify-between w-1/3 my-5" onSubmit={handleRatingForm} method="post">
                <select className="grow text-black" name="rating" id="rating" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="ml-2 p-1 border-2" type="submit">Guardar</button>
            </form>
        </>
    )
}

export default RatingForm;
