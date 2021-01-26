import React from 'react';

export const ColumnFilter = ({column}) => {
    const {filterValue,setFilter} = column;
    return (
        <span>
            Search : {' '}
            <input 
            value={filterValue || ''} 
            onChange={(e) => setFilter(e.target.value)}
            style= {{width:'100px',border: '1px solid black',borderRadius: '5px'}}
            />
        </span>
    )
};