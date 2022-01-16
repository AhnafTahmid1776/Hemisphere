import React from 'react';
import northernpic from './image/northernimage.jpg';
import southernpic from './image/southernimage.jpg';
import './hemisphere.css';

const hemisphereConfig = {
    Northern: {
     text: 'it is northern hemisphere',
     picture:northernpic
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture:southernpic
    }
}
const HemisphereDisplay = ({latitude}) => {
    
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    // const picture = latitude > 0 ? northernpic : southernpic;
    const{text, picture }= hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                <img src={picture} alt='hemisphere picture'></img>  
                </div>
            <div className='ui teal bottom attached'>
            <h1>{ text }</h1>
            </div>
            
            </div>
            
        </div>
    )
}
export default HemisphereDisplay;