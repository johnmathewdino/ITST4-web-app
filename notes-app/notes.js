const fs = require('fs')
const chalk = require('chalk')


// const getNotes = () => {

//     return "Your notes ..."
// }


const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter( (note) => note.title === title
    // )

    const duplicateNote = notes.find((note) => note.title ===title)

    // console.log(duplicateNote)
    // console.log(title)
    // debugger 



    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("                    LOG:")
        console.log(chalk.green.inverse("          The note '"+chalk.bold(title)+"' successfully added          "))

    }
    else {
        console.log("                    LOG:")
        console.log(chalk.red.inverse("     Note with the title '"+chalk.bold(title)+"' already taken     "))
    }
}

const removeNote =  (title) => {
    const notes = loadNotes()
    const titleQuery = notes.filter( (note) => note.title !== title)

    if (notes.length > titleQuery.length ){
        console.log(chalk.blue.inverse("     The note '"+chalk.bold(title)+"' removed successfully     "))
        saveNotes(titleQuery)


    }
    else{
        console.log(chalk.red.inverse("     Note with the title '"+chalk.bold(title)+"' does not exist     "))

    }

    
}



const listNotes = ()=>{
    const notes = loadNotes()


    console.log(chalk.inverse("                     Your Notes                     |"))
    var num = 1
    if (notes.length == 0){
        console.log(chalk.red("                    NO NOTES YET"))
    } 
    notes.forEach((note) =>{
        console.log("                 ("+num+") "+ note.title)
        num = num+1
    })
}

const readNote =(title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title ===title )

    if (note){
        console.log("                  Reading Note")
        console.log("Title: "+chalk.inverse(note.title))
        console.log("Body: "+chalk.inverse(note.body))

    }
    else{
        console.log(chalk.red.inverse("Note not found"))

    }
}






const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}



const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)

    }
    catch (e) {
        return []

    }



}
 
 
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
