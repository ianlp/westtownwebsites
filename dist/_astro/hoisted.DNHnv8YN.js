import"./hoisted.2VzkjmOn.js";document.addEventListener("DOMContentLoaded",()=>{gsap.registerPlugin(ScrollTrigger),gsap.from(".intro__content",{scrollTrigger:{trigger:".intro__content",start:"top 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none reverse"},y:100,duration:1.5,ease:"power3.out"}),gsap.fromTo(".intro__content",{opacity:0},{opacity:1,duration:1,scrollTrigger:{trigger:".intro__content",start:"top 80%",end:"bottom 40%",scrub:!0,toggleActions:"play none none reverse"}}),gsap.from(".intro__image",{scrollTrigger:{trigger:".intro__image",start:"top 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none reverse"},x:-100,duration:1.5,ease:"power3.out"}),gsap.fromTo(".intro__image",{opacity:0},{opacity:1,duration:1,scrollTrigger:{trigger:".intro__image",start:"top 80%",end:"bottom 40%",scrub:!0,toggleActions:"play none none reverse"}})});document.addEventListener("DOMContentLoaded",()=>{gsap.registerPlugin(ScrollTrigger),gsap.from(".intro__content",{scrollTrigger:{trigger:".intro__content",start:"top 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none reverse"},y:100,duration:1.5,ease:"power3.out"}),gsap.fromTo(".intro__content",{opacity:0},{opacity:1,duration:2,scrollTrigger:{trigger:".intro__content",start:"top 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none reverse"}}),gsap.from(".intro__image",{scrollTrigger:{trigger:".intro__image",start:"top 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none reverse"},x:-100,duration:1.5,ease:"power3.out"}),gsap.fromTo(".intro__image",{opacity:0},{opacity:1,duration:2,scrollTrigger:{trigger:".intro__image",start:"top 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none reverse"}}),gsap.utils.toArray(".service--image-right").forEach(e=>{gsap.from(e,{scrollTrigger:{trigger:e,start:"top 90%",end:"bottom 10%",scrub:!0,toggleActions:"play none none reverse"},x:"-100%",opacity:0,duration:1.5,ease:"power3.out"})}),gsap.utils.toArray(".service--image-left").forEach(e=>{gsap.from(e,{scrollTrigger:{trigger:e,start:"top 90%",end:"bottom 10%",scrub:!0,toggleActions:"play none none reverse"},x:"100%",opacity:0,duration:1.5,ease:"power3.out"})})});document.addEventListener("DOMContentLoaded",function(){if(typeof gsap>"u"){console.error("GSAP is not loaded.");return}document.querySelectorAll(".services__item").forEach(t=>{const o=t.querySelector(".service__overlay"),n=o.querySelector(".service__details");gsap.set(o,{backgroundColor:"rgba(0, 0, 0, 0)"}),gsap.set(n,{opacity:0,y:20});const r=gsap.timeline({paused:!0});r.to(o,{backgroundColor:"rgba(0, 0, 0, 0.7)",duration:.5,ease:"power2.out"}).to(n,{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3"),t.addEventListener("mouseenter",()=>r.play()),t.addEventListener("mouseleave",()=>r.reverse())})});
