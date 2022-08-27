burger = document.querySelector('.burger');
navlist=document.querySelector('.navlist2');
navbar=document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v_class');
    navbar.classList.toggle('h_nav');
})