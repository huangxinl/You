
var more = document.getElementsByClassName('more')[0];
var span = document.getElementsByClassName('ospan')[0];
var oli = document.getElementsByClassName('nav-main-list');
var ul = document.getElementsByClassName('nav-main')[0];

    more.addEventListener('mouseenter',function(){
        span.style.transform = "rotate(180deg)";
        span.style.transition = "all 0.7s ease";
    },false)
    more.addEventListener('mouseleave',function(){
        span.style.transform = "rotate(0deg)";
        span.style.transition = "all 0.7s ease";
    },false)

    for(var i= 0; i<oli.length;i++) {
       (function(i) {
        oli[i].onclick = function () {
                $(oli).removeClass("active");
                oli[i].className = "active nav-main-list";                           
            }
       }(i))
    }

