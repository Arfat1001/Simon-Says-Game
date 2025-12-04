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
  level++;
h2.innerText=`level ${level}`; 



let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
console.log(randColor)
console.log(randIdx)
console.log(randbtn)
btnFlash(randbtn);
  
} 
function btnPress(){
  console.log(this)
  let btn=this;
  userFlash(btn)
}
let Allbtns=document.querySelectorAll(".btn")
for (btn of Allbtns){
  btn.addEventListener('click',btnPress);
}