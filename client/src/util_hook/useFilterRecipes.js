import { useState, useMemo } from "react";

function useFilterRecipes(ricettario, elementFilter, paramasUrl) {

    const [recipesfilter, setRecipesFilter] = useState([]);

    useMemo(() => {
        if (elementFilter === 'category') {
            const filterRecipes = ricettario.filter(obj => {
                return (obj.category === paramasUrl);
            });
            setRecipesFilter(filterRecipes);
        } else if (elementFilter === 'sub_category') {
            const filterRecipes = ricettario.filter(obj => {
                return (obj.sub_category === paramasUrl);
            });
            setRecipesFilter(filterRecipes);
        } else if (elementFilter === 'single_recipe') {
            const filterRecipes = ricettario.filter(obj => {
                return (obj.name === paramasUrl);
            });
            setRecipesFilter(filterRecipes);
        } else {
            setRecipesFilter(ricettario);
        };

    }, [ricettario, elementFilter, paramasUrl])

    return recipesfilter;
};

export default useFilterRecipes;