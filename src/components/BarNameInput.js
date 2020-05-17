import React,{useState} from "react"

function BarNameInput(props){
    let [names, setNames] = useState([]);
    return(
    <div className="card-name">
         <div>Bar Title</div> <input type="text" maxLength="10" id={props.barID.toString()+"n"} onChange={(e)=>{props.handleConfig(e);names[props.barID]=e.target.value ;setNames(names);}}/>
     </div>

    )
}

export default BarNameInput