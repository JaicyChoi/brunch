if(window.NodeList && !NodeList.prototype.forEach)
    NodeList.prototype.forEach = Array.prototype.forEach;

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

//mouseenter -> new_menu color invert version add