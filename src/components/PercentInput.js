import React from 'react'

function PercentInput(props){
   
    return(
        <div className="data-input">
        <input type="text" className="percent-input" placeholder="" id={props.i.toString()+props.el.toString()+"t"} onChange={(e)=>{props.handleInput(e)}}/>
        <div>At %</div>
      </div>

    )
}

export default PercentInput