var time=gsap.timeline();

time.from(".part h1",{
    opacity:0,
    y:100,
    color:"white",
    duration:3,
})

time.from(".part h6",{
    opacity:0,
    duration:2,
    delay:1
})


gsap.to(".down1 .imagebox",{
    y:-50,
    opacity:1,
    duration:4,
    scrollTrigger:{
        trigger:".part2",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})


gsap.to(".down3 .imagebox",{
    y:-50,
    opacity:1,
    duration:4,
    scrollTrigger:{
        trigger:".part2",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})


gsap.from(".down2 p",{
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".part2",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }
})

gsap.from(".down2 h1",{
    y:50,
    duration:3,
    scrollTrigger:{
        trigger:".part2",
        scroller:"body",
        start:"top 80%",
        end:"top 20%",
        scrub:2
    }
})

var time2=gsap.timeline();

time2.from(".part3",{
    height:"30vh",
    y:-300,
    duration:2,
    delay:2,
    scrollTrigger:{
        trigger:".part3",
        scroller:"body",
        start:"top 95%",
        scrub:2
    }
})
