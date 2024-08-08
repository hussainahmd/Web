
const buttonColors = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let level = 0
let started = false

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000)
        }
    } else {
        playSound("wrong")
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press Any Key to Restart")

        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200)

        startOver()
    }
}

function startOver() {
    level = 0
    gamePattern = []
    started = false
}

$(document).keypress(e => {
    if (!started) {
        // $('h1').text('Level ' + level)
        nextSequence()
        started = true
    }
})

$('.btn').click(function () {
    if(!started)
        return
    let userChosenColor = this.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length - 1)
    console.log('User:', userClickedPattern)
})

function nextSequence() {
    userClickedPattern = []
    level++
    $('h1').text('Level ' + level)
    
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

    console.log('Game:',gamePattern)
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