import React from 'react'
import Image from './Image'

function Card(props) {
   return(
    <>
    <div className="class1">
        {(props.id)%2 ? <div className='image-box'>
        <Image styles="image" img={props.img}/>
        </div> : ""}
        
        
        
        <div className="img-text">
            <h3 className="text-head">Get your diet profile for free!!</h3>
            <p className="text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
                   
        </div>
        {!((props.id)%2) ? <div className='image-box'>
        <Image styles="image" img={props.img}/>
        </div> : ""}
    </div>
    </>
   )
}
export default Card 