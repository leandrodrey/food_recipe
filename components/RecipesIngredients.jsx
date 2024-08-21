import {useState} from "react";

const RecipesIngredients = ({ingredients}) => {

    const [portions, setPortions] = useState(1);

    const handlePersonChange = (e) => {
        setPortions(parseInt(e.target.value) || 1);
    };

    const calculateAmountOfIngredients = (ingredientQuantity) => {
        return ingredientQuantity * portions;
    }

    const handleAmountOfIngredients = (ingredientQuantity) => {
        if (!ingredientQuantity) {
            return;
        } else {
            return calculateAmountOfIngredients(ingredientQuantity);
        }
    }

    return (
        <>
            <p className="mb-4">
                Para <input type="number" onChange={handlePersonChange} className="w-10 text-black text-center"/> personas
            </p>
            <ul className="list-disc">
                {ingredients.map((ingredient, index) => (
                    <li className="py-1" key={index}>
                        <span className="font-bold">{handleAmountOfIngredients(ingredient.quantity)}</span> {ingredient.unity} de {ingredient.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RecipesIngredients;
