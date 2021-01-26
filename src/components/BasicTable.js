import React, { useMemo } from 'react';
import { useTable,useGlobalFilter,useFilters, usePagination} from 'react-table';
import MOCKDATA from './MOCKDATA.json';
import { COLUMNS } from './columns';
import { ColumnFilter} from './ColumnFilter';
import './table.css';


export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCKDATA, [])
    const defaultColumn = useMemo(() =>{
        return {
            Filter:ColumnFilter
        }
    },[])
    const tableInstance = useTable({
        columns,
        data,
        defaultColumn,
        initialState : {pageSize : 25}
    },useFilters, useGlobalFilter,usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setGlobalFilter,
        gotoPage,
        pageCount,
        setPageSize
    } = tableInstance

    const { globalFilter, pageIndex, pageSize, } = state;

    return (
        <div>
            <setGlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <span>{'Number of entries to display: '}</span>
            <select style={{border: '1px solid black',borderRadius: '5px'}} value={pageSize} 
                onChange={(e) => setPageSize(Number(e.target.value))}>
                    {
                        [10,25,50,100].map((element) => (
                            <option key={element} value={element}>
                                {element}
                            </option>
                        ))
                    }
            </select>

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((columns) => (
                                <th {...columns.getHeaderProps()}>{columns.render('Header')}
                                <div >{columns.canFilter ? columns.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    )))}
            </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                            </tr>
                        )
                    })}
                  
                </tbody>
            </table>
            <span>
                Page {' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page: {' '}
                <input type="number" defaultValue = {pageIndex + 1}
                    onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) -1 : 0;
                        gotoPage(pageNumber);
                    }} 
                        style= {{width:'50px',border: '1px solid black',borderRadius: '5px'}}
                    />
            </span>
        <div className="button">
            <button style={{border: '1px solid black',borderRadius: '5px'}} type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>
            <span>{' '}</span>
            <button   style={{border: '1px solid black',borderRadius: '5px'}}type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
                Previous
            </button>
            <span>{' '}</span>
            <button style={{border: '1px solid black',borderRadius: '5px'}} type="button" onClick={() => nextPage()} disabled={!canNextPage}>
                Next
            </button>
            <span>{' '}</span>
            <button style={{border: '1px solid black',borderRadius: '5px'}} type="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>
            </div>
        </div>
    )
}

