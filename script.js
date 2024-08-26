
var mouse = document.querySelector("#mouse")
var main = document.querySelector("#main")

main.addEventListener("mousemove",function(dets){
    gsap.to(mouse,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"

    })
})

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay: 1000,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var loader = document.getElementById("preloader");
    window.addEventListener("load",function(){
      loader.style.display = "none";
    });

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


  




  