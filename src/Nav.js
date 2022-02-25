import React from 'react';
import './Nav.css';
import NavItem from './NavItem';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { text: "Champigons Maison", isBrandNavItem: true, isActive: true },
        { text: "À Propos" },
        { text: "Acheter Nos Produits" },
        { text: "Formations" },
        { text: "Instructions" },
      ]
    }
  }

  setActiveItem = (itemIndex) => {
    const navItems = this.state.navItems.slice();
    navItems.map(item => item.isActive = false);
    navItems[itemIndex].isActive = true;
    this.setState({ navItems: navItems });
  };
  
  render() {
    // todo: each item should probably be a component
    // pass it props for brand-text and isActive
    return (
      <nav className="nav navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { 
            this.state.navItems.map((item, index) => {
              return (
                <NavItem 
                  key={index}
                  isBrandNavItem={item.isBrandNavItem} 
                  isActive={item.isActive}
                  text={item.text} 
                  onItemClick={() => this.setActiveItem(index)}>
                </NavItem>
              )
            })
          }
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );   
  }
}

export default Nav;
