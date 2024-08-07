$('h1').css('color', 'white')

$('h1').addClass('big-title')
console.log('font : ' + $('h1').css('font-size'))

setTimeout(() => {
    $('h1').removeClass('big-title')
}, 1000);