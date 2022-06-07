import React from 'react'

function Image(props){
    return(
        <>
        <img className={props.styles} src={props.img} alt="img not found"/> 
        </>
    )
}
export default Image ;