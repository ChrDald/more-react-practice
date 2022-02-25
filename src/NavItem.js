import React from 'react';
import './NavItem.css';

class NavItem extends React.Component {

  handleOnClick = (event) => {
    this.props.onItemClick(event, this);
  }

  render() {
    return (
      <a 
        className={`nav-item ${this.props.isBrandNavItem ? "brand-text" : ""} ${this.props.isActive ? "active" : ""}`} 
        onClick={this.handleOnClick.bind(this)}
      >
        {this.props.text}
      </a>
    );
  }
}

export default NavItem;
