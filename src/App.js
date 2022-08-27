import React, {useState, useEffect} from 'react';
import './App.css';
import Colpicker from './Colpicker';
import Matrix from './Matrix.js'
import Rowpicker from './Rowpicker';
import Result from './Result';

function App(){
  const [rows1, setRows1] = useState(3);
  const [cols1, setCols1] = useState(3);
  const [rows2, setRows2] = useState(3);
  const [cols2, setCols2] = useState(3);

  const[arr1, setArr1] = useState(Array.from(Array(rows1), () => new Array(cols1).fill('')));
  const[arr2, setArr2] = useState(Array.from(Array(rows2), () => new Array(cols2).fill('')));

  useEffect(() =>
    {setArr1(Array.from(Array(rows1), () => new Array(cols1).fill('')))}, [rows1, cols1]
  );
  useEffect(() =>
    {setArr2(Array.from(Array(rows2), () => new Array(cols2).fill('')))}, [rows2, cols2]
  );
  
  return(
  <div style = {{margin: 'auto', width: '60%', textAlign: 'center', height: '100vh', backgroundColor: 'pink'}}>
    <h1>Matrix Multiplication</h1>
    <h3>(For 1 x 1 to 8 x 8 matrix)</h3>
    <div className = "matrix1">
      <Rowpicker onChange = {rows => {setRows1(parseInt(rows))}}/>
      <Colpicker onChange = {cols => {setCols1(parseInt(cols))}}/>
      <br/>
      <Matrix rows = {rows1} cols = {cols1} onChange = {(val, row, col) => {
        let temp = arr1;
        temp[row][col] = val;
        setArr1(temp);
      }}/>
    </div>
    <div className = "matrix2">
      <Rowpicker style = {{float: 'left'}} onChange = {rows => {setRows2(parseInt(rows))}}/>
      <Colpicker style = {{float: 'right'}} onChange = {cols => {setCols2(parseInt(cols))}}/>
      <br/>
      <Matrix rows = {rows2} cols = {cols2} onChange = {(val, row, col) => {
        let temp = arr2;
        temp[row][col] = val;
        setArr2(temp);
      }}/>
    </div>
    <Result matrix1 = {arr1} matrix2 = {arr2}/>
  </div>
  );
}

export default App;