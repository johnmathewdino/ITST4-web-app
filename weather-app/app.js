// console.log('Starting')

// setTimeout(() => {
//     console.log("2 second Timer")
// }, 2000)

// setTimeout(() =>{
//     console.log("0 Second Timer")
// },0)

// console.log('Stopping') 

// a3371e89db999a6f68a7a908b9195a56

// const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



// const url = 'http://api.weatherstack.com/current?access_key=a3371e89db999a6f68a7a908b9195a56&query='

// request({ url: url, json:true },(error, response) => {
//     // console.log(response.body.current.temperature)
    
//     // console.log(error)
//     if (error){
//         // if no internet or cannot connect
//         console.log('Unable to connect to the weather service')
//     } else if (response.body.error){
//         // if location cannot be located (no latitude or longitude)
//         console.log('Unable to find location')
//     }

//     else{
//     const temperature = response.body.current.temperature
//     const feelslike = response.body.current.feelslike
//     const weather_descriptions = response.body.current.weather_descriptions[0]
//     console.log(weather_descriptions+ ". It is currently "+ temperature + " degress out. It feels like "+feelslike+" degrees out.")
    
// }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bulan%20Sorsogon.json?access_token=pk.eyJ1IjoianVhbm1hdHRlbyIsImEiOiJja3VwdTJ3OHI0bzA4MndvOGtvZWhrY20wIn0.c2s4TtrNnvq0YfiXGoXp-g&limit=1'

// // Does not exist URL
// // const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/notaplace.json?access_token=pk.eyJ1IjoianVhbm1hdHRlbyIsImEiOiJja3VwdTJ3OHI0bzA4MndvOGtvZWhrY20wIn0.c2s4TtrNnvq0YfiXGoXp-g&limit=1'

// request({ url : geocodeURL, json:true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to the location services!')
//     }
//     else if(response.body.features.length === 0 ){
//         console.log('Location cannot be found. Try another location')
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
// }
    
// })

// const geocode = (address, callback) =>{
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianVhbm1hdHRlbyIsImEiOiJja3VwdTJ3OHI0bzA4MndvOGtvZWhrY20wIn0.c2s4TtrNnvq0YfiXGoXp-g&limit=1'
    
//     request({ url:url, json:true}, (error, response) =>{
//         if (error) {
//             callback('Unable to connect  to location services!', undefined)
//         }
//         else if (response.body.features.length === 0) {
//             callback ('Unable to find location. Try another search', undefined)
//         }
//         else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }



// geocode ('Prieto Diaz', (error, data) =>{
//     console.log('Error', error)
//     console.log('Data', data)
// })



//
// Goal: Create a reusable faunction for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


// forecast(12.6650, 123.8877, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

console.log(process.argv)

const address = process.argv[2]

if (!address){
    console.log('Please provide an address')
}
else{

    geocode (address, (error, data) =>{
        if (error){
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if (error){
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastdata)
    
          })
    })
    
}

