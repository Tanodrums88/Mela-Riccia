import React, { Fragment } from 'react';

export default function ListItems({ onChange, onDelete, value }) {
    return (
        <Fragment>
            <input value={value} onChange={onChange} />
            <button onClick={onDelete}>X</button>
        </Fragment>
    )
}
