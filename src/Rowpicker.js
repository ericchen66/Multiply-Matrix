import React, {useState} from "react";

function Rowpicker({onChange}){
    const [rows, setRows] = useState(0);
    return(
        <div>
        <h3>Rows</h3>
        <textarea className = "text" onChange={e => setRows(e.target.value)}></textarea>
        <div/>
        <button onClick={e => 
        
        {if(!isNaN(rows) && rows <= 8 && rows >= 1){
            onChange(rows)
        }
        
        }}>Set Rows</button>
        </div>
    );
}

export default Rowpicker;