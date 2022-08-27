import React from 'react';

const Matrix = ({rows, cols, onChange}) => {

    const Cell = ({row, col}) => {
        return(
        <textarea className = "text" rows = "1" cols = "3" onChange = {
            e => {if(!isNaN(e.target.value)){
                onChange(e.target.value, row, col);
            }}
        }></textarea>
        );
    }

    const Row = ({rowNum, cols}) => {
        const row = [];
        
        for(let i = 0; i < cols; i++){
            row.push(<Cell row = {rowNum} col = {i}/>)
        }

        return(
            <div>{row}</div>
        );
    }

    const matrix = [];
    for(let i = 0; i < rows; i++){
        matrix.push(<Row rowNum = {i} cols = {cols}/>);
    }

        
    return(
        <div>{matrix}</div>
    );
}


export default Matrix;