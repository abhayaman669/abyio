$(document).mousemove((e) => {
    let val = `transform: translate3d(${e.pageX}px, ${e.pageY}px, 0px)`;
    $('#cursor').attr('style', val);
})


$('.logo, .my-cmpny').mouseenter(()=> {
    anime({
        targets: '.cursor__point',
        scale: 2
    })
})

$('.logo, .my-cmpny').mouseleave(()=> {
    anime({
        targets: '.cursor__point',
        scale: 1
    })
})