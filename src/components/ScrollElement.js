import React from 'react';

function ScrollElement(){
    let scrollTemp;
    let _scroll =false;
   
    let handleMouseMove = (e)=>{
       if(_scroll){
        
        let scrollMoveX = e.clientX-scrollTemp>0 ? 10 : -10;
        console.log(scrollMoveX)
        let element = document.getElementById("Scroll");
       
        element.scrollBy(scrollMoveX,0);}
    }
    let handleScroll = (e)=>{
        scrollTemp= e.clientX;
        
        let wheel = document.getElementById("scrollWheel");
        wheel.addEventListener("mousemove",(e)=>{ handleMouseMove(e)})
        let stop =document.getElementsByTagName("body");
        stop[0].addEventListener("mouseup",()=>{ handleEndScroll()})
        _scroll =true;
    }
    let handleEndScroll= ()=>{
       
        _scroll =false;
        console.log(_scroll)
    }
   
    
    return(
        <div className="scroll-element" >
        <p>Scroll</p>
            <div className="scroll">
                    
                        <div className="scroll-bump"></div>
                        <div className="scroll-bump-shadow" id="scrollWheel"  onMouseDown={(e)=>{handleScroll(e)}}></div>
                    
                            <div className="scroll-shadow"></div>
                        <div className="scroll-light"></div>
                    
            </div>
        </div>
    )
}

export default ScrollElement