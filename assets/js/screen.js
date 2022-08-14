const toggle = document.querySelector(".menu--icon");
const nav =document.querySelector(".nav");
const main =document.querySelector(".main--area");
const close =document.querySelector(".closebtn");
const color =document.querySelector(".bg--color");
// const imgNav =document.querySelector(".img--nav");
const logo =document.querySelector(".logo");

close.addEventListener("click",()=>{
    nav.classList.toggle("active");
    main.classList.toggle("active");
    toggle.classList.toggle("active");
    color.classList.toggle("active");
    logo.classList.toggle("active");
    
});
toggle.addEventListener("click",()=>{
    main.classList.toggle("active");
    toggle.classList.remove("active");
    nav.classList.add("active");
    nav.classList.add("active1");
    color.classList.toggle("active");
    logo.classList.toggle("active");
});


// var colors = ['#ff0000', '#00ff00', '#0000ff'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.getElementsByClassName('change-my-color')[0].style.fill = random_color;