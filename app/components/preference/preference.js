$(".reviews-slider").slick({
    prevArrow: $('.reviews-arrow_prev'),
    nextArrow: $('.reviews-arrow_next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                adaptiveHeight: true
            }
        }
    ]
})