import { Container } from 'react-bootstrap';
import { useState } from 'react';

import useFetchRecipes from '../util_hook/useFetchRecipes';

import AllRecipesCards from './AllRecipesComponents/AllRecipesCards';
import BackButton from '../ui/BackButton';
import SpinnerLoading from '../ui/Spinner';
import Wrapper from '../ui/wrapper';
import ErrorPage from '../ui/ErrorPage';
import FilteroffCanvas from './AllRecipesComponents/OffCanvasFilter';

import classes from './_AllRecipes.module.scss';

function AllRecipes() {

    const { recipesApi, error, isLoading } = useFetchRecipes();

    const [dataCategory, setDataCategory] = useState({
        Primi: false,
        Secondi: false,
        Contorni: false,
        Dolci: false
    });

    const [dataSubCategory, setDataSubCategory] = useState({
        Pasta: false,
        Risotti: false,
        Altri_Primi: false,
        SecondiDiCarne: false,
        SecondiDiPesce: false,
        SecondiVegetariani: false,
        DolciConCottura: false,
        DolciSenzaCottura: false
    });

    // if (dataSubCategory.Altri_Primi) {
    //     return "Altri Primi"
    // }

    /**
     *    const [dataCategory, setDataCategory] = useState({
        Primi: { checked: false, value: "Primi" },
        Secondi: { checked: false, value: "Secondi" },
        Contorni: { checked: false, value: "Contorni" },
        Dolci: { checked: false, value: "Dolci" }
    });

    const [dataSubCategory, setDataSubCategory] = useState({
        Pasta: { checked: false, value: "Pasta" },
        Risotti: { checked: false, value: "Risotti" },
        AltriPrimi: { checked: false, value: "Altri Primi" },
        SecondiDiCarne: { checked: false, value: "Secondi di Carne" },
        SecondiDiPesce: { checked: false, value: "Secondi di Pesce" },
        SecondiVegetariani: { checked: false, value: "Secondi Vegetariani" },
        DolciConCottura: { checked: false, value: "Dolci con Cottura" },
        DolciSenzaCottura: { checked: false, value: "Dolci senza Cottura" }
    });
     */

    const allFiltersFalse = () => {
        return Object.values(dataSubCategory || dataCategory).every(value => value === false);
    };

    let recipeIsFilterder = allFiltersFalse() ? recipesApi : recipesApi.filter((recipe) => dataSubCategory[recipe.sub_category] || dataCategory[recipe.category]);

    let content;

    if (isLoading) {
        content = <>
            <SpinnerLoading />
            <Wrapper />
            <SpinnerLoading />
            <Wrapper />
            <SpinnerLoading />
            <Wrapper />
            <SpinnerLoading />
        </>
    }

    if (error) {
        content = <ErrorPage message={error} />
    }

    if (recipesApi.length > 0) {
        content = <AllRecipesCards recipesApi={recipeIsFilterder} />
    }

    return (
        <>
            <Container fluid id={classes.allRecipes}>
                <div className={classes.flexTitle}>
                    <h1>Cerca tra tutte le ricette</h1>
                    <FilteroffCanvas
                        theChekedCategory={setDataCategory}
                        theChekedSubCategory={setDataSubCategory}
                    />
                </div>
                {content}
                <BackButton />
            </Container>
        </>
    )
}
export default AllRecipes;

// theChekedSub_Category={setDataSub_Category}