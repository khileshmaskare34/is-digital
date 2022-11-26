function lucky(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  
  ScrollTrigger.refresh();
  
  }
lucky();


function section1(){
    let ans = document.querySelector("#section1 #box1")
 gsap.from("#section1 #box1",{
    y:300,
    duration:2,
    ease:Expo.InOut
 })
 gsap.from("#section1 #box2",{
    x:300,
    duration:2,
    ease:Expo.InOut
 })
 gsap.from("#section1 #box3",{
    y:"-300",
    duration:2,
    ease:Expo.InOut
 })

}
section1();

function section2(){
    // let sec = document.querySelector("#section2")
    let ti = gsap.timeline();
    gsap.from("#section2 h3",{
        y:200,
        // duration:2,
        stagger:1,
        // delay:2,
        opacity:0,
        ease:Expo.InOut,
        transition:" cubic-bezier(0.19, 1, 0.22, 1)2s",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#section2",
            start:"top 50%",
            // markers:true
        }
    })
    gsap.from("#section2 h1",{
        y:300,
        // delay:2,
        // duration:2,
        opacity:0,
        stagger:1,
        ease:Expo.InOut,
        transition:" cubic-bezier(0.19, 1, 0.22, 1)2s",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#section2",
            start:"top 50%",
            // markers:true
        }
    })
    

}
section2();

function section5(){
     var sec5l = document.querySelector("#sec5left")
     sec5l.addEventListener("mouseenter", function(){
      gsap.to("#switchl #switchx",{
        left:"0%",
        duration:.3,
        ease:Expo.InOut
      })
     })

     sec5l.addEventListener("mouseleave", function(){
      gsap.to("#switchl #switchx",{
        left:"-100%",
        duration:.3,
        ease:Expo.InOut
      })
     })

     var sec5r = document.querySelector("#sec5right")
     sec5r.addEventListener("mouseenter", function(){
      gsap.to("#switchr #switchy",{
        left:"0%",
        duration:.3,
        ease:Expo.InOut
      })
     })

     sec5r.addEventListener("mouseleave", function(){
      gsap.to("#switchr #switchy",{
        left:"-100%",
        duration:.3,
        ease:Expo.InOut
      })
     })



     var sec5b = document.querySelector("#button")
     sec5b.addEventListener("mouseenter", function(){
      gsap.to("#buttoncover",{
        left:"0%",
        duration:.3,
        ease:Expo.InOut
      })
     })

     sec5b.addEventListener("mouseleave", function(){
      gsap.to("#buttoncover",{
        left:"-100%",
        duration:.3,
        ease:Expo.InOut
      })
     })
}
section5();


function section6(){
  var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
section6();

function section7(){
  var sec7b = document.querySelector("#sect7box #button")
     sec7b.addEventListener("mouseenter", function(){
      gsap.to("#buttoncover",{
        left:"0%",
        duration:.3,
        ease:Expo.InOut
      })
     })

     sec7b.addEventListener("mouseleave", function(){
      gsap.to("#buttoncover",{
        left:"-100%",
        duration:.3,
        ease:Expo.InOut
      })
     })
}
section7();