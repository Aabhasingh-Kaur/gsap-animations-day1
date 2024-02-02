var tl= gsap.timeline()


tl.from(".nav-left,.nav-mid,.nav-rgt",{
    opacity:0,
    y:100,
    duration:2,
    delay:0.5,
    stagger:0.8
})
tl.from(".main>h1",{
    scale:0.5,
    opacity:0,
    color:"crimson",
    duration:2
})
tl.from(".center-img>img",{
    rotate:360,
    opacity:0,
    duration:1,
    stagger:0.8,
    scale:0.5
})