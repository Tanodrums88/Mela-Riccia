import { useEffect, useState } from "react"
import useMixArray from "./useMixArray";

export default function useFetchRecipes() {

    const [recipesApi, setRecipesApi] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (
            async function () {
                const url = "http://localhost:5000/recipes";
                // url back-end get = process.env.REACT_APP_DATABASEURL_RECIPES;
                try {
                    setIsLoading(true);
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Something went wrong!');
                    };

                    const data = await response.json();

                    const ricettario = [];

                    for (const key in data) {
                        ricettario.push({
                            id: key,
                            name: data[key].name,
                            cooked: data[key].cooked,
                            image: data[key].image,
                            category: data[key].category,
                            sub_category: data[key].sub_category,
                            ingredients: data[key].ingredients,
                            description: data[key].description,
                            preparation: data[key].preparation
                        });
                    };
                    setRecipesApi(ricettario);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setIsLoading(false);
                }
            }
        )()
    }, []);

    useMixArray(recipesApi);

    return { recipesApi, error, isLoading }

};