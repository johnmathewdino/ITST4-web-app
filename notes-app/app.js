// // const validator = require('validator')
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
// console.log("test")
yargs.version('1.1.0')
console.log("_____________________________________________________")
console.log("|                  "+ chalk.inverse.yellow("   Note-app   ") +"                   |")
console.log("|                                                   |")
console.log("|  A note-taking application created usign Node.JS  |")
console.log("|___________________________________________________|")
console.log("")
 

// const msg = getNotes()
// console.log(msg)

// console.log(chalk.bgGreen.bold("Hi"))

// console.log(process.argv[2])
// console.log(process.argv)


// const command = process.argv[2]

// if ( command === 'add'){
//     console.log("Adding Note")
// }
// else if (command === 'remove'){
//     console.log("removing note")
// }


// #########################################


// CREATE A ADD COMMAND
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        // TITLE
        title:{
            describe: 'Note title',
            // to require a title
            demandOption: true, 
            // to only accept string (if empyty, not boolean)
            type: 'string'
        },
        // BODY
        body:{
            describe: 'Note body',
            // to require a title
            demandOption: true, 
            // to only accept string (if empyty, not boolean)
            type: 'string'
        }

    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }

        // console.log('Title:', argv.title)
        // console.log('Body:', argv.body)
        // notes.addNote(argv.title, argv.body)


    
})

// CREATE A REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:"Remove a title",
            demandOption:true,
            type: 'string'
        }
    },

    handler (argv){
        notes.removeNote(argv.title)
    }
})


// CREATE A LIST COMMAND
yargs.command({
    command: 'list', 
    describe: 'List notes',


    handler () {
        // console.log('Listing notes')
        notes.listNotes()
    }
})


// CREATE A READ COMMAND
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: "Read title",
            demandOption: true,
            type:' string'
        }
    },


    handler (argv)  {
        // console.log('Reading a Note')
        notes.readNote(argv.title)

    }
})



// console.log(yargs.argv)

// so that the output yargs will not be rudundant
yargs.parse()

