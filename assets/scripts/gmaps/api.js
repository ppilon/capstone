'use strict'

// const config = require('../config.js')
// const store = require('../store.js')

const gmapApiKey = 'AIzaSyDgzo8T8525gSc5HkvI5AAKXfbd_KKaKCs'

const getDistance = function (data) {
  const origin = data.distance.origin
  const destination = data.distance.destination
  let gmapDistanceUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + origin + '&destinations=' + destination + '&key=' + gmapApiKey
  gmapDistanceUrl = gmapDistanceUrl.replace(/\s/g, '+')
  return $.ajax({
    url: gmapDistanceUrl,
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  getDistance
}