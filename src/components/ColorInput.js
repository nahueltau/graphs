import React, {useState} from 'react';

function ColorInput(props){
    
let [colors, setColors] = useState([]);

return(
    <div className="card-color">
                <div>Color</div> 
                <div className="card-color-input">
                    <input type="text" id={props.barID.toString()+"c"} onChange={(e)=>{props.handleConfig(e);colors[props.barID]=e.target.value ;setColors(colors);}}/>
                    <div className="color-circle-out"><div className="color-circle-in" style={{backgroundColor:colors[props.barID]}}></div></div>
                </div>
                
    </div>
 )
}

export default ColorInput