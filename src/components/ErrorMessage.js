import React from 'react'

function ErrorMessage(props){
   
    return(
        <div className="error-message" id={props.id}>
            {props.children}
        </div>
    )
}

export default ErrorMessage