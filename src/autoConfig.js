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
        
        
    let autoConfig2 = (handleConfig,handleInput)=>{
        let event = new Event('build');
        document.getElementById("xb").addEventListener('build',(e)=>{handleConfig(e)});
        document.getElementById("xb").value = demo.length;
        document.getElementById("xb").dispatchEvent(event);
        setTimeout(()=>{
            let event = new Event('build');
            for(let i =0;i<demo.length;i++){
                let u = i + "n";
                let v = i + "s";
                document.getElementById(u).addEventListener('build',(e)=>{handleConfig(e)});
                document.getElementById(u).value = demo[i].name;
                document.getElementById(u).dispatchEvent(event);
                document.getElementById(v).addEventListener('build',(e)=>{handleConfig(e)});
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
                    document.getElementById(u).addEventListener('build',(e)=>{handleInput(e)});
                    document.getElementById(u).value = demo[i].values[e];
                    document.getElementById(u).dispatchEvent(event);
                    document.getElementById(v).addEventListener('build',(e)=>{handleInput(e)});
                    document.getElementById(v).value = e;
                    document.getElementById(v).dispatchEvent(event);
                }

            }

        },20)
    }
  
    let autoConfig = (handleConfig,handleInput)=>{
        let event = new Event('build');
        let eventDispatcher = (id,value,handler,event)=>{
            document.getElementById(id).addEventListener('build',(e)=>{handler(e)});
            document.getElementById(id).value = value;
            document.getElementById(id).dispatchEvent(event);
          }
        eventDispatcher("xb",3,handleConfig,event);
            
        setTimeout(()=>{
            
                eventDispatcher("0n","Argentina",handleConfig,event);
                eventDispatcher("1n","Brasil",handleConfig,event);
                eventDispatcher("2n","Uruguay",handleConfig,event);
                eventDispatcher("0s",3,handleConfig,event);
                eventDispatcher("1s",2,handleConfig,event);
                eventDispatcher("2s",3,handleConfig,event);
                eventDispatcher("0c","Indigo",handleConfig,event);
                eventDispatcher("1c","Gold",handleConfig,event);
                eventDispatcher("2c","Pink",handleConfig,event);
                document.querySelectorAll(".color-circle-in")[0].style="background-color:indigo";
                document.querySelectorAll(".color-circle-in")[1].style="background-color:gold";
                document.querySelectorAll(".color-circle-in")[2].style="background-color:pink";
            },20)
        setTimeout(()=>{
            eventDispatcher("00w",500,handleInput,event);
            eventDispatcher("00t",50,handleInput,event);
            eventDispatcher("01w",1000,handleInput,event);
            eventDispatcher("01t",80,handleInput,event);
            eventDispatcher("02w",2000,handleInput,event);
            eventDispatcher("02t",150,handleInput,event);
            
            eventDispatcher("10w",400,handleInput,event);
            eventDispatcher("10t",50,handleInput,event);
            eventDispatcher("11w",2500,handleInput,event);
            eventDispatcher("11t",160,handleInput,event);

            eventDispatcher("20w",200,handleInput,event);
            eventDispatcher("20t",50,handleInput,event);
            eventDispatcher("21w",1000,handleInput,event);
            eventDispatcher("21t",120,handleInput,event);
            eventDispatcher("22w",2100,handleInput,event);
            eventDispatcher("22t",160,handleInput,event);

        },20)
       
    }    

    export {demo, autoConfig, autoConfig2};
    