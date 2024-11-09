var anim = gsap.timeline();

anim.from("nav", {
    y: -300,
    opacity: 0,
    duration: 1,
})
    .from(".left h1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    }, 'a')
    .from(".left p", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    })
    .from(".btn", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    })
    .from("video", {
        y: 100,
        opacity: 0,
        duration: 0.5,
    }, 'a')

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-2",
        start: "0% 70%",
        end: "180% 90%",
        scrub: true,
    }
})

tl.to(".strip-l", {
    marginLeft: "0%",
}, 'rc')

tl.to(".strip-r", {
    marginLeft: "0%",
}, 'rc')