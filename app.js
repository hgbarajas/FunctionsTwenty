alert("Welcome to the game 20. the point of the game is to see who gets closer to twenty without going over it.")


var computer = 0

var human = 0

var humanscore = 0

var computerscore = 0

function askName() {
    var name = prompt("What is your name?")
    return name 
} 

function greet(a) {
    alert(`Hello ${a}.`)
 }

var a = (askName)

 greet(askName())

 function ranNumber() {
     var random = Math.floor(Math.random() * 11)
     return random
 }

 function computerTurn() {
    do {
        computer = ranNumber + computer
        alert(`The new number is ${ranNumber} \n The Computer total is ${computer}`)

        
    } while (computer < 16)

    return computer
 }

  function humanWins() {
    if (computer > 20){

        alert("You won! the Computer went over 20")
        humanscore++
    return humanscore
    }
 } 
        alert("Its your turn...")

    function humanTurn() {
        do {    
            human = ranNumber + human

            alert(`The new number is ${ranNumber} \n Your total is ${human}`)

            var again = prompt("Do you want another number? Type 'y' for yes or 'n' for no")
            
        } while ((human <= 20) && (again != "n"))
        return again
    }


