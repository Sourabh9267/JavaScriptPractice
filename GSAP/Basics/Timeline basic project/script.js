
var timeline=gsap.timeline()

timeline.from("#nav h3",{

    y:-50,
    duration:1,
    stagger:.2,
   

})

timeline.from("#main h1",{

    x:-1500,
    opacity:0,
    duration:0.5,
    stagger:0.3


})

timeline.from("img",{

    x:100,
    duration:1,
    opacity:0,
    rotate:45,stagger:0.5

})