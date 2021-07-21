var ease = "back";
var stagger = .2;
var duration = 1;
gsap.fromTo(
    ".animate.right",
    {
        x: -500,
        y: Math.random() * (500 - (-500)) + (-500),
        rotation: -10,
        yoyo:true
    },
    {
        yoyo:true,
        x: 150,
        y: 0,
        rotation: 0,
        duration: duration,
        delay: 2,
        stagger: stagger,
        ease: ease
    }
);

gsap.fromTo(
    ".animate.left",
    {
        x: 2000,
        y: Math.random() * (500 - (-500)) + (-500),
        rotation: -10,
        duration: duration,
    },
    {
        x: 150,
        y: 0,
        rotation: 0,
        duration: duration,
        delay: 2,
        stagger: stagger,
        ease: ease
    }
);