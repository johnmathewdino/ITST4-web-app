// nodemon src/app.js -e js, hbs
const path = require('path')
const express = require('express')
const hbs = require('hbs')


console.log(__dirname)
// D:\3rd Year\4th Year\Web\new\web-server\src

// console.log(__filename)
// D:\3rd Year\4th Year\Web\new\web-server\src\app.js

// console.log(path.join(__dirname, '../public'))

const app = express()

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
    res.send({
        forecast: 'It is raining',
        location: 'Bulan, Sorsogon'
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
app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})