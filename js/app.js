// menu close up section 
let Menubar = document.getElementById('menu-bar');
let Closebar = document.getElementById('close-bar');
let Navitems = document.getElementById('nav-main');


Menubar.onclick = function(){
     Closebar.classList.add('close-active');
     Menubar.classList.add('menu-hide');
     Navitems.classList.add('nav-active');
}
Closebar.onclick = function(){
    Closebar.classList.remove('close-active');
    Menubar.classList.remove('menu-hide');
    Navitems.classList.remove('nav-active');
    
}