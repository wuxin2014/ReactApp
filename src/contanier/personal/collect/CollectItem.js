import React from 'react';
import './collectItem.css';

class AddressItem extends React.Component {

  render() {
    const {itemData} = this.props;
    return (
        <li className="collect-item">
          <div className="collect" ref="collect-dom">
            <img src={itemData.icon} alt="1" />
            <div>
              <h4>{itemData.title}</h4>
              <p>{itemData.content}</p>
            </div>
          </div>
          <p className="handle" ref="handle">
            <img src={itemData.delIcon} />
          </p>
        </li>
    )
  }

  componentDidMount() {
    const maxOffset = this.refs.handle.clientWidth;
    const collectDom = this.refs['collect-dom'];
    let offsetL = 0, startTime = 0, startX = 0, startOffset = 0;

    const startHandler = function(event) {
      startTime = Date.now();
      startX = event.touches[0].pageX;
      offsetL = 0;
    };

    const moveHandler = function(event) {
      event.preventDefault();
      let currentOffset = event.touches[0].pageX - startX;
      if((currentOffset > 0 && startOffset === 0)
          || (currentOffset < 0 && startOffset === -maxOffset)) {
        startX = event.touches[0].pageX;
        offsetL = startOffset;
      }else {
        if(Math.abs(currentOffset) > maxOffset){
          offsetL = -maxOffset - startOffset + (maxOffset + currentOffset) * 0.05
        }else {
          offsetL = currentOffset + startOffset
        }
      }

      collectDom.style.webkitTransition = "-webkit-transform 0s ease-out";
      collectDom.style.webkitTransform = "translate3d("+offsetL+"px,0,0)";
    };

    const endHandler = function(event) {
      collectDom.style.webkitTransition = "-webkit-transform 0.2s ease-out"
      startOffset = offsetL = Math.abs(offsetL) > maxOffset/2 ? -maxOffset : 0;
      collectDom.style.webkitTransform = "translate3d("+offsetL+"px,0,0)";
    };

    collectDom.addEventListener('touchstart',startHandler,false);
    collectDom.addEventListener('touchmove',moveHandler,false);
    collectDom.addEventListener('touchend',endHandler,false);
  }
}

export default AddressItem;