import React from 'react'

const charComponent = (props) =>{
 return(
     <p className="char" id={props.id} onClick={props.handler}>{props.char}</p>
 )
}

export default charComponent