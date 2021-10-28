const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a3371e89db999a6f68a7a908b9195a56&query=' + latitude + ',' + longitude

    request ({url:url, json:true}, (error, response) =>{
        if (error){
            // if no internet or cannot connect
            callback('Unable to connect to the weather service', undefined)
        } else if (response.body.error){
            // if location cannot be located (no latitude or longitude)
            callback('Unable to find location', undefined)
        }
    
        else{
        const temperature = response.body.current.temperature
        const feelslike = response.body.current.feelslike
        const weather_descriptions = response.body.current.weather_descriptions[0]
        callback(undefined, weather_descriptions+ ". It is currently "+ temperature + " degress out. It feels like "+feelslike+" degrees out.")
        
    }
    })

}

module.exports = forecast
