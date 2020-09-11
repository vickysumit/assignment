import React, { useState, Component } from 'react';
import { items } from "../shared/dishes";
import "../css/styles.css";
import pizza from './pizza.jpg';
import micro from './m1.jpg';
import { IMAGES } from "../shared/images";

import {   Carousel,
    CarouselItem,
    CarouselControl,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button,
    CarouselIndicators,
    CarouselCaption,CardImgOverlay } from "reactstrap";

    const Example = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = items.map((item) => {
          return (
            <CarouselItem  
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} width="300" height="300" id="imagec" className=""/>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
      
        return (
          <Carousel 
            activeIndex={activeIndex}
            next={next}
            previous={previous}
             
          >
            <CarouselIndicators className="" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl className="text-primary" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        );
      }

class Home extends Component{
    constructor(props){
      super(props);
      this.state ={
        images:IMAGES
      }
    }

    render(){
      const imagerender = this.state.images.map((img) => {
        return(
          <div key={img.id} className="col-12 col-md-2 ml-1 mb-5 " >
             <Card id="card">
               <CardImg src ={img.image} alt={img.name} width="350" height="250" className="img-fluid p-2" ></CardImg>
                    <CardTitle>
                       
                          {img.name}
                        
                    </CardTitle>
             </Card>
          </div>
        )
      })
      return(
          <div>
              <div className="container">
                  <div className="row">
                      <div className=" col bg-secondary mb-5" id="carosel">
                          <Example />
                      </div>                   
                  </div>
                  <h2>Popular Products</h2> <hr />

                  <div  className="row justify-content-between mt-5">
                        {imagerender}
                  </div>
                  
              </div>
          </div>
      )
  }
    }


export default Home;