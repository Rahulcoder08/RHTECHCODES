function locomotiveanimation(){
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
     locomotiveanimation();
     
     
     function cursorEffect() {
         let page1Content = document.querySelector("#page1-content")
         let cursor = document.querySelector("#cursor")
     
         page1Content.addEventListener('mousemove', function (details) {
             gsap.to(cursor, {
                 x: details.x + 'px',
                 y: details.y + 'px',
     
             })
         })
         page1Content.addEventListener('mouseenter', function () {
             gsap.to(cursor, {
                 scale: 1,
                 opacity: 1,
             })
         })
         page1Content.addEventListener('mouseleave', function () {
             gsap.to(cursor, {
                 scale: 0,
                 opacity: 0,
     
             })
         })
     }
     cursorEffect();
     
     
     function cursorEffect4() {
             let rect = document.querySelector('#svg')
             let cursor1 = document.querySelector("#page4-elem #cursor1")
         
             document.querySelector("#page4-elem").addEventListener('mousemove', function (dets) {
             let rectLocation = rect.getBoundingClientRect();
             let cursorLocation = cursor1.getBoundingClientRect();
                 gsap.to(cursor1, {
                     x: dets.clientX - rectLocation.width - cursorLocation.width*5 + 'px',
                     y:dets.clientY - rectLocation.height - cursorLocation.height*2  + 'px',
                 })
     
         })
         document.querySelector('#svg').addEventListener('mouseenter', function () {
             gsap.to(cursor1, {
                 scale: 1,
                 opacity: 1,
             })
         })
         document.querySelector('#svg').addEventListener('mouseleave', function () {
             gsap.to(cursor1, {
                 scale: 0,
                 opacity: 0,
     
             })
         })
     }
     cursorEffect4();
     
     function page2Animation() {
         gsap.from('#page2 #lowerpage2 h1 ,#upperpage2 h2,#page2 #line', {
             y: 120,
             stagger: 0.2,
             duration: 1,
             scrollTrigger: {
                 trigger: "#page2",
                 scroller: "#main",
                 start: "top 47%",
                 end: "top 46%",
                 scrub: 2
             }
         })
     }
     page2Animation();
     
     
     function page4Animation() {
         gsap.from('#page4 #page4-top h1, #page4 #page4-h2', {
             y: 120,
             stagger: 0.2,
             duration: 1,
             scrollTrigger: {
                 trigger: "#page4",
                 scroller: "#main",
                 start: "top 47%",
                 end: "top 45%",
                 scrub: 2,
             }
         })
     }
     page4Animation();
     
     function swipperanimation(){
     
         var swiper = new Swiper(".mySwiper", {
             slidesPerView: 4,
         loop: true,
         autoplay:{
             delay:2500,
             // ease:Expo.easeInOut,
             disableOnInteraction:true,
     
         },
       });
     }
     swipperanimation();
     
     function lastpageAnimation(){  
         let page = document.querySelector("#page6-content-lower-down ")
     
     page.addEventListener('mouseover',function(){
        gsap.to('#page6-content-lower-down h1',{
         y:-120,
         duration:1,
         opacity:0
        })
     })
     
     page.addEventListener('mouseleave',function(){
         gsap.to('#page6-content-lower-down h1',{
          y:0,
          duration:1,
          opacity:1
         })
     })
     page.addEventListener('mouseover',function(){
        gsap.to('#page6-content-lower-down h2',{
         y:-100,
         duration:1,
         opacity:1
     })
     })
     
     page.addEventListener('mouseleave',function(){
         gsap.to('#page6-content-lower-down h2',{
             y:20,
             duration:1,
             opacity:0
         })
     })
     
     }
     lastpageAnimation();
     
     let tl = gsap.timeline()
     tl.from('#loader h1',{
         x:110,
         opacity:0.5,
     stagger:0.1,
         duration:1,
     })
     tl.to('#loader h1',{
         opacity:0,
         x: -60,
         stagger:0.1,
         duration:0.5,
     })
     tl.to('#loader',{
         opacity:0,
     })
     tl.to('#loader',{
        display:'none',
     })
     tl.from('#page1-content h1 span',{
         y:100,
         opacity:0,
         stagger:0.1,
         delay:-0.5,
         duration:0.5,
     })
     
     
     let speed = 100;
     function incEltNbr(id) {
       elt = document.getElementById(id);
       endNbr = Number(document.getElementById(id).innerHTML);
       incNbrRec(endNbr, 1, elt);
     }
     function incNbrRec(i, endNbr, elt) {
       if (i >= endNbr) {
         elt.innerHTML = i;
         setTimeout(function () {
           incNbrRec(i - 1, endNbr, elt);
         }, speed);
       }
     }
     document
       .querySelector("#svg")
       .addEventListener("mouseover", function () {
         incEltNbr("nbr");
       });
     