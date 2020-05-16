import React from 'react';
import Bars from './Bars';
import Form from "./Form";


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        time:null,
        bars:[
         null
       ],
       maxValue:null,
       startAnim:false,
       growRate:10,
       currentTime:0
     
        }
      }

  
      grow = () => {
        if(this.state.startAnim===true){
            let tempBars = this.state.bars;
            
            for(let bar of tempBars) {//stop when max value is reached
              if(bar.currentValue>this.state.maxValue){
              clearInterval(this.timerID);
              }

            bar.currentValue = bar.currentValue + bar.currentDelta;//sum width
                
            for(let slope of bar.value){//change between deltas
                  if(bar.currentValue<slope.w){
                  bar.currentDelta = slope.delta;
                  break;
                  }else{
                    bar.currentDelta = 0;
                  }
                }
            }

            let currentTime= this.state.currentTime;//Time counter, Width axis
            currentTime++;
            
            this.setState({bars: tempBars,currentTime: currentTime})
        } 
      }

      startAnim = (barsFromForm) =>{
            //Prevent animation if not enough data is provided
            console.log(barsFromForm);
            if(barsFromForm[0]===null){console.log("Not enough data to perform animation");return}
            //For some reason this array converts to an object
            //So I had to reverse it to an array
            let tempBars = Object.entries(barsFromForm).map(a=>a[1]);
            let barId = 0;
            let tempMaxValue = 0;
            for(let bar of tempBars){ 
                barId++;
                let tempValueWithDelta = [];
                let x = 0;
                let y = 0;
                  for(let pairWT of bar.value){
                    let delta = (pairWT.w-y)/(pairWT.t-x);
                    x = pairWT.t;
                    y = pairWT.w;
                    let appendedD = {...pairWT, delta: delta/10}
                    tempValueWithDelta.push(appendedD);
                    if(y>tempMaxValue){tempMaxValue = y};//Search for maxValue
                  }
                bar.value= tempValueWithDelta;
                bar.currentDelta = bar.value[0].delta;
                bar.currentValue=1;
                bar.key = barId;
                delete bar.stopNumber;
                
            }
                 
              
            this.setState({startAnim:true,bars:tempBars,maxValue:tempMaxValue});
      }
    
      componentDidMount() { this.timerID = setInterval(() => this.grow(),this.state.growRate);}
      componentWillUnmount() {clearInterval(this.timerID); }
     
      


      render(){
          let bars;
          let form;
          let counter;
          if(this.state.startAnim===true){
              bars = <Bars bars={this.state.bars} grow={this.grow}/>;
              counter = <div id="counter">t: {parseInt(this.state.currentTime/10)}</div>;
              form = null;
            }else{
              bars=null;
              form = <Form startAnim={this.startAnim}/>;
            }
 
          return (
            <div className="App">
            
          
            {bars}
            {form}
            {counter}
            </div>
          );
        }
}

export default App;
