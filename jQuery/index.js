const h1 = $('h1')
const h1_text = h1.text()

const inc = $('.inc')
const dec = $('.dec')

// h1.text(`${h1_text} ` + h1.css('font-size'))

inc.click(() => {
    h1.css('font-size', parseInt(h1.css('font-size')) + 1 + 'px')
    h1.text(`${h1_text} ` + h1.css('font-size'))
    h1.toggleClass('big-title')
})

dec.on('click', () => {
    h1.css('font-size', parseInt(h1.css('font-size')) - 1 + 'px')
    h1.text(`${h1_text} ` + h1.css('font-size'))
    h1.toggleClass('big-title')
})

$(document).keypress(event =>{
    h1.text(`${h1_text} ` + event.key)
})

$('.tg').click(() => {
    h1.slideToggle()
})

$('button').click(function () {
    $(this).css('color', 'blue')
})

// $('button').click(event => {
//     $(event.currentTarget).css('color', 'blue')
//     $(event.currentTarget).text('Clicked')
// })


$('button').hover(
    function () { $(this).css('color', 'red') },
    function () { $(this).css('color', '') }
)

// $('button').hover(
//     event => $(event.currentTarget).css('color', 'red'),
//     event => $(event.currentTarget).css('color', '')
// )
