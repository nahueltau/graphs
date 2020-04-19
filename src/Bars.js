import React from 'react';

function Bars({bars}){


    let createMultiplicator = (bars) =>{//scales the bars when exceeds some width
        let orderedArray = [];
        let multiplicator = 1;
        for(let bar of bars){
            orderedArray.push(bar.currentValue)
        }
        orderedArray.sort(function(a, b){return b-a});
        if(orderedArray[0]>800){
            multiplicator = 800/orderedArray[0];
        }
        return multiplicator;
    }
    let position = (bars,bar) => {//vertical positioning of the bars
        let orderedArray = [];
        for(let bar of bars){
            orderedArray.push(bar.currentValue)
        }
        orderedArray.sort(function(a, b){return b-a});
        let pos;
        for(let val of orderedArray){
            if(0.999<val/bar.currentValue && val/bar.currentValue<1.001){
                pos = orderedArray.indexOf(val)+1;
            }
        }
        return pos;
    }
    
    return(
        <div className="barContainer" style={{height:(bars.length)*100+"px"}}>
        <div className="title">Graphs</div>
        {bars.map(bar => {
            return( 
                <div key={bar.key} className="bar" style={{width: bar.currentValue*createMultiplicator(bars) + "px", top:position(bars, bar)*100-100}} >
                    <p className="barTitle"> {bar.name} </p> 
                    <p className="counter">{parseInt(bar.currentValue)}</p>
                </div>
                )
                }
            )}

        </div>
       
        )
    
  
};



export default Bars;