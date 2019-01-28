import React from 'react'

const validationComponent = (props) =>{
    return(
        <p className="validation" >{props.len < 5 ? "Too short":"Good" }</p>
    )
}

 export default validationComponent