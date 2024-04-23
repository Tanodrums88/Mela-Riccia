import { useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import useFetchRecipes from '../../util_hook/useFetchRecipes';

import classes from '../_Header.module.scss';


const formatResult = (item) => {
    return (
        <>
            <div id={classes.risultati}>
                <img style={{ height: '23px', width: '23px' }} src={item.image} alt='null' />
                <p style={{ fontSize: 'auto', paddingLeft: '10px' }}>{item.name}</p>
            </div>
        </>
    )
}

function SearchBar() {

    const { recipesApi } = useFetchRecipes();

    let navigate = useNavigate();

    const handleOnSelect = (item) => {
        navigate(`/${item.category}/${item.sub_category}/${item.name}`)
    }

    return (
        <div className={classes['header-search']} role="search">
            <ReactSearchAutocomplete
                className={classes.input}
                items={recipesApi}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
                placeholder='cerca una ricetta'
            //showIcon={false}
            />
        </div>
    )
}
export default SearchBar;