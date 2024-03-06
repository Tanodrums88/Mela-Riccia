import { Fragment, useState } from 'react';

import Summary from './Summary';
import Form from './formComponents/Form';

function FormHandler() {

    const [summaryRecipe, setSummaryRecipe] = useState();
    const [summary, setSummary] = useState(false);

    const formHandler = (data) => {

        const newRecipe = data;
        setSummaryRecipe(newRecipe)
        setSummary(true);
        console.log(newRecipe);
    };

    const onBack = () => {
        setSummary(false);
        setSummaryRecipe('')
    };

    return (
        <Fragment>
            <h2 className='text-center mb-5'>Inserisci una nuova Ricetta</h2>
            {!summary &&
                <Form formData={formHandler} />
            }
            {summary &&
                <Summary items={summaryRecipe} onBack={onBack} />
            }
        </Fragment>
    );
}

export default FormHandler;