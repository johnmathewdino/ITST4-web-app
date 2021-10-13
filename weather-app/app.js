// console.log('Starting')

// setTimeout(() => {
//     console.log("2 second Timer")
// }, 2000)

// setTimeout(() =>{
//     console.log("0 Second Timer")
// },0)

// console.log('Stopping') 

// a3371e89db999a6f68a7a908b9195a56

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a3371e89db999a6f68a7a908b9195a56&query=12.6732203,123.8749691'

request({ url: url, json:true },(error, response) => {
    // console.log(response.body.current.temperature)
    const temperature = response.body.current.temperature
    const feelslike = response.body.current.feelslike
    const weather_descriptions = response.body.current.weather_descriptions[0]
    console.log(weather_descriptions+ ". It is currently "+ temperature + " degress out. It feels like "+feelslike+" degrees out.")

})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bulan%20Sorsogon.json?access_token=pk.eyJ1IjoianVhbm1hdHRlbyIsImEiOiJja3VwdTJ3OHI0bzA4MndvOGtvZWhrY20wIn0.c2s4TtrNnvq0YfiXGoXp-g&limit=1'

request({ url : geocodeURL, json:true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})
