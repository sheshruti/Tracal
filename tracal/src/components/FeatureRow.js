import React from 'react'
import Feature from './Feature'

function Row(props){
    return(
        
        <div className="row">
        <Feature head={props.heads[0]} desc={props.body[0]} />
        <Feature head={props.heads[1]} desc={props.body[1]}/>
        <Feature head={props.heads[2]} desc={props.body[2]}/>
        </div>
    )
}
export default Row