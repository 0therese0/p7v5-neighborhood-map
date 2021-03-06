import React from 'react';
import {
  GoogleApiWrapper,
  InfoWindow,
  Map,
  Marker }
from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    showInfoWindow: false,
    selectedMarker: {}, // Store cliked marker
    selectedPlace: {}, // Store clicked marker's associated place info
    mapWidth: 0, // Google map's width
    mapHeight: 0, // Google map's height
    currVenue: null, // Store venue which is fetched form Foursquare
    mouseEnter: true // Track mouse event
  }

  componentDidMount(){
    // Make Google map responsive.
    this.setMapDimensions()
    window.addEventListener('resize', this.setMapDimensions)
    // If list item is clicked, set 'showInfoWindow' to false to show basic InfoWindow
    document.querySelectorAll('li').forEach( li =>
      li.addEventListener('click', () => this.setState({ selectedPlace: {}, showInfoWindow: false }))
    )
  }

  setMapDimensions = () => {
    const headerHeight = Math.max(document.getElementById('header').clientHeight || 0),
      footerHeight = Math.max(document.getElementById('footer').clientHeight || 0),
      viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (this.props.sidebarDocked) {
    const sidebarWidth = Math.max(document.getElementById('sidebar').clientWidth || 0),
      viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      this.setState({mapWidth: viewportWidth-sidebarWidth, mapHeight: viewportHeight-headerHeight-footerHeight})
    } else {
      this.setState({mapHeight: viewportHeight-headerHeight-footerHeight})
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.updateStateAndListItem(props, marker, e)
    this.props.checkInternetConnection()
    fetch(this.getRequestString(props.id))
      .then(this.checkResponse)
      .then(dt => dt && dt.response && dt.response.venue ? dt.response.venue : null)
      .then(venue => this.setState({currVenue: venue}))
      .catch(err => console.log('Failed to fetch info from Foursquare.', err))
  }

  onMouseoverMarker = (props, marker, e) => {
    this.updateStateAndListItem(props, marker, e)
  }

  updateStateAndListItem = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      selectedMarker: marker,
      showInfoWindow: true,
      mouseEnter: true
    })
    // Transfer marker's id to the parent component
    this.props.setCurrMarkerId(props.id)
    this.props.updateSelectedListId(props.id)
  }

  checkResponse = (res) => {

    if (res.ok) {
      if(document.getElementById('footer').style.backgroundColor === 'red'){
        document.getElementById('footertext').innerHTML = `<p id='footertext'> <a target="_blank" href='localhost:3000' rel="noopener noreferrer">Powered by Google Maps and Foursquare</a>.</p>`
        document.getElementById('footer').style.backgroundColor = 'mediumslateblue'
      }
      return res.json()
      } else {
        document.getElementById('footertext').innerText = 'Only basic info is available due to daily request limitation of Foursqaure API.'
        document.getElementById('footer').style.backgroundColor = 'red'
      return 0
      }
    }

  onMapClick = (props) => {
    this.setState({
      showInfoWindow: false,
      selectedMarker: null,
      mouseEnter: true
    })
    this.props.updateSelectedListId(null)
    this.props.setCurrMarkerId(null)
    }

  getRequestString = (id) => `https://api.foursquare.com/v2/venues/${id}?&client_id=3APLBSK4CCFQZFOY1XRWH0NGFIW0FQLZXYD4QBQIRSFWDAOB&client_secret=0WRAHHXWM1MYQNM5RDEYTY3K5QJ4FGKTD3U0XQ3Q31WNI4X5&v=20181007&limit=1`

  render() {
    const basicMarkerData = this.props.currBasicMarkerData,
      { currVenue, selectedPlace } = this.state,
      // Filter venue info to present in InfoWindow
      venueInfo = {};

    if (selectedPlace && currVenue && selectedPlace.id === currVenue.id) {
      venueInfo.url = currVenue.url ? currVenue.url : undefined
      venueInfo.price = currVenue.attributes.groups[0].summary.includes('$') ? currVenue.attributes.groups[0].summary : undefined
      venueInfo.rating = currVenue.rating? currVenue.rating : undefined
      venueInfo.phone = currVenue.contact.formattedPhone || undefined
      venueInfo.category = currVenue.categories[0].shortName || undefined
      venueInfo.delivery = currVenue.delivery && currVenue.delivery.url ? currVenue.delivery.url : undefined
    }

    // Determine which type of InfoWindow to render based on checking props and state.
    const infoWindow = basicMarkerData && basicMarkerData.id !== this.state.selectedPlace.id ?
    // List items are clicked
      <InfoWindow
        position = { { lat: basicMarkerData.location.lat + 0.0013, lng: basicMarkerData.location.lng } }
        visible = { !this.state.showInfoWindow }
      >
        <div>
          <p><b>{ basicMarkerData.name }</b></p>
          <p>{ basicMarkerData.location.formattedAddress[0] }</p>
          <p style={{ fontSize: '70%'}}>Click marker for more details.</p>
        </div>
      </InfoWindow>
      :
      // Markers are 'mouseEntered' or clicked
      <InfoWindow
        marker = { this.state.selectedMarker }
        visible = { this.state.showInfoWindow }
      >
        <div>
          <p>
            <b><a href={venueInfo.url} target="_blank" rel="noopener noreferrer" >{ this.state.selectedPlace.name }</a></b>
            <span className='dollarsign'>{ venueInfo.price }</span>
          </p>
          { venueInfo.category && <p>Style: { venueInfo.category }</p> }
          { venueInfo.rating && <p>Rating: { venueInfo.rating }</p> }
          { venueInfo.delivery && <p><a href={ venueInfo.delivery }>Delivery Available</a></p> }
          { venueInfo.phone && <p>{ venueInfo.phone }</p> }

          <p>{ this.state.selectedPlace.address }</p>
          { this.state.mouseEnter && !venueInfo.rating && <p style={{ fontSize: '70%' }}>Click marker for more details.</p> }
        </div>
      </InfoWindow>,

    // Generate google map's style
    mapStyle = {
      width: this.props.sidebarDocked ? `${ this.state.mapWidth }px` : '100%',
      height: `${ this.state.mapHeight }px`
    };

  return (
    <Map
      style = { mapStyle }
      google = { this.props.google }
      onClick = { this.onMapClick }
      zoom = { 14 }
      initialCenter = {{ lat: 33.52, lng: -112.05 }}
    >
      { this.props.restaurants.map(r =>
        <Marker
          key={ r.id }
            id={ r.id }
            // If the marker's corresponding list is clicked, then show the animation.
            animation = { this.props.currSelectedListId === r.id ? this.props.google.maps.Animation.DROP : undefined }
            onClick = { this.onMarkerClick }
            // Prevent infinite onMouseover event
            onMouseover = { this.state.selectedPlace.id !== r.id ? this.onMouseoverMarker : undefined}
            title = { r.name }
            address = { r.location.formattedAddress[0] }
            position = {{ lat: r.location.lat, lng: r.location.lng }}
            name = { r.name }
        />
      )}
      { infoWindow }
    </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGNAbtSPT34eumdty4CcBlIzHgHxRZFTE'
})(MapContainer)