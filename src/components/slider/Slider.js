import React from 'react';
import './slider.css';

class Slider extends React.Component {
  constructor(props){
    console.log('Slider-constructor');
    super(props);
    const slides = props.slides;
    this.state={
      activeSlide: 0,
      slides
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.onChildChange = this.onChildChange.bind(this);
  }

  nextSlide(){
    const {slides, activeSlide} = this.state;
    const slide = activeSlide + 1 < slides.length ? activeSlide + 1 : 0;
    this.setState({
      activeSlide: slide
    });
  }

  previousSlide(){
    const {slides, activeSlide} = this.state;
    const slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
    this.setState({
      activeSlide: slide
    });
  }

  componentDidMount(){
    console.log('Slider-componentDidMount');
    setInterval(()=>this.nextSlide(),this.props.time);
  }

  onChildChange(newVal){
    if(newVal=="向左") {
      this.previousSlide();
    } else if(newVal=="向右") {
      this.nextSlide();
    }
  }

  render() {
    const {slides, activeSlide} = this.state;
    const slide = slides.map((slide, index, array) => {
      return(
        <Slide
          key={index}
          background={slide.background}
          active={index === activeSlide}
          link={slide.link}
          change={() => this.onChildChange} />
      )
    });
    return(
      <div className="slider">
        {slide}
        <div className="slider__next" onClick={ev => {this.nextSlide()}}>
          <i className="fa fa-4x fa-arrow-circle-right"></i>
        </div>
        <div className="slider__previous" onClick={ev => {this.previousSlide()}}>
          <i className="fa fa-4x fa-arrow-circle-left"></i>
        </div>
      </div>
    );
  }
}

class Slide extends React.Component{
  constructor(props){
    super(props);
    this.state={
      startX:"",
      startY:"",
      endX:"",
      endY:""
    };
  }

  touchStart(ev){
    this.setState({
      startX:ev.touches[0].pageX,
      startY:ev.touches[0].pageY
    })
  }

  touchEnd(ev){
    this.setState({
      endX:ev.changedTouches[0].pageX,
      endY:ev.changedTouches[0].pageY
    });
    const {startX, startY, endX, endY} = this.state;
    const that = this;
    const direction = this.GetSlideDirection(startX, startY, endX, endY);
    switch(direction) {
      case 0:
        console.log("没滑动");
        break;
      case 1:
        console.log("向上");
        break;
      case 2:
        console.log("向下");
        break;
      case 3:
        console.log("向左");
        that.props.change("向左");
        break;
      case 4:
        console.log("向右");
        that.props.change("向右");
        break;
      default:
    }
  }

  GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
  }

  GetSlideDirection(startX, startY, endX, endY) {
    const dy = startY - endY;
    const dx = endX - startX;
    let result = 0;
    //如果滑动距离太短
    if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result;
    }

    const angle = this.GetSlideAngle(dx, dy);
    if(angle >= -45 && angle < 45) {
      result = 4;
    }else if (angle >= 45 && angle < 135) {
      result = 1;
    }else if (angle >= -135 && angle < -45) {
      result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
    }
    return result;
  }

  render(){
    const background = this.props.background;
    const link = this.props.link;
    const active = this.props.active;
    const slideStyle = {
      backgroundColor: background
    };
    return(
      <a href={link}>
        <div
          className="slider_slide"
          data-active={active}
          style={slideStyle}
          onTouchStart={ev=>{this.touchStart(ev)}}
          onTouchEnd ={ev=>{this.touchEnd(ev)}}>
        </div>
      </a>
    )
  }
}

export default Slider;