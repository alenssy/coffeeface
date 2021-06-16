$('.comments').owlCarousel({
    center:true,
    loop:true,
    margin:700,
    nav:true,
    items: 3,
    responsive:{
        375:{
            items:1
        },
        1440:{
            items: 3
        }
    }
})

$('.inst').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:6,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})