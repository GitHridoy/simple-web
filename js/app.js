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

// about pop up section 
let About_btn = document.getElementById('about-btn');
let About_content = document.getElementById('about-pop-content');
let About_close = document.getElementById('about-close');

About_btn.onclick = function(){
    About_content.classList.add('about-content-active');
    Login_Dark.classList.add('login-pop-dark');
}
About_close.onclick = function(){
    About_content.classList.remove('about-content-active');
    Login_Dark.classList.remove('login-pop-dark');
}

// login pop up section 

let Loing_main = document.getElementById('login-main');
let Login_content = document.getElementById('login-pop');
let Login_close = document.getElementById('login-close');
let Login_Dark = document.getElementById('login-pop-main');

Loing_main.onclick = function(){
    Login_content.classList.add('login-pop-active');
    Login_Dark.classList.add('login-pop-dark');
}
Login_close.onclick = function(){
    Login_content.classList.remove('login-pop-active');
    Login_Dark.classList.remove('login-pop-dark');
}





