const path = require('path')
const express = require('express')
const { allowedNodeEnvironmentFlags } = require('process')



console.log(__dirname)
// D:\3rd Year\4th Year\Web\new\web-server\src

// console.log(__filename)
// D:\3rd Year\4th Year\Web\new\web-server\src\app.js

// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        helpText: ' This is the text'
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

// to start server
app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})