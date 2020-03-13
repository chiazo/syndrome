let navLinks = document.querySelectorAll("nav ul li a");
let landingSections = document.querySelectorAll("main section");

let lastId;
let curr = [];

window.addEventListener("scroll", e => {
    let fromTop = window.scrollY;
    console.log(fromTop);

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (fromTop <= 76) {
            document.getElementById("navigation").classList.remove("on-scroll");
        } else {
            document.getElementById("navigation").classList.add("on-scroll");
        }
        if (
            section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop
        ) 
        {
            
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});