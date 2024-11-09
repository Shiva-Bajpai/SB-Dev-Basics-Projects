var tl = gsap.timeline();

tl.from("#four",{
    opacity:0,
    y: 10,
    duration:1,
    ease: "Expo.easeInOut"
})
.to("#four",{
    opacity:0,
    y: -10,
    duration:1,
    ease: "Expo.easeInOut"
})
.from("#three",{
    opacity:0,
    y: 10,
    duration:1,
    ease: "Expo.easeInOut"
})
.to("#three",{
    opacity:0,
    y: -10,
    duration:1,
    ease: "Expo.easeInOut"
})
.from("#two",{
    opacity:0,
    y: 10,
    duration:1,
    ease: "Expo.easeInOut"
})
.to("#two",{
    opacity:0,
    y: -10,
    duration:1,
    ease: "Expo.easeInOut"
})
.from("#one",{
    opacity:0,
    y: 10,
    duration:1,
    ease: "Expo.easeInOut"
})
.to("#one",{
    opacity:0,
    y: -10,
    duration:1,
    ease: "Expo.easeInOut"
})
.to("#black",{
    y: "-100%",
    duration:1,
    ease: "Expo.easeInOut"
})
.from("#nav",{
    y: "-10%",
    opacity:0,
    duration:1,
    delay:0,
    ease: "Expo.easeInOut"
}, )
.from("#navmain",{
    y: "-10%",
    opacity:0,
    delay: 0,
    duration:1,
    ease: "Expo.easeInOut"
}, )
.from("#creativeimg",{
    y: "10%",
    opacity:0,
    delay: 0,
    duration:1,
    ease: "Expo.easeInOut"
}, )



$('#firsth1 h1').textillate({initialDelay: 5300, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });
$('#firsth2 h1').textillate({initialDelay: 5300, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });
$('#richard').textillate({initialDelay: 5600, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });

// $('.xt h1').textillate({initialDelay: 1500, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });




