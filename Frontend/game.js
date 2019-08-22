var player1=document.querySelector('button');
var player1txt=document.querySelector('h2 span');
var player2=document.querySelectorAll('button')[1];
var player2txt=document.querySelectorAll('h2>span')[1];
var reset=document.querySelectorAll('button')[2];
var p1=1;
var p2=1;
var points=document.querySelector('input');
var pnts=5;

points.addEventListener('change',function(){
    
    document.querySelector('p span').textContent=Number(points.value);
    pnts=Number(document.querySelector('p span').textContent);
});

player1.addEventListener('click',function(){
    
    if(p1===pnts){
        player1txt.textContent=p1;
        player1txt.style.backgroundColor='green';
        player1.disabled=true;
        player2.disabled=true;
        points.disabled=true;
    }
    else{
    
    player1txt.textContent=p1;
    p1++;
    }

});
player2.addEventListener('click',function(){
    if(p2===pnts){
        player2txt.textContent=p2;
        player2txt.style.backgroundColor='green';
        player1.disabled=true;
        player2.disabled=true;
        points.disabled=true;
    }
    else{
    
    player2txt.textContent=p2;
    p2++;
    }
});
reset.addEventListener('click',function(){
    p1=1;
    p2=1;
    pnts=5;
    player1txt.textContent=0;
    player2txt.textContent=0;
    player1txt.style.backgroundColor='white';
    player2txt.style.backgroundColor='white';
    player1.disabled=false;
    player2.disabled=false;
    document.querySelector('p span').textContent=5;
    pnts=5;
    points.disabled=false;
    points.value='';


});
// function inc(){
//     document.querySelector('h2 span').textContent=1;
//     return document.querySelector('h2 span').textContent

// };

