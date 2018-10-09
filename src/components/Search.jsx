import React, { Component } from 'react';

export default class Search extends Component {

  handleListClick = (e) => {
    this.props.updateSelectedListId(e.target.id)
    this.props.setCurrMarkerId(e.target.id)
  }

  render() {
    const restaurants = this.props.restaurants

    return (
      <div id='sidebar' style={{width: 256, height: '100%'}} >
        <div className='title'><h1>Best Restaurants</h1></div>

        <div id='search'>
          <input
            id='input'
            placeholder='Search by name'
            onFocus={ ele => ele.target.placeholder = ''}
            onBlur={ ele => ele.target.placeholder = 'Search by name'}
            onChange={(e) => this.props.handleInputChange(e.target.value.trim())}
            tabIndex='1'
          />
        </div>

        <div id='sidebarcontent'>
          <ul aria-label={`A list of best restaurants in Phoenix, Arizona`} >
            {restaurants && restaurants.map((restaurant, index) =>
              <li
                key={restaurant.id}
                className={restaurant.id === this.props.currentMarkerId? 'clicked' : undefined}
                id={restaurant.id}
                onClick={this.handleListClick}
                onKeyPress={this.handleListClick}
                tabIndex={0}
                role='menuitem'
                aria-label={`Clickable list item: ${restaurant.name}`}
              >
              {restaurant.name}
              </li>
            )}
          </ul>
        </div>

        <footer>
          <p><b>Powered by Google Maps and Foursquare</b></p>
        </footer>
      </div>
    )
  }
}