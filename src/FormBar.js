import React, {useState} from 'react';
import Iball from "./Iball"

function FormBar (props){
    let scrollTemp;
    let _scroll =false;
    let [names, setNames] = useState([]);
    let [colors, setColors] = useState([]);
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
    let createInputs = (i)=>{
        if((props.Bars[i] !== undefined && props.Bars[i] !== null) && (props.Bars[i].stopNumber !== undefined && props.Bars[i].stopNumber !== null)){
        
         let inputs = [];
                for (let el = 0; el < props.Bars[i].stopNumber; el++) {
                   inputs.push(<div className="data-pair" key={el+1}>
                
                  <div className="data-input">
                     <input type="text" placeholder="" id={i.toString()+el.toString()+"w"} onChange={(e)=>{props.handleInput(e)}}/> 
                     <div>Value {el+1}</div> 
                  </div>
                  <div className="data-input">
                    <input type="text" placeholder="" id ={i.toString()+el.toString()+"t"} onChange={(e)=>{props.handleInput(e)}}/>
                    <div>Time {el+1}</div>
                  </div>
                  
                </div>)}
        return inputs
    }
    }
    let createBars = ()=>{
           
            let bars = [];
                for (let i = 0; i < props.barNumber; i++) {
                    bars.push(<div key={i+1} className="form-card">
                               
                                <div className="card-title">{names[i] || "Bar "+(i+1)}</div>
                                <div className="card-name">
                                    <div>Name</div> <input type="text"  id={i.toString()+"n"} onChange={(e)=>{props.handleConfig(e);names[i]=e.target.value ;setNames(names);}}/>
                                </div>
                                <div className="card-color">
                                    <div>Color</div> 
                                    <div className="card-color-input">
                                        <input type="text" id={i.toString()+"c"} onChange={(e)=>{props.handleConfig(e);colors[i]=e.target.value ;setColors(colors);}}/>
                                        <div className="color-circle-out"><div className="color-circle-in" style={{backgroundColor:colors[i]}}></div></div>
                                    </div>
                                 
                                </div>
                                <div className="card-stop">
                                    <div>Stops</div> 
                                    <div className="input-with-buttons">
                                      <div className="circle-button">-</div>
                                     <input type="text" id={i.toString()+"s"} onChange={(e)=>{props.handleConfig(e)}}/>
                                     <div className="circle-button">+</div>
                                     </div> 
                                </div>
                                {createInputs(i)}
                               
                                </div>)
                    
                }
                let scroll
                if(bars.length!==0){
                   scroll=<div className="config">
                   <div className="scroll-element" >
                    <p>Scroll</p>
                        <div className="scroll">
                                
                                    <div className="scroll-bump"></div>
                                    <div className="scroll-bump-shadow" id="scrollWheel"  onMouseDown={(e)=>{handleScroll(e)}}></div>
                                
                                        <div className="scroll-shadow"></div>
                                    <div className="scroll-light"></div>
                                
                        </div>
                    </div>;
                    <div className="flex-container" id="Scroll">
                    {bars}
                    </div>
                    </div>;
                    
                }
                return scroll;
        }
    

        const demo=
            [{ name:"Argentina",
                values:[
                    33985, 40655, 37908, 41468 , 47637 ,51741 ,54575 ,61662 ,63865 ,73987 ,226569,184014 ,91376 ,112721,126563 ,95593 ,114949 ,117854 ,138044 ,88567 ,153205 ,205515 ,247987 ,256365 ,279150 ,280080 ,295120 ,317549 ,324242	,307673,308491 ,291738 ,108731 ,138151 ,164922 ,199273 ,232892	,287920	,363545 ,334633 ,424728 ,527644 ,579666 ,611471	,563614 ,631621 ,554107 ,642928 ,518092,477743
                ]
            },
            {name:"Brazil",
                values:[
                    35214, 	39332, 	50624 ,	71673, 	91888, 	108051, 	127741, 	148672, 	168803, 	186095 , 152154 ,	174864 ,	186950 ,	149893, 	149168 ,	236798 ,	274694, 	298989, 	334013 ,	458527, 475119 ,	416596, 	399082, 	447832, 	558374, 	786479, 	850800 	,883534 ,	864017 ,	599438, 655454 ,	559982 ,	509798 ,	558232, 	669290, 	891633 ,	1107628 	,1397114 ,	1695855 ,	1669204, 2208704 	,2614027 	,2464053 	,2471718 ,	2456054 ,	1801482 ,	1793066 ,	2053208 ,	1868184 ,	1960190 
                ]
            },
            {name:"Spain",
                values:[
                    39801, 	45263 ,	57417 ,	76365 ,	94447 ,	111435 ,	115065, 	128590 ,	155939 ,	208351,  230189 	,204082 ,	197154 ,	172429, 	171955, 	181172 	,250683 ,	317602 ,	373143 	,411571 , 533945 ,	575184 ,	628611 ,	528008 ,	529824 ,	612413, 	638500 ,	587967 	,616957 ,	634384 , 597149 ,	626514 	,707642 ,	908588 	,1071007, 	1159257 ,	1265661 ,	1481393 ,	1642738 ,	1502876 , 1434257 ,	1489381 ,	1336685 ,	1362202 	,1378042, 	1193556 	,1237766, 	1316951 	,1425865 ,	1429140 
                ]
            },
            {name:"South Korea",
                values:[
                    8936 ,	9894 ,	10794 ,	13805 ,	19397 ,	21648 ,	29774 ,	38227 ,	51539 ,	66218,  65222, 	72426 ,	77768 ,	87027 ,	96596 ,	100288 	,115537 ,	146132 ,	196972 ,	243508 , 279215 ,	325713 ,	350078 	,386292 ,	455645 ,	556449 ,	598063, 	557547 ,	374140 ,	485257  , 561595 ,	533188 ,	609017 ,	680581 	,764892 ,	898137 	,1012044 	,1122679, 	1002219 ,	901935,  1094499 ,	1202464 ,	1222807 ,	1305605 ,	1411334 ,	1382764 	,1411042 	,1530751 ,	1619424 ,	1656674
                ]
            },
            {name:"Mexico",
                values:[
                    43426, 	47897 ,	55200 ,	67532 ,	87943 ,	107525 	,108589 ,	100097 ,	125438 ,	164346 ,  234618 	,301328 ,	218680, 	178282 	,210246 	,223104 ,	154470 ,	169397 ,	207235 ,	252549  , 298037 	,357292 ,	414348 ,	504022, 	527316 	,343814 ,	397402, 	480557, 	502029 ,	579452,    683650 	,724691 ,	741563 	,713283 ,	770270 ,	866346, 	966867 	,1043472 	,1101274 	,894950,  1051128 ,	1171185 ,	1186602 ,	1261983 ,	1298404 ,	1152266 	,1076914 	,1158229 	,1223359 ,	1241450 
                ]
                },
            {name:"Australia",
                values:[
                    45121 ,	50360 	,59269 ,	85621 ,	102047 ,	108853 ,	117298, 	116222 ,	135608 ,	150133 , 163085 ,	188596 ,	187233 ,	179654 ,	197330 ,	174556, 	181656 ,	213309 ,	271398, 	308276 ,  323921 	,324597 ,	318146 	,309639 ,	353222, 	379770, 	425593 ,	426674, 	381088 ,	411828  ,  399297 ,	376908 ,	424521 ,	540428 ,	657442 ,	734786, 	781934 ,	949164 ,	1057171 ,	997169 , 1249703, 	1504236 ,	1561052 	,1509639 ,	1449336 ,	1229938 ,	1264944 	,1386357 	,1418275 ,	1417003 
        
                ]
            },
            {name:"Belgium",
                values:[
                    26850 ,	29982 ,	37409 ,	47999 ,	56334 ,	66028 ,	71495 ,	83282 ,	101793 ,	116940 , 124137 ,	102813 	,90462 	,85500 	,81690 	,84950 	,117799 ,	146215 ,	158968, 	160706 ,  201235 ,	206535, 	230030 	,219932 ,	239931 ,	289904 ,	281467 ,	255170 ,	260971 	,260544,  238603 	,238046 ,	259777 ,	319613, 	371388 ,	388029, 	410173 	,472475 ,	521084 ,	485781 , 484450 	,527491 ,	498160 ,	520254 ,	532607 ,	455219, 	468148 	,495757 ,	533153 ,	531813  
        
                ]
            }]
        
        
    let autoConfig2 = ()=>{
        let event = new Event('build');
        document.getElementById("xb").addEventListener('build',(e)=>{props.handleConfig(e)});
        document.getElementById("xb").value = demo.length;
        document.getElementById("xb").dispatchEvent(event);
        setTimeout(()=>{
            let event = new Event('build');
            for(let i =0;i<demo.length;i++){
                let u = i + "n";
                let v = i + "s";
                document.getElementById(u).addEventListener('build',(e)=>{props.handleConfig(e)});
                document.getElementById(u).value = demo[i].name;
                document.getElementById(u).dispatchEvent(event);
                document.getElementById(v).addEventListener('build',(e)=>{props.handleConfig(e)});
                document.getElementById(v).value = demo[i].values.length/5;
                document.getElementById(v).dispatchEvent(event);
            }
        },20)
        setTimeout(()=>{
            let event = new Event('build');
            for(let i = 0; i<demo.length;i++){
                for(let e = 0; e<demo[i].values.length;e+5){
                    let u = i.toString()+e.toString()+"w";
                    let v = i.toString()+e.toString()+"t";
                    document.getElementById(u).addEventListener('build',(e)=>{props.handleInput(e)});
                    document.getElementById(u).value = demo[i].values[e];
                    document.getElementById(u).dispatchEvent(event);
                    document.getElementById(v).addEventListener('build',(e)=>{props.handleInput(e)});
                    document.getElementById(v).value = e;
                    document.getElementById(v).dispatchEvent(event);
                }

            }

        },20)
    }
    let autoConfig = ()=>{
        let event = new Event('build');
        document.getElementById("xb").addEventListener('build',(e)=>{props.handleConfig(e)});
        document.getElementById("xb").value = 3;
        document.getElementById("xb").dispatchEvent(event);
        setTimeout(()=>{
            let event = new Event('build');
            document.getElementById("0n").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("0n").value = "Argentina";
            document.getElementById("0n").dispatchEvent(event);
            document.getElementById("1n").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("1n").value = "Brasil";
            document.getElementById("1n").dispatchEvent(event);
            document.getElementById("2n").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("2n").value = "Uruguay";
            document.getElementById("2n").dispatchEvent(event);
            document.getElementById("0s").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("0s").value = 3;
            document.getElementById("0s").dispatchEvent(event);
            document.getElementById("1s").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("1s").value = 2;
            document.getElementById("1s").dispatchEvent(event);
            document.getElementById("2s").addEventListener('build',(e)=>{props.handleConfig(e)});
            document.getElementById("2s").value = 3;
            document.getElementById("2s").dispatchEvent(event);
        },20)
        setTimeout(()=>{
            let event = new Event('build');
            document.getElementById("00w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("00w").value = 500;
            document.getElementById("00w").dispatchEvent(event);
            document.getElementById("00t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("00t").value =50;
            document.getElementById("00t").dispatchEvent(event);
            document.getElementById("01w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("01w").value = 1000;
            document.getElementById("01w").dispatchEvent(event);
            document.getElementById("01t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("01t").value =80;
            document.getElementById("01t").dispatchEvent(event);
            document.getElementById("02w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("02w").value =2000;
            document.getElementById("02w").dispatchEvent(event);
            document.getElementById("02t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("02t").value =150;
            document.getElementById("02t").dispatchEvent(event);
            
            document.getElementById("10w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("10w").value = 400;
            document.getElementById("10w").dispatchEvent(event);
            document.getElementById("10t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("10t").value =50;
            document.getElementById("10t").dispatchEvent(event);
            document.getElementById("11w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("11w").value = 2500;
            document.getElementById("11w").dispatchEvent(event);
            document.getElementById("11t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("11t").value =160;
            document.getElementById("11t").dispatchEvent(event);

            document.getElementById("20w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("20w").value = 200;
            document.getElementById("20w").dispatchEvent(event);
            document.getElementById("20t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("20t").value =50;
            document.getElementById("20t").dispatchEvent(event);
            document.getElementById("21w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("21w").value = 1000;
            document.getElementById("21w").dispatchEvent(event);
            document.getElementById("21t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("21t").value =120;
            document.getElementById("21t").dispatchEvent(event);
            document.getElementById("22w").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("22w").value = 2100;
            document.getElementById("22w").dispatchEvent(event);
            document.getElementById("22t").addEventListener('build',(e)=>{props.handleInput(e)});
            document.getElementById("22t").value =160;
            document.getElementById("22t").dispatchEvent(event);
        },20)
       
    }    

    
       

    return(
        
        <div>
        <div className="nav-form">
        <div className="nav-form-left">
            <div className="title">Graphs</div>
             <div >
                
                <div className="input-with-buttons">
                <span>Bars</span>
                    <div className="circle-button">-</div>
                    <input type="text"  id={"xb"} onChange={(e)=>{props.handleConfig(e)}}/>
                    <div className="circle-button">+</div><Iball>Input the number of bars</Iball>
                </div>
            </div>
        </div>
        
        <div className="nav-form-buttons">
        <button className="start-button" onClick={()=>{props.startAnim(props.Bars)}}>Start</button>
        <button className="autoconfig-button" onClick={autoConfig}>Autoconfig</button>
        </div>
        
        </div>
      
       
      
        
        <div >
             {createBars()}
        </div> 
       
     
              
             
                </div>

    )



}

export default FormBar;