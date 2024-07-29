let cells = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".btn");
let newGameBtn=document.querySelector(".btn2")
let msgContainer=document.querySelector(".hide");
let msg=document.querySelector(".win");
const winningPositions=[[0,1,2],
                       [3,4,5],
                       [6,7,8],
                       [0,3,6],
                       [1,4,7],
                       [2,5,8],
                       [0,4,8],
                       [2,4,6],

];
let count = 0;
let turno=true;

const resetGame = () =>{
    turno = false;
    count=0;
  enableCells();
  msgContainer.classList.add("hide");
};
const gameDraw=()=>{
    msg.innerText=`Game was a draw`;
    msgContainer.classList.remove("hide");
    disableCells();

}

cells.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turno){
            val.textContent="O";
            turno=false;
        }
        else{
            val.textContent="X";
            turno=true;
        }
      
       val.disabled=true;
       count++;

       let isWinner=checkWinner();
       if(count===9 && !isWinner){
        gameDraw();
       }

    })
});

const disableCells = () => {
    for(let cell of cells){
       cell.disabled=true;
    };
   
};
const enableCells = () => {
    for(let cell of cells){
       cell.disabled=false;
       cell.innerText="";
       cell.classList.remove("clicked");

    };
   
};


const showWinner=(winner)=>{
  msg.innerText=`Congragulation the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableCells();
    
};

const checkWinner=()=>{
    for(let pattern of winningPositions){
     let val1= cells[pattern[0]].innerText;
     let val2=cells[pattern[1]].innerText;
     let val3=cells[pattern[2]].innerText;

     if(val1 != "" && val2!="" && val3!=""){
        if(val1===val2 && val2===val3){
            console.log("winner",val1);
            showWinner(val1);
            return true;
             
        }
     }

    }
    return false;

}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

