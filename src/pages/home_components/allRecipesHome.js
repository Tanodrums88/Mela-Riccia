import { useNavigate } from 'react-router-dom';

import classes from '../_Home.module.scss';


function AllRecipesHome() {
    const navigate = useNavigate();

    function navigateAllRecipes() {
        navigate('/tutte le ricette');
    };

    return (
        <div id={classes.allRecipes}>
            <button onClick={navigateAllRecipes}><p>Vedi tutte le ricette</p></button>
        </div>
    )
};

export default AllRecipesHome;