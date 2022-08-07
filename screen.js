const toggle = document.querySelector(".menu--icon");
const nav =document.querySelector(".nav");
const main =document.querySelector(".main--area");
const close =document.querySelector(".closebtn");
const color =document.querySelector(".bg--color");
const imgNav =document.querySelector(".img--nav");

close.addEventListener("click",()=>{
    nav.classList.toggle("active");
    main.classList.toggle("active");
    toggle.classList.toggle("active");
    color.classList.toggle("active");
    imgNav.classList.toggle("active");
    
});
toggle.addEventListener("click",()=>{
    main.classList.toggle("active");
    toggle.classList.remove("active");
    nav.classList.add("active");
    nav.classList.add("active1");
    color.classList.toggle("active");
    imgNav.classList.toggle("active");
});
