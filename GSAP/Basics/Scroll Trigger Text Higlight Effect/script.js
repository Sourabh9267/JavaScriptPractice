// var h2txt=document.querySelector("#firsth2").textContent;


// var splittext= h2txt.split("");

// var clutter="";
// splittext.forEach(function(elem){

//     clutter+= `<span>${elem}</span>`
// })

// console.log(clutter);

// document.querySelector("#firsth2").innerHTML=clutter;


// gsap.to("#page2 h2 span",{
    //     color:"#E3E3C4",
    //     stagger:0.1,
    //     scrollTrigger:{
        //         scroller:"body",
        //         trigger:"#page2 h2",
        //         start:"top 50%",
        //         end:"top 10%",
        //         scrub:true
        
        //     }
        // })
        
        

var allh2=document.querySelectorAll("#page2 h2");

allh2.forEach(function(elem){
    
    var clutter="";
    
    var h2txt=elem.textContent;
    var h2split=h2txt.split("");
    h2split.forEach(function(e){
        clutter+=`<span>${e}</span>`
    })
    elem.innerHTML=clutter

})



gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 h2",
        start:"top 50%",
        end:"top 10%",
        scrub:true

    }
})
