var oUl = $('.s-box > ul')[0];
var next = $('.next')[0];
var pre = $('.pre')[0];

next.addEventListener('click',function(){
    oUl.style.left = "-550px";
    oUl.style.transition = "all 2s ease";
    next.style.display ="none";
    pre.style.display="inline-block";
},false)

pre.addEventListener('click',function(){
    oUl.style.left = "0px";
    oUl.style.transition = "all 2s ease";
    next.style.display ="inline-block";
    pre.style.display="none";
},false)