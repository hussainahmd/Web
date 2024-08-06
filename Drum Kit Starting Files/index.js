
document.querySelectorAll('.drum')
    .forEach(e => {
        e.addEventListener('click', () => {
            playSound(e.classList[0])
        })
    })

document.addEventListener('keypress', e => {
    playSound(e.key)
})

function playSound(key){
    let audio
    switch (key) {
        case 'w':
            audio = new Audio('./sounds/crash.mp3')
            break
        case 'a':
            audio = new Audio('./sounds/kick-bass.mp3')
            break
        case 's':
            audio = new Audio('./sounds/snare.mp3')
            break
        case 'd':
            audio = new Audio('./sounds/tom-1.mp3')
            break
        case 'j':
            audio = new Audio('./sounds/tom-2.mp3')
            break
        case 'k':
            audio = new Audio('./sounds/tom-3.mp3')
            break
        case 'l':
            audio = new Audio('./sounds/tom-4.mp3')
            break
        default:
            break
    }
    animateBtn(key)
    audio.play()
}

function animateBtn(key){
    const btn = document.querySelector('.' + key)
    btn.classList.add('pressed')
    setTimeout(() => {
        btn.classList.remove('pressed')
    }, 200);
}