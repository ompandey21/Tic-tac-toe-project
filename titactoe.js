let boxes=document.querySelectorAll(".box");
let turnO=true;
let winner=document.querySelector("#Winner");
let end=document.querySelector(".end");
let display= document.querySelector("#display");
let count=0;
let started=false;
let startBtn=document.querySelector("#start");
let resetBtn=document.querySelector("#resetBtn");
let player1=document.getElementById("username1");
let player2=document.getElementById("username2");
let headMsg=document.getElementById("head_msg");
let winnername=document.getElementById("winnername");


player1.addEventListener("input",()=>{
    document.getElementById("inputValue").textContent= player1.value;
})
player2.addEventListener("input",()=>{
    document.getElementById("inputValue").textContent= player2.value;
})
console.log(player1.value);
console.log(player2.value);

    
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

const checkWinner = () => {
    for(pattern of winPatterns){
          let pos1=boxes[pattern[0]].innerText;
          let pos2=boxes[pattern[1]].innerText;
          let pos3=boxes[pattern[2]].innerText;
          
         if(pos1!=="" && pos2!=="" && pos3!==""){ 
            if(pos1===pos2 && pos2===pos3){
            disableBox();
            if(pos1==="O"){
                display.innerText=`Winner is ${player1.value}`;
                headMsg.innerHTML=`CONGRATS ${player1.value}!! &#129395;`;
                winnername.innerHTML=`Better luck next time ${player2.value} &#129730;`;
                end.classList.remove("endHide");
            }
            else if(pos1==="X"){
                display.innerText=`Winner is ${player2.value}`;
                headMsg.innerHTML=`CONGRATS ${player2.value}!! &#129395;`;
                winnername.innerHTML=`Better luck next time ${player1.value} ...&#129730;`;
                end.classList.remove("endHide");
            }
            return true;
        
          }}
    }
    
};
const startGame = () => {
    turnO = true;
    started = true;
    count = 0;
    enableboxes();
    startBtn.innerText = "NEW GAME";
    
};
const newGame = () => {
    turnO = true;
    started = false;
    count = -1;
    enableboxes();
    startBtn.innerText = "START GAME";
    player1.value="";
    player2.value="";
};
const gameDrawn= () => {
    display.innerText="GAME DRAWN";
    headMsg.innerHTML="TOUGH ONES HERE!! &#128517;";
    winnername.innerHTML=`Game Was a Draw..Let's Try Again!`;
    end.classList.remove("endHide");
    disableBox();
    
}



const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
    display.innerText=`${player1.value}'s turn`;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        console.log("Box was clicked!");
        box.innerText="O";
        display.innerText=`${player2.value}'s turn`;
        turnO=false;
        }
        else{
            console.log("Box was clicked!");
            box.innerText="X";
            turnO=true;
            display.innerText=`${player1.value}'s turn`;
            
        }
        box.disabled = true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDrawn();
        }
    })
});

const disableBox= ()=>{
    for(let box of boxes){
        box.disabled = true;
        
    }
};
startBtn.addEventListener("click",startGame);
resetBtn.addEventListener("click",startGame);





 
