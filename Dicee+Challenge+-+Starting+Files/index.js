// Function to generate a random number between 1 and 6
function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1
}

// Function to set the dice image based on the random number
function setDiceImage(playerClass, diceNumber) {
    const imgElement = document.querySelector(playerClass)
    imgElement.setAttribute("src", `./images/dice${diceNumber}.png`)
}

// Generate random numbers for both dice
const randomNumber1 = getRandomDiceNumber()
const randomNumber2 = getRandomDiceNumber()

// Set the dice images for Player 1 and Player 2
setDiceImage(".img1", randomNumber1)
setDiceImage(".img2", randomNumber2)

const heading = document.querySelector("h1")

if(randomNumber1 > randomNumber2)
    heading.textContent = '🚩 Player 1 Wins!'
else if(randomNumber1 < randomNumber2)
    heading.textContent = '🚩 Player 2 Wins!'
else
    heading.textContent = 'Draw!'