let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector('h2');
let btns=['yellow','red','green','blue']
document.addEventListener('keypress',function(){
  if(started==false){
    console.log("game is started")
    started=true;
    levelUp();
    }
});



function btnFlash(btn){
  btn.classList.add('flash');

  setTimeout(function(){
    btn.classList.remove("flash")
  },250)
}

function userFlash(btn){
  btn.classList.add('userflash');

  setTimeout(function(){
    btn.classList.remove("userflash")
  },250)
}
function levelUp(){
  userSeq=[];
  level++;
h2.innerText=`level ${level}`; 



let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq)
btnFlash(randbtn);
  
} 
function checkAns(idx){

  if(userSeq[idx]==gameSeq[idx]){  
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000)
    }
    console.log("same value")
  }
  else{
   h2.innerHTML=`Game Over. <b>Your score was ${level}</b>.<br>Press any key to start again`; 
   document.querySelector('body').style.backgroundColor='red';
   setTimeout(function(){
document.querySelector('body').style.backgroundColor='white';
   },150)
   reset();
  }


}
function btnPress(){
  // console.log(this)
  let btn=this;
  userFlash(btn)
userColor=btn.getAttribute('id');
userSeq .push(userColor);
checkAns(userSeq.length-1);

}
let Allbtns=document.querySelectorAll(".btn")
for (btn of Allbtns){
  btn.addEventListener('click',btnPress);
}
function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;


}