let x = 0
let output = document.getElementById('output')
let meter = document.getElementById('meter')
output.innerHTML = x

function plus() {
    if (x < 10) {
        output.innerHTML = ++x * 10
        meter.style.height = x * 10 + '%'
    }
    if (x > 7) {
        meter.style.background = '#3cda51'
        meter.style.filter = 'drop-shadow(0 0 5px #3cda51)'
    }
    if (x > 3 && x <= 7) {
        meter.style.background = '#c7c713'
        meter.style.filter = 'drop-shadow(0 0 5px #c7c713)'
    }
    if (x <= 3) {
        meter.style.background = '#e52020'
        meter.style.filter = 'drop-shadow(0 0 5px #e52020)'
    }
}

function min() {
    if (x > 0) {
        output.innerHTML = --x * 10
        meter.style.height = x * 10 + '%'
    }
    if (x >= 7) {
        meter.style.background = '#3cda51'
        meter.style.filter = 'drop-shadow(0 0 5px #3cda51)'
    }
    if (x > 3 && x < 7) {
        meter.style.background = '#c7c713'
        meter.style.filter = 'drop-shadow(0 0 5px #c7c713)'
    }
    if (x <= 3) {
        meter.style.background = '#e52020'
        meter.style.filter = 'drop-shadow(0 0 5px #e52020)'
    }
}