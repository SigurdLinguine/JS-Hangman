let ord = ["gresskar", "hangman", "krokodille", "sjimpanse", "programmering", "enheter"]

let display = []
let complete = false
let input
let rand = Math.floor(Math.random() * ord.length)
let correctWord = ord[rand]
let correctWordArr = correctWord.split("")
let forsøk = 6
let bokstav

// Dev hint
console.log("Ordet er " + correctWord)
console.log(correctWordArr)

for (let i = 0; i < correctWord.length; i++) {
  display.push("_")
}
document.getElementById("displayP").innerHTML = display.join(" ")

function handleInput() {
  // Få input fra bruker, men si ifra om den allerede har blitt gjettet
  input = document.getElementById("letterInput").value
  if (display.includes(input)) {
    alert("Du har allerede gjettet den bokstaven")
  }

  // Sjekk om bruker har valgt en riktig bokstav, og legger den til display hvis de har det
  let correctGuess = false
  for (let i = 0; i < correctWord.length; i++) {
    bokstav = correctWord[i]
    if (bokstav == input) {
      display[i] = bokstav
      correctGuess = true
      console.clear()
      console.log(display)
    }
  }

  // Sjekk om bruker har tatt feil, og ta bort et liv hvis de har det
  if (correctGuess == false) {
    forsøk -= 1
    alert("Du gjettet feil. Du har nå " + forsøk + " forsøk igjen")
    if (forsøk == 0) {
      complete = true
      alert("Du tapte :( \n Ordet var " + correctWord)
      location.reload()
    }
  }

  // Sjekk om bruker har gjettet alle bokstavene, og er dermed ferdig
  if (display.includes("_") == false) {
    alert("Du vant :D\n Ordet var " + correctWord)
    complete = true
  }

  // Oppdater display
  document.getElementById("displayP").innerHTML = display.join(" ").toUpperCase()
}

document.getElementById("submit").addEventListener("click", handleInput)

// Reload page - velger et annet ord om brukeren vil ha det
function reload() {
    location.reload()
}