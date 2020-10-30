//allow forEach for IE
if(window.NodeList && !NodeList.prototype.forEach)
    NodeList.prototype.forEach = Array.prototype.forEach;

//mobile menu control
const logo = document.querySelector('.logo');
const menu_icon_wrapper = document.querySelector('.menu_icon_wrapper');
const mobile_menu = document.querySelector('.mobile_menu');
let menu_click = false;

menu_icon_wrapper.addEventListener('click', function(){
    if( menu_click === false ){
        menu_icon_wrapper.classList.add('click');
        menu_click = true;
        mobile_menu.classList.add('click');
        logo.classList.add('zIndex');
    }
    else{
        menu_icon_wrapper.classList.remove('click');
        menu_click = false;
        mobile_menu.classList.remove('click');
        logo.classList.remove('zIndex');
    }
});

//gallery menu mouseover control
const gallery_list = document.querySelectorAll('.gallery_list>li');

gallery_list.forEach(function(li){
    li.style.height = gallery_list[0].children[0].offsetWidth + 'px';
    li.addEventListener('mouseenter', function(){
        li.classList.add('select');
        if( li.children[0].children[0].innerHTML.indexOf('img') < 0 )
            li.children[1].children[0].classList.add('select');
        li.children[0].children[0].classList.add('select');
    });
    li.addEventListener('mouseleave', function(){
        li.classList.remove('select');
        if( li.children[0].children[0].innerHTML.indexOf('img') < 0 )
            li.children[1].children[0].classList.remove('select');
        li.children[0].children[0].classList.remove('select');
    });
});

window.addEventListener('resize', function(){
    if( window.innerWidth <= 980 ){
        gallery_list.forEach(function(li){
            li.style.height = gallery_list[0].children[0].offsetWidth + 'px';
        });
    }
});

//new menu mouseover control
const new_menu = document.querySelectorAll('.new_menu>li');

new_menu.forEach(function(li){
    li.addEventListener('mouseenter', function(){
        li.children[0].classList.add('hover');
    });
    li.addEventListener('mouseleave', function(){
        li.children[0].classList.remove('hover');
    });
});

//move top button control
const header = document.querySelector('header');
const top_button_wrapper = document.querySelector('.top_button_wrapper');
const top_button = document.querySelector('.top_button');

window.addEventListener('scroll', function(){
    let scroll_height = window.pageYOffset;

    if( scroll_height >= document.body.scrollHeight/6.5 ){
        top_button_wrapper.classList.add('show');
        top_button.classList.add('show');
    }
    else if( scroll_height < document.body.scrollHeight/6.5 ){
        top_button_wrapper.classList.remove('show');
        top_button.classList.remove('show');
    }
});

top_button.addEventListener('click', function(){
    header.scrollIntoView({behavior:'smooth'});
});

//Fix the problem that group7 input box icons are not visible