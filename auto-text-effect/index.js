const containerEl = document.querySelector('.container')

const carrers = ['Programmer', 'Influencer', 'Freelancer', 'Instructor']
let carrerIndex = 0
let charIndex = 0

updateText()

function updateText(){
    charIndex++
    containerEl.innerHTML = `<h1>I am ${carrers[carrerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${carrers[carrerIndex].slice(0, charIndex)}</h1>`
    setTimeout(updateText, 150)

    if(charIndex === carrers[carrerIndex].length){
        carrerIndex++
        charIndex = 0
    }

    if(carrerIndex === carrers.length)
        carrerIndex = 0
}
