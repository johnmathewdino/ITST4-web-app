const express = require('express')

const app = express()

// app.com
app.get('', (req, res) =>{
    res.send('<h1> Weather </h1>')
})

// app.com/help
app.get('/help', (req, res) =>{
    // res.send({
    //     name: 'Mathew',
    //     age: 21
    // })
    res.send([{
        name: 'Mathew',
    },{
        name: 'Juan'
    }])
})

// app.com/about
app.get('/about', (req, res) =>{
    res.send('<h1>About</h1>')
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