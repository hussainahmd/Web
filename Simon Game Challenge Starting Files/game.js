
const buttonColors = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let level = 0
let started = false

$(document).keypress(e => {
    if (!started) {
        $('h1').text('Level ' + level)
        nextSequence()
        started = true
    }
})

$('.btn').click(function () {
    let userChosenColor = this.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
})

function nextSequence() {
    level++
    $('h1').text('Level ' + level)
    
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor)
}

function playSound(name) {
    let audio = new Audio('./sounds/' + name + '.mp3')
    audio.play()
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed')

    setTimeout(() => {
        $('#' + currentColor).removeClass('pressed')
    }, 100)
}