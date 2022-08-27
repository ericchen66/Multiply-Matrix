import React, { useState, useEffect } from "react";


function Result({matrix1, matrix2}){
    const [result, setResult] = useState(Array.from(Array(matrix1.length), () => new Array(matrix2[0].length)));

    useEffect(() =>
        {setResult(Array.from(Array(matrix1.length), () => new Array(matrix2[0].length).fill('')))}, [matrix1, matrix2]
    );

    const dotProduct = (aRow, bCol) => {
        let result = 0;
        for(let i = 0; i < matrix1[aRow].length; i++) {
			result += matrix1[aRow][i] * matrix2[i][bCol];
		}
        return result;
    }

    const handleClick = () => {
    if(matrix1[0].length === matrix2.length){
        const ans = Array.from(Array(matrix1.length), () => new Array(matrix2[0].length));
        for(let i = 0; i < result.length; i++){
            for(let j = 0; j < result[i].length; j++){
                ans[i][j] = dotProduct(i, j);
            }
        }
        setResult(ans)
    }else{
        return(<h1>Hi</h1>)
    }
    }

    const Cell = ({num}) => {
        return <textarea className = "text" readOnly rows = "1" cols = "3">{num}</textarea>
    }

    const Row = ({rowNum, cols}) => {
        const row = [];
        
        for(let i = 0; i < cols; i++){
            row.push(<Cell num = {result[rowNum][i]}/>)
        }

        return(
            <div>{row}</div>
        );
    }

    const matrix = [];
    if(matrix1[0].length === matrix2.length){
    for(let i = 0; i < result.length; i++){
        matrix.push(<Row rowNum = {i} cols = {result[0].length}/>);
    }
    }else{
        matrix.push(<h3>Invalid matrices</h3>)
    }
    
    return(
        <div>
        <div>{matrix}</div>
        <button onClick = {handleClick}>Click me</button>
        </div>
    );
}

export default Result;