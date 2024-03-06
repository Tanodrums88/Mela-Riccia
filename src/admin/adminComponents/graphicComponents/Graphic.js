import SpinnerLoading from '../../../ui/Spinner';
import Wrapper from '../../../ui/wrapper';
import GraphicBar from './GraphicBar';

import useFetchRecipes from '../../../util_hook/useFetchRecipes';

function Graphic() {

    const { recipesApi, isLoading } = useFetchRecipes();;

    let content;

    if (isLoading) {
        content =
            <>
                <Wrapper />
                <SpinnerLoading />
            </>
    }

    if (recipesApi.length > 0) {

        const primi = recipesApi.map((c) => c.category).filter((c) => c === "Primi").length;
        const secondi = recipesApi.map((c) => c.category).filter((c) => c === "Secondi").length;
        const dolci = recipesApi.map((c) => c.category).filter((c) => c === "Dolci").length;
        const contorni = recipesApi.map((c) => c.category).filter((c) => c === "Contorni").length;

        const category = ["Primi", "Secondi", "Dolci", "Contorni"];
        const numbers = [primi, secondi, dolci, contorni];
        const dataGraphic = {
            labels: category,
            datasets: [
                {
                    label: "n° di ricette",
                    data: numbers.map((n) => n),
                    backgroundColor: ["yellow", "red", "deeppink", "green"]
                }
            ]
        };

        content = <GraphicBar graphicData={dataGraphic} />
    }

    return (
        <>
            {content}
        </>
    )
}

export default Graphic