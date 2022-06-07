import React from 'react'


function Feature(props){
    return(
        <div className="feature-box col-lg-4">
            <i style={{alignContent: "center"}} className="icon fas fa-check-circle fa-4x"></i>
            <h3 style={{textAlign: "center"}} className="feature-title">{props.head}</h3>
            <p style={{textAlign: "center"}}>{props.desc}</p>
          </div>
    )
}
export default Feature