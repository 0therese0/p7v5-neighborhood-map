export const getData = () => [

  {
    "id": "4b61dfacf964a52069282ae3",
    "name": "Los Reyes de la Torta",
    "location": {
      "lat": 33.570831191797275,
      "lng": -112.06558828297187,
      "formattedAddress": [
        "9230 N 7th St",
        "Phoenix, AZ 85020"
      ]
    }
  },

  {
    "id": "4b4d29b2f964a52001cd26e3",
    "name": "Z'Tejas Mexican Restaurant and Grill",
    "location": {
      "lat": 33.5833794342781,
      "lng": -111.97688490963132,
      "formattedAddress": [
        "10625 N Tatum Blvd",
        "Phoenix, AZ 85028"
      ]
    }
  },

	{
    "id": "4ca63ec2f47ea143bcba5e21",
    "name": "Los Taquitos Mexican Grill",
    "location": {
      "lat": 33.53956504022268,
      "lng": -112.04829328194515,
      "formattedAddress": [
        "7000 N 16th St",
        "Phoenix, AZ 85034"
      ]
    }
  },

	{
    "id": "4b405169f964a5209fb725e3",
    "name": "Dick's Hideaway",
    "location": {
      "lat": 33.52409103713097,
      "lng": -112.04772379540556,
      "formattedAddress": [
        "Bethany Home & 16th St",
        "Phoenix, AZ 85016"
      ]
    }
  },

	{
    "id": "4dbc62fef7b1ab37dd5d8548",
    "name": "Richardson's Cuisine of New Mexico",
    "location": {
      "lat": 33.530532963767385,
      "lng": -112.04716295169032,
      "formattedAddress": [
        "6335 N 16th St",
        "Phoenix, AZ 85016"
      ]
    }
  },

	{
    "id": "5085c381e4b038e4e19d739e",
    "name": "Federal Pizza",
    "location": {
      "lat": 33.51336503529546,
      "lng": -112.07394094299796,
      "formattedAddress": [
        "5210 N Central Ave",
        "Phoenix, AZ 85012"
      ]
    }
  },

	{
		"id": "4cccd30c566aa093154424fd",
		"name": "Zinburger",
		"location": {
      "lat": 33.510284276278966,
      "lng": -112.0281804674093,
      "formattedAddress": [
        "2502 E Camelback Rd",
        "Phoenix, AZ 85016"
      ]
		}
	},

	{
		"id": "4ab2ee42f964a520066d20e3",
		"name": "The Parlor Pizzeria",
		"location": {
      "lat": 33.50950866744282,
      "lng": -112.04038899140494,
      "formattedAddress": [
        "1916 E Camelback Rd",
        "Phoenix, AZ 85016"
      ]
		}
	},

	{
		"id": "4b1acfc4f964a52056f223e3",
		"name": "Duck & Decanter",
		"location": {
      "lat": 33.50761012663001,
      "lng": -112.04480519014164,
      "formattedAddress": [
        "1651 E Camelback Rd",
        "Phoenix, AZ 85016"
      ]
		}
	},

	{
		"id": "4a3d9599f964a5207aa21fe3",
		"name": "Chelsea's Kitchen",
		"location": {
      "lat": 33.511269049512656,
      "lng": -111.99560541305033,
      "formattedAddress": [
        "5040 N 40th St",
        "Phoenix, AZ 85018"
      ]
		}
	},

	{
		"id": "4c8eafbd1664b1f76e76a22f",
		"name": "Seasons 52",
		"location": {
      "lat": 33.510501050886965,
      "lng": -112.02669128802876,
      "formattedAddress": [
        "2502 E Camelback Rd",
        "Phoenix, AZ 85016"
      ]
		}
	},

	{
		"id": "414b7a80f964a520d01c1fe3",
		"name": "Lux Central",
		"location": {
      "lat": 33.5004692924433,
      "lng": -112.07405313849449,
      "formattedAddress": [
        "4402 N Central Ave",
        "Phoenix, AZ 85012"
      ]
		}
	},

	{
		"id": "528ce75e11d22bdec3d7a189",
		"name": "Snooze",
		"location": {
      "lat": 33.508183882396864,
      "lng": -112.03706572744491,
      "formattedAddress": [
        "2045 E Camelback Rd",
        "Phoenix, AZ 85016"
      ]
		}
	}

].sort((a, b) =>  b.location.lat - a.location.lat)