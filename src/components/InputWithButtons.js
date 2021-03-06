import React from 'react';
import Iball from './Iball'
function InputWithButtons(props){
    
    function changeVal(val){
        let input = document.getElementById(props.ident);
        
        //Max and Min values
        if((Number(input.value)===0 && val===-1)||(Number(input.value)===8 && val===1)){
            return;
        }
        
        input.value = Number(input.value) + val;
        
        (function fireEvent(){
            let ev = new Event('build');
            input.addEventListener('build',(e)=>{props.handle(e)});
            input.dispatchEvent(ev)
        })()
        
}
   
return(
    <div className="card-stop">
        <div>{props.title}</div>
    <div className="input-with-buttons">
            
                    <div className="circle-button" onClick={()=>{changeVal(-1)}}>-</div>
                    <input readOnly type="text" className="small-number-input" placeholder="0" id={props.ident} onChange={(e)=>{props.handle(e)}}/>
                    <div className="circle-button" onClick={()=>{changeVal(1)}}>+</div>
                    <Iball>{props.iball}</Iball>
                </div>
                

 </div>
)

}

export default InputWithButtons