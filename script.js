var dragonEle = document.body.querySelector(".dragon");
var userEle = document.body.querySelector(".user");
var resultEle = document.body.querySelector(".result");
Math.floor(Math.random() * 10)+1; 

var dragon = 0; 
var user = 0;
while (dragon< 10 && user<5) {
  var dragonPrompt = Number(prompt("What the number of hits they are going to attempt to hit the dragon?"));
  if(dragonPrompt>5){ 
    dragonPrompt = 1;
    user=user+( Math.floor(Math.random() * 2)+1 );
    dragon=dragon+ (Math.floor(Math.random() * dragonPrompt)+1 );
    dragonEle.innerHTML=dragon+" dragon damage";
    userEle.innerHTML=user+" user damage";
  }else{
    user=user+( Math.floor(Math.random() * 2)+1 );
    dragon=dragon+ (Math.floor(Math.random() * dragonPrompt)+1 );
    dragonEle.innerHTML=dragon+" dragon damage";
    userEle.innerHTML=user+" user damage";
  }
}
if(dragon>10){
  resultEle.innerHTML="user won"
}
if(user>5){
  resultEle.innerHTML="user lost"
}