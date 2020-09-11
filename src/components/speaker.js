import React, { Component } from 'react';
import i1 from './images/i1.jpg';
import i2 from './images/i2.jpg';
import i3 from './images/i3.jpg';
import i4 from './images/i4.jpg';

import i6 from './images/i6.jpg';
import i7 from './images/i7.jpg';
import i8 from './images/i8.jpg';
import i9 from './images/i9.jpg';
import i10 from './images/i10.jpg';
class Speaker extends Component{
    constructor(props)
    {
        super(props);

    }

    render(){
        return(
            <div id="f"> 
                <img src={i1} alt="i1"></img>
                <img src={i2} alt="i2"></img>
                <img src={i3} alt="i3"></img>
                <img src={i4} alt="i4"></img>               
                <img src={i6} alt="i6"></img>
                <img src={i7} alt="i7"></img>
                <img src={i8} alt="i8"></img>
                <img src={i9} alt="i9"></img>
                <img src={i10} alt="i10"></img>
            </div>
        )
    }
}
export default Speaker;