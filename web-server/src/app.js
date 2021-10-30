// nodemon src/app.js -e js, hbs
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


console.log(__dirname)
// D:\3rd Year\4th Year\Web\new\web-server\src

// console.log(__filename)
// D:\3rd Year\4th Year\Web\new\web-server\src\app.js

// console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000
// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')

// Set Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static directory to server
app.use(express.static(publicDirectoryPath))


// app.com
app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather',
        name: "John Mathew Dino"
    })
})

// app.com/help
app.get('/help', (req, res) =>{
    // res.send({
    //     name: 'Mathew',
    //     age: 21
    // })
    // res.send([{
    //     name: 'Mathew',
    // },{
    //     name: 'Juan'
    // }])
    res.render('help',{
        helpText: ' This is the text',
        title: 'Help',
        name: 'John Mathew Dino'
    })
})

// app.com/about
app.get('/about', (req, res) =>{
    res.render('about',{
        title: "About Me",
        name: "John Mathew Dino"

    })
})

// app.com/weather
app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error: 'Must provide an address'
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) =>{
        if (error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    // res.send({
    //     forecast: 'It is raining',
    //     location: 'Bulan, Sorsogon',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) =>{
    if (!req.query.search){
        return res.send({
            error: 'Must provide search term'
        })    
    }
    

    console.log(req.query.search)
    res.send({
        products: []
    })
})

// /help/404
app.get('/help/*', (req, res) =>{
    res.render('404',{
        title:'404',
        name: 'John Mathew Dino',
        errorMessage: 'Help Article not found'
    })
})

// 404
app.get('*', (req, res) =>{
    res.render("404",{
        title: '404',
        name: 'John Mathew Dino',
        errorMessage: 'Page not found'
    })
})

// to start server
app.listen(port, () =>{
    console.log("Server is up on port "+ port)
})
