// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x

// console.log (square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Kiam', 'Juan'],
    printGuestList () {
        // const that = this

        console.log('Guest List for ', this.name)

        this. guestList.forEach( (guest) => {
            console.log(guest, 'is attending', this.name)

            

        })
    }
} 

event.printGuestList() 