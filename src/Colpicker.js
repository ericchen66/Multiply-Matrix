import React, {useState} from "react";

function Colpicker({onChange}){
    const [cols, setCols] = useState(0);
    return(
        <div>
        <h3>Columns</h3>
        <textarea className = "text" onChange={e => setCols(e.target.value)}></textarea>
        <div/>
        <button onClick={e => 
        
        {if(!isNaN(cols) && cols <= 8 && cols >= 1){
            onChange(cols)
        }
        
        }}>Set Columns</button>
        </div>        
    );
}

export default Colpicker;