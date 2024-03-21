let valueBtn1 = document.querySelector('.valueBtn1');
let valueBtn2 = document.querySelector('.valueBtn2');
let valueBtn3 = document.querySelector('.valueBtn3');
let valueBtn4=document.querySelector('.valueBtn4');
let valueBtn5=document.querySelector('.valueBtn5');
let valueBtn6=document.querySelector('.valueBtn6');
let valueBtn7=document.querySelector('.valueBtn7');
let valueBtn8=document.querySelector('.valueBtn8');
let valueBtn9=document.querySelector('.valueBtn9');
let cal = document.querySelector('#cal');
let addBtn=document.querySelector(".addBtn");
let subtract=document.querySelector(".subtract");
let mulBtn=document.querySelector('.mulBtn');
let division=document.querySelector('.division');
let zero=document.querySelector('.zero');
let dot=document.querySelector('.dot')
let equal=document.querySelector(".valueBtn16")
let clear=document.querySelector('#clear')

valueBtn1.addEventListener('click', function(){
    cal.value += '1';
});

valueBtn2.addEventListener('click', function(){
    cal.value += '2'
});

valueBtn3.addEventListener('click', function(){
    cal.value += '3'
});

valueBtn4.addEventListener('click', function(){
    cal.value += '4'
});

valueBtn5.addEventListener('click', function(){
    cal.value += '5'
});

valueBtn6.addEventListener('click', function(){
    cal.value += '6'
});

valueBtn7.addEventListener('click', function(){
    cal.value += '7'
});

valueBtn8.addEventListener('click', function(){
    cal.value += '8'
});

valueBtn9.addEventListener('click', function(){
    cal.value += '9'
});


addBtn.addEventListener('click', function(){
    cal.value += '+'
});

subtract.addEventListener('click', function(){
    cal.value += '-'
});

mulBtn.addEventListener('click', function(){
    cal.value += '*'
});

division.addEventListener('click', function(){
    cal.value += '/'
});

zero.addEventListener('click', function(){
    cal.value += '0'
});

dot.addEventListener('click', function(){
    cal.value += '.'
});

equal.addEventListener('click', function(){
    cal.value = eval(cal.value);
});

clear.addEventListener('click', function(){
    cal.value = ''
    console.log("clear")
});
