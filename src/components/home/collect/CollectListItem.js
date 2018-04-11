import React from 'react';
import './collectListItem.css';

class CollectListItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleTouchMove(ev) {
    ev.stopPropagation();
    console.log(ev.target);
    console.log(ev.target.parentNode);
    const moveEndX = ev.targetTouches[0].pageX;
    let offsetX = moveEndX-this.startX;
    if (offsetX < 0) { // 向左滑动
      if (Math.abs(offsetX) >= 80) {
        offsetX = -80;
      }
      ev.target.parentNode.parentNode.parentNode.style.left = offsetX + 'px';
    } else {// 向右滑动
      ev.target.parentNode.parentNode.parentNode.style.left = 0 + 'px';
    }
  }

  handleTouchStart(ev) {
    this.startX = ev.targetTouches[0].pageX;
  }

  deleteItem() {
    console.log('delete');
  }

  render() {
    const {itemData} = this.props;
    return (
        <li className="collect_li">
          <div
            className="collect_div_wrap"
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}>
            <div className="collect_left">
              <img src={itemData.icon} alt="1" />
              <div>
                <h4>{itemData.title}</h4>
                <p>{itemData.content}</p>
              </div>
            </div>
            <div className="deleteWrap" onClick={this.deleteItem}>
              <img src={itemData.delIcon} />
            </div>
          </div>
        </li>
    );
  }
}

export default CollectListItem;