import React, { Component } from 'react'
import Menu from '../menu.svg'

export default class Header extends Component {
  render () {
    return(
      <header id='header'>
        <div className='title'>
          <h1 id='titlecontent'>
            <button onClick={() => this.props.onSetSidebarOpen(true)}>
              {!this.props.sidebarDocked && <img id='menubar' src={Menu} alt='Menu icon'/>}
            </button>

            <span id='headertext'>Restaurants</span>
          </h1>
        </div>
      </header>
    )
  }
}