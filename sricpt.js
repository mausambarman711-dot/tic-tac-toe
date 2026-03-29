let box=document.querySelectorAll(".boxes");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let start=document.querySelector("#start");

let turno=true;

winnerpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]]


box.forEach((box)=>{
    box.addEventListener("click",()=>{
    if (turno===true){
    console.log("box is clicked");
    box.innerHTML="O";
    turno=false;
    box.disabled = true;
    }else{
        box.innerHTML="X";
        turno=true;
        box.disabled = true;
        }
    checkwinner();    
})})
const showwinner=(winner)=>{
     msg.innerHTML=`Congratulatons, winner is ${winner}`
     msgcontainer.classList.remove("hide");
}
const checkwinner=()=>{
    for(let pattern of winnerpattern){
        let pos1Val=box[pattern[0]].innerHTML;
        let pos2Val=box[pattern[1]].innerHTML;
        let pos3Val=box[pattern[2]].innerHTML;
    
    if(pos1Val !=""&& pos2Val !=""&&pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner");
            showwinner(pos1Val);
        }else{showwinner("none");
        
    }
}
}