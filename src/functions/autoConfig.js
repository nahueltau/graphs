  
    let autoConfig = (handleConfig,handleInput)=>{
        let event = new Event('build');
        let eventDispatcher = (id,value,handler,event)=>{
            document.getElementById(id).addEventListener('build',(e)=>{handler(e)});
            document.getElementById(id).value = value;
            document.getElementById(id).dispatchEvent(event);
          }
        eventDispatcher("xb",5,handleConfig,event);
            
        setTimeout(()=>{
            
                eventDispatcher("0n","Argentina",handleConfig,event);
                eventDispatcher("1n","Brasil",handleConfig,event);
                eventDispatcher("2n","Uruguay",handleConfig,event);
                eventDispatcher("3n","Colombia",handleConfig,event);
                eventDispatcher("4n","Venezuela",handleConfig,event);
                eventDispatcher("0s",3,handleConfig,event);
                eventDispatcher("1s",2,handleConfig,event);
                eventDispatcher("2s",3,handleConfig,event);
                eventDispatcher("3s",1,handleConfig,event);
                eventDispatcher("4s",2,handleConfig,event);
                eventDispatcher("0c","Indigo",handleConfig,event);
                eventDispatcher("1c","Gold",handleConfig,event);
                eventDispatcher("2c","Orchid",handleConfig,event);
                eventDispatcher("3c","Olive",handleConfig,event);
                eventDispatcher("4c","Tomato",handleConfig,event);
                document.querySelectorAll(".color-circle-in")[0].style="background-color:indigo";
                document.querySelectorAll(".color-circle-in")[1].style="background-color:gold";
                document.querySelectorAll(".color-circle-in")[2].style="background-color:orchid";
                document.querySelectorAll(".color-circle-in")[3].style="background-color:olive";
                document.querySelectorAll(".color-circle-in")[4].style="background-color:tomato";
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

            eventDispatcher("30w",900,handleInput,event);
            eventDispatcher("30t",150,handleInput,event);

            eventDispatcher("40w",600,handleInput,event);
            eventDispatcher("40t",50,handleInput,event);
            eventDispatcher("41w",2200,handleInput,event);
            eventDispatcher("41t",160,handleInput,event);

        },20)
       
    }    

    export {autoConfig};
    