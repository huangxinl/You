
var ul = document.getElementsByClassName('slider')[0];
var li = document.getElementsByTagName('slider li');
var len = li.length;

        function getStyle(elem,prop) {
            if(window.getComputedStyle){
                return window.getComputedStyle(elem,null)[prop];
            }else {
                return elem.currentStyle[prop];
            }
        }

       var timer =  setInterval(function() {
           ul.style.left = parseInt(getStyle(ul,'left')) - 1190 +'px';
           len ++;
           if(len > 5){
             ul.style.left = 0 + 'px';
             ul.style.transition = ""
             len = 0;
           }
       },1000)