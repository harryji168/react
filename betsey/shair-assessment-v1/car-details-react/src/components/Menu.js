import React, { Component } from 'react'
import { Menu, Segment,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) =>{
    return( this.setState(
      { activeItem: name }
      )
      )
    }
  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary id="menu-items">

          <Menu.Menu>
            <Image src="https://www.shairyourcar.com/wp-content/uploads/2020/12/shair-whitelogo-2-1.png" alt="shair_logo" size='small' />
           
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Link to="/">
                <Menu.Item
                    name='home'
                    id="home-menu"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    className="menu-text"
                    
                />
            </Link>
           <Link to="/payment">
            <Menu.Item
              name='payment'
              id="payment-menu"
              active={activeItem === 'payment'}
              onClick={this.handleItemClick}
              className="menu-text"
              
            />
          </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
