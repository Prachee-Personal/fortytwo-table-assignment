import React,{useState} from 'react';
import {useAsyncDebounce} from 'react-table';

export const TableSearchFilter = ({filter, setFilter}) => {
    const [value,setValue] = useState(filter)
    const onChange = useAsyncDebounce(value =>{
        setFilter(value || undefined)
    },1000)
    return (
        
        <span>
            Search : {' '}
            <input value={value || ''}onChange={(e) => {
                setValue(e.target.value )
                setValue(e.target.value)
            }}
            style= {{width:'190px',border: '1px solid black',borderRadius: '5px'}}
            />
        </span>
        
        
        
    )
};