import SpinnerLoading from '../../../ui/Spinner';
import Wrapper from '../../../ui/wrapper';
import GraphicBarSub from './GraphicBarSub';

import useFetchRecipes from '../../../util_hook/useFetchRecipes';

function GraphicSub() {

    const { recipesApi, isLoading } = useFetchRecipes();

    let content;

    if (isLoading) {
        content =
            <>
                <Wrapper />
                <SpinnerLoading />
            </>
    }

    if (recipesApi.length > 0) {
        const pasta = recipesApi.map((c) => c.sub_category).filter((c) => c === "Pasta").length;
        const risotti = recipesApi.map((c) => c.sub_category).filter((c) => c === "Risotti").length;
        const altriPrimi = recipesApi.map((c) => c.sub_category).filter((c) => c === "Altri Primi").length;
        const carne = recipesApi.map((c) => c.sub_category).filter((c) => c === "Secondi di Carne").length;
        const pesce = recipesApi.map((c) => c.sub_category).filter((c) => c === "Secondi di Pesce").length;
        const vegetariani = recipesApi.map((c) => c.sub_category).filter((c) => c === "Secondi Vegetariani").length;
        const dolciCotti = recipesApi.map((c) => c.sub_category).filter((c) => c === "Dolci con Cottura").length;
        const dolciNoCotti = recipesApi.map((c) => c.sub_category).filter((c) => c === "Dolci senza Cottura").length;

        const categoryPrimi = ["Pasta", "Risotti", "Altri Primi", "Secondi di Carne", "Secondi di Pesce", "Secondi Vegetariani", "Dolci con Cottura", "Dolci senza Cottura"];
        const numbers = [pasta, risotti, altriPrimi, carne, pesce, vegetariani, dolciCotti, dolciNoCotti];

        const dataGraphic = {
            labels: categoryPrimi,
            datasets: [
                {
                    label: "n° di ricette",
                    data: numbers,
                    backgroundColor: ["#EFFF0A", "#F1FD49", "#DDF104", "#FF0A0A", "#F74409", "#A29908", "#FF68B6", "#E8758B"]
                },
            ],
        };

        content = <GraphicBarSub graphicData={dataGraphic} />
    }





    return (
        <>
            {content}
        </>
    )
}

export default GraphicSub