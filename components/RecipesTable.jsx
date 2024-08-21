import Link from "next/link";

const RecipesTable = ({recipes}) => {
    return (
        <>
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2 text-center">Nombre</th>
                    <th className="px-4 py-2 text-center">Promedio</th>
                </tr>
                </thead>
                <tbody>
                {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                        <td className="border px-4 py-2">
                            <Link className="underline text-blue-300 hover:text-blue-500" href={`detail/${recipe.id}`}>
                                {recipe.name}
                            </Link>
                        </td>
                        <td className="border px-4 py-2 text-center">{recipe.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default RecipesTable;
