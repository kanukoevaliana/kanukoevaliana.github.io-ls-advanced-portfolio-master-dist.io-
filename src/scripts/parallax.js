import { functionDeclaration } from "babel-types";

    const parallax = document.querySelector('.parallax'),
    mod_1 = document.querySelector('.mod-1'),
    mod_2 = document.querySelector('.mod-2'),
    mod_3 = document.querySelector('.mod-3'),
    mod_4 = document.querySelector('.mod-4')
    
    function move(block, windowScroll, percent){
        const plx = windowScroll / percent + '%';
        const process = 'translate3d(0,-'+plx+',0)';
        const style = block.style;
        style.transform = process;
        style.webkitTransform = process;
        
    }
    function init (wScroll){

        move(mod_1, wScroll, 50);
        move(mod_2, wScroll, 70);
        move(mod_3, wScroll, 80);
        move(mod_4, wScroll, 85);

    }

window.addEventListener('scroll', e => {
    var wScroll = window.pageYOffset;
    init(wScroll);
});