let userSeq=[];
let gameSeq =[];
let btns = ["yellow","purple","blue","pink"];
let level = 0;
let h3 = document.querySelector("h3");
let start = false;

document.addEventListener('click',function(){
    if(start == false){
        console.log("key pressed");
        start = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;
    //random button
    let randInd = Math.floor(Math.random()*3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}
function checkAns(idx){
    // console.log("current level : ", level);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h3.innerHTML = `Your score was <b>${level}</b> <br> Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();

    }

}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    start = false;
    level = 0;
}