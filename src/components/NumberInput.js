import React from 'react'

function NumberInput(props){
   
    return(
        <div className="data-input">
                     <input type="text" className="number-input" placeholder="" id={props.i.toString()+props.el.toString()+"w"} onChange={(e)=>{props.handleInput(e)}}/> 
                     <div>Value</div> 
        </div>

    )
}

export default NumberInput