 var menuFixo = document.querySelector('#menu');
 var menuOne = document.querySelector('.Menu1');
 
 window.addEventListener('scroll', function(){
    (window.scrollY >= menuOne.offsetHeight)? menuFixo.style.opacity = 1 : menuFixo.style.opacity = 0;
    console.log(menuFixo);
 }, false);