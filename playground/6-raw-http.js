const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=a3371e89db999a6f68a7a908b9195a56&query=40,-75'

const request = http.request(url, (response) =>{

    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () =>{
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()