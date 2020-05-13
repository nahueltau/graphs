import React, {useState} from 'react';

function Iball(props){


    return(
        <div className="i-ball">
        i  <div className="i-ball-content">{props.children}</div>
        </div>
    )    
}

export default Iball