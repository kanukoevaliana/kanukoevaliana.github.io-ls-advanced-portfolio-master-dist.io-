import { functionDeclaration } from "babel-types";

// var parallax = function(){
    var mount = document.querySelector('.mount'),
    user = document.querySelector('.headline'),
    scroll_i = document.querySelector('.scroll-down');
    
    function move(block, windowScroll, percent){
        var plx = windowScroll / percent + '%';
        var process = 'translate3d(0,'+plx+',0)';
        var style = block.style;
        style.transform = process;
        style.webkitTransform = process;
    };
    function init (wScroll){
        move(mount, wScroll, 30);
        move(user, wScroll, 15);
        move(scroll_i, wScroll, 5);
        
    }

window.addEventListener('scroll', e => {
    var wScroll = window.pageYOffset;
    init(wScroll);
})