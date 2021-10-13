const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // //CREATE JS TO JSON
// const bookJSON = JSON.stringify(book)
// // //console.log(bookJSON)

// // // take JSON to JS
// // //const parseData = JSON.parse(bookJSON)
// // //console.log(parseData)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()

// const data = JSON.parse(dataJSON) 
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)
data.name = "Mathew"
data.age = 21

const JStoJSON = JSON.stringify(data)

console.log(JStoJSON)

fs.writeFileSync('1-json.json',JStoJSON)