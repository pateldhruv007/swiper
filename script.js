const swiper = new Swiper(".swiper",{
    direction:"'vertical'",
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        direction:"Horziontal",
        loop:true,
      },
      autoplay: {
        delay: 2000,
      },
})
