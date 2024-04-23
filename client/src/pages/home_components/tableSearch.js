import Container from 'react-bootstrap/Container';

import SearchSection from './tableSearchComponents/searchCircles';
import AllRecipesHome from './allRecipesHome';

import classes from './_tableSearch.module.scss';

function SearchTable() {
    return (
        <>
            <Container id={classes['home-pulsanti']}>
                <h2>Cerca tra le categorie</h2>
                <div className={classes['home-ricette']}>
                    <SearchSection />
                </div>
                <AllRecipesHome />
            </Container>
        </>
    )
};

export default SearchTable;