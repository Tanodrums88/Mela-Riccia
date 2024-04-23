import SendRecipeUser from "./home_components/SendRecipeUser";
import Banner from "./home_components/bannerHome";
import Presentation from "./home_components/presentation";
import SearchTable from "./home_components/tableSearch";

function HomePage() {
    return (
        <>
            <Banner />
            <Presentation />
            <SearchTable />
            <SendRecipeUser />
        </>
    )
}

export default HomePage;