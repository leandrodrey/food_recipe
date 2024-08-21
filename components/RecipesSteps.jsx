const RecipesSteps = ({steps}) => {
    return (
        <>
            <ul className="list-disc">
                {steps.map((step, index) => (
                    <li className="py-1" key={index}>{step}</li>
                ))}
            </ul>
        </>
    )
}

export default RecipesSteps;
