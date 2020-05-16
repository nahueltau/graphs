import React from "react";
import Iball from "./components/Iball"
import BarConfigCard from "./components/BarConfigCard"
import ScrollElement from "./components/ScrollElement"
import InputWithButtons from "./components/InputWithButtons"
import {autoConfig} from "./autoConfig"

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
        if(n==="n"){//NAME
            name = e.target.value;
            newBars[o] = {...newBars[o],name:name};
        }
        if(n==="s"){//STOPS
            stops = e.target.value;
            newBars[o] = {...newBars[o],stopNumber:parseInt(stops)};
            let numberOfPairs = ()=>{
                let array=[]; 
                if(newBars[o].value){
                    array = [...newBars[o].value];
                    if(array.length<parseInt(stops)){
                        let p =0;
                        while( p <(parseInt(stops)-array.length)){array.push({t:null,w:null});p++}
                       
                    }
                    if(array.length>parseInt(stops)){
                        let p =0;
                        while( p <(array.length-parseInt(stops))){array.pop(1);p++}
                       
                    }
                }
                    else{//MAINLY FOR AUTOCOMPLETE
                        let p =0;
                        while( p <parseInt(stops)){array.push({t:null,w:null});p++}
                    }

                return array;
            };
            
            newBars[o] = {...newBars[o], value:[...numberOfPairs()]} 
        }
        if(n==="b"){//BAR NUMBER
            barNumber = e.target.value;
            
        }      
        if(n==="c"){//COLOR
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
        
        let cardsContainerWrapper;
        let barsCardContainer = [];
            for (let i = 0; i < this.state.barNumber; i++) {
                barsCardContainer.push(<BarConfigCard barID={i} handleConfig={this.handleConfig} handleInput={this.handleInput} Bars={this.state.Bars} key={i+1}></BarConfigCard>) 
            }
            
            if(barsCardContainer.length!==0){
               cardsContainerWrapper=<div className="config">
                                <ScrollElement></ScrollElement>
                                <div className="flex-container" id="Scroll">{barsCardContainer}</div>
                          </div>;     
            }


        return(
                
            <div> 
               
               <div className="nav-form">
                    <div className="nav-form-left">
                        <div className="title">Graphs</div>
                        <div >
                            <div className="flex-row">
                            <InputWithButtons ident={"xb"} handle={this.handleConfig} title={"Bars"}></InputWithButtons>
                        
                            <Iball>Input the number of bars</Iball>
                            </div>
                        </div>
                    </div>
            
                    <div className="nav-form-buttons">
                        <div className="flex-row">
                            <button className="start-button" onClick={()=>{this.props.startAnim(this.state.Bars)}}>Start</button>
                            <Iball>Start the animation</Iball>
                        </div>
                        <div className="flex-row">
                            <button className="autoconfig-button" onClick={()=>{autoConfig(this.handleConfig , this.handleInput)}}>Autoconfig</button>
                            <Iball>Click here to automatically get demo values</Iball>
                        </div>
                    
                    </div>
        
            </div>
      
       
      
        
                
                    {cardsContainerWrapper}
            
                
             
              

            </div>



        )



    }
}

export default Form;






