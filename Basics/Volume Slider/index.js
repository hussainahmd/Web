let x = 0
let output = document.getElementById('output')
let meter = document.getElementById('meter')
output.innerHTML = x

const btnPlus = document.querySelector('.plus')
btnPlus.addEventListener('click', plus)

const btnMin = document.querySelector('.min')
btnMin.addEventListener('click', min)

let interval // To store the interval ID

// Function to handle mouse down and start interval
function startInterval(action) {
    interval = setInterval(action, 250) // Adjust the interval timing as needed
}

// Function to stop the interval
function stopInterval() {
    clearInterval(interval)
}

// Attach events for "plus" button
btnPlus.addEventListener('mousedown', () => startInterval(plus))
btnPlus.addEventListener('mouseup', stopInterval)
btnPlus.addEventListener('mouseleave', stopInterval)

// Attach events for "min" button
btnMin.addEventListener('mousedown', () => startInterval(min))
btnMin.addEventListener('mouseup', stopInterval)
btnMin.addEventListener('mouseleave', stopInterval)

function plus() {
    if (x < 10) {
        output.innerHTML = ++x * 10
        meter.style.height = x * 10 + '%'
    }
    updateMeterColor()
}

function min() {
    if (x > 0) {
        output.innerHTML = --x * 10
        meter.style.height = x * 10 + '%'
    }
    updateMeterColor()
}

function updateMeterColor() {
    if (x > 7) {
        meter.style.background = '#3cda51'
        meter.style.filter = 'drop-shadow(0 0 5px #3cda51)'
    } else if (x > 3 && x <= 7) {
        meter.style.background = '#c7c713'
        meter.style.filter = 'drop-shadow(0 0 5px #c7c713)'
    } else {
        meter.style.background = '#e52020'
        meter.style.filter = 'drop-shadow(0 0 5px #e52020)'
    }
}

const p = document.querySelector('.progress')
p.addEventListener('click', (event) => {
    const rect = p.getBoundingClientRect()
    const offsetY = event.clientY - rect.top
    const height = (offsetY - 300) * -1
    const perHeight = height / 300 * 100

    x = Math.round(perHeight / 10)
    if (x < 0) x = 0
    if (x > 10) x = 10

    updateMeter()
})

function updateMeter() {
    output.innerHTML = x * 10
    meter.style.height = x * 10 + '%'
    updateMeterColor()
}