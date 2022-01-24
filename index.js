let welcomeEl = document.getElementById("welcome-el")
let name = "David!"
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + name + " 😃"


let countEl = document.getElementById("count-el")
let count = 0;
let saveEl = document.getElementById("save-el")

countEl.innerText = 0


function increment() {
    count +=  1
    countEl.textContent = count
}

function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    countEl.textContent = 0
    count = 0
}
