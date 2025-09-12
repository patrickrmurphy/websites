// Where the calculated password ends up
const passwordElement = document.getElementById("password");
const lengthInput = document.getElementById("length");
// The submit
const submit = document.getElementById("generate")
const controller = new AbortController();

function coinFlip() {
    return (Math.random() >= .5) ? "Heads" : "Tails"
}

function spinSpinner(sections) {
    return Math.ceil(Math.random() * sections)
}

function chooseRandom(things) {
    return things[spinSpinner(things.length - 1)]
}

function chooseRandomCharacter(string) {
    console.log(string.split())
    return chooseRandom(string.split(""))
}


function calculate(event) {
    event.preventDefault()
    let password = ""
    const length = lengthInput.value || 2 ;
    console.log("length: ", length)

    for (let i = 0; i < length; i++) {
        
        password = password.concat(chooseRandomCharacter("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+`~/?.><,;:{}[]"))

        
    }
    console.log(password)
    passwordElement.innerText = `${password}`
}

submit.addEventListener("click", calculate, {signal: controller.signal});
    

