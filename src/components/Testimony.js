import React from "react";
import '../style-sheet/Testimony.css'

function Testimony(props ) {
  return (
    <div className='testimony-container'>
      <img 
        className= 'testimony-image' 
        src={require(`../images/testimony-${props.image}.png`)} 
        alt="Emma's image"/>
      <div className='testimony-text-container'>
        <p className='testimony-name'>{props.name} in {props.country}</p>
        <p className='testimony-position'>{props.position} in {props.company}</p>
        <p className='testimony-text'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;