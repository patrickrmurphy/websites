// Where the calculated password ends up
const passwordElement = document.getElementById("password");
const length = document.getElementById("length").value;
// The submit
const submit = document.getElementById("generate")
const controller = new AbortController();
function coinFlip() {
    return (Math.random() >= .5) ? "Heads" : "Tails"
}
function spinSpinner(sections){
    return Math.ceil(Math.random() * sections)
}
function chooseRandom(things) {
    return things[spinSpinner(things.length - 1)]
}
function chooseRandomCharacter(string) {
    return chooseRandom(string.split(""))
}

function shuffleString(string) {
    let list = string.split("")
    let returnstring = "";
    for(let i=0; i<list.length; i++) {
    returnstring += list.splice(spinSpinner(list.length) - 1, 1).join("") }
    return returnstring
}
function calculate(event) {
    let password = ""
    event.preventDefault()
    for(let i = 0; i<length; i++) {
      password = password.concat(password,chooseRandomCharacter("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+`~/?.><,;:{}[]"))
      for(let i = 0; i<3; i++) {
      shuffleString(password ) }
    }
    console.log(password)
    passwordElement.innerText = `${password}` 
}
submit.addEventListener("click", calculate, { signal: controller.signal }) ;
    

