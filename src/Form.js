import React from "react";
import FormBar from "./FormBar"

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
            Bars:[
                null
            ],
            barNumber:0
            
        }
    }
      handleConfig = (e)=>{
        let barNumber = this.state.barNumber; 
        let newBars = [...this.state.Bars];
        let name;
        let stops;
        let color;
        let n = e.target.id[1];
        
        let o = e.target.id[0];
        if(n==="n"){
            name = e.target.value;
            newBars[o] = {...newBars[o],name:name};
        }
        if(n==="s"){
            stops = e.target.value;
            newBars[o] = {...newBars[o],stopNumber:parseInt(stops)};
            let numberOfPairs = ()=>{let array=[];let p =0; while( p <parseInt(stops)){array.push({t:null,w:null});p++}return array;};
            
            newBars[o] = {...newBars[o], value:[...numberOfPairs()]} 
        }
        if(n==="b"){
            barNumber = e.target.valueAsNumber;
            
        }      
        if(n==="c"){
            color = e.target.value;
            newBars[o] = {...newBars[o],color:color};
           
        }    
        
        this.setState(
            { Bars: newBars,barNumber:barNumber}
         )
         
      }
      handleInput= (e)=>{
        let newBars = [...this.state.Bars];
      
        let m = e.target.id[2];
        let n = e.target.id[1];
        let o = e.target.id[0];
       
         newBars[o].value[n][m] = parseInt(e.target.value);
        
        this.setState(
           { Bars: newBars}
        )
        
      }
 
    render(){

        return(
                
            <div> 
               
               
                <FormBar barNumber={this.state.barNumber} Bars={this.state.Bars} startAnim={this.props.startAnim} handleInput={this.handleInput} handleConfig={this.handleConfig}/>
             
              

            </div>



        )



    }
}

export default Form;






