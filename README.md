# Neighborhood Map w/ REACT

# Project Overview

This is Project 7 in Udacity's Front End Nano Degree Program, created with React.  It is a single page application that features a map and a list of restaurants.  The app will load a map with 10 markers related to local restaurants.  When you click on a marker, a window will open with information about that restaurant.  There will be a list on the left/sidebar, when you click a restaurant the marker will animate and open a window with it's information.  The app also allows users to tab through each of the important elements of the page with A11y or Accessibility.  This project is bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app), [Google Maps API](https://cloud.google.com/maps-platform/) and [Foursquare API](https://developer.foursquare.com/) to deliver content.

You can take a quick peek at the **live demo** [here](LINK HERE)

## Installation/ To get started

* Clone this [repository](https://github.com/0therese0/p7-neighborhood-map.git)
* Navigate to project folder on your computer
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Type `localhost:3000` on your choice of browser to view project, if none is opened after previous step.

## Dependencies

* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [google-maps-react](https://github.com/fullstackreact/google-maps-react)
* [react-sidebar](https://github.com/balloob/react-sidebar)
* [Google Maps API](https://cloud.google.com/maps-platform/)
* [Foursquare API](https://developer.foursquare.com/)
* [Google Fonts](https://fonts.google.com)

## Service Worker

Service Worker for this project will only cache when in production mode. To load the app in production mode:
* `npm run build` and then
* `serve -s build`

### Warnings

* No internet connection.  If there is no internet connection or if working on offline browser, there will be a warning found at the bottom of the page that says "No internet connection!".
* Foursquare API quota exceeded. The information window on the markers will only show the restaurant's basic info because of Foursquare API's limited quota per day for free accounts.  A warning will show at the bottom of the page that says "Only basic info is available due to daily request limitation of Foursqaure API."



## Credits
* A walkthrough by [Elharony](https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA)
* A walkthrough by [Forrest Walker](https://www.youtube.com/watch?v=ktc8Gp9jD1k&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)
* A list of resources compiled by [Janice Medina and Crystal Yungwirth](https://docs.google.com/document/d/18xFyFrApiOZAq4iFAqiznmoewp-3VHib_f7j_DPluFs/edit)
* Udacity's FEND Slack discussion