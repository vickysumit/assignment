import React, {  Component } from 'react';
import { Media } from "reactstrap";
import logo from './admin.png'
class About extends Component{
    constructor(props){
        super(props);

        this.state ={

        }
    }

    render(){
        return(
            <div id="g">
               <img src={logo}></img>
               <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </div>
        );
    }
}

export default About;
