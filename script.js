let buttons = document.querySelectorAll('.button');
buttons= Array.from(buttons);
let jouer1 =document.getElementById("jouer1");
let jouer2 =document.getElementById("jouer2");
let player =document.querySelector(".player");
let winner =document.querySelector(".winner");
let currentPlayer = "X";
let checkwinner = 0
letlistWining = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function theWinner(currentPlayer){
        
    letlistWining.forEach(function(combination){
        let check = combination.every(index => buttons[index].innerText == currentPlayer )
        if(check){
            if(currentPlayer == "X" ){
                  
                      winner.innerText=  `winner ` + " " + localStorage.getItem("player1")
checkwinner =1;
            }else{
                      winner.innerText=  `winner ` + ` ` + localStorage.getItem("player2")
                   checkwinner=1
            } 
                    
        }
    })
}
function game(){


buttons.forEach(function(button ){
    button.addEventListener('click', function(){
            
            localStorage.setItem("player1",jouer1.value);
            localStorage.setItem("player2",jouer2.value);
            let b=0

      if(checkwinner==0){
                b = button.innerText = currentPlayer; 
            } else{

                console.log('nothing') 
            }
        
            if(currentPlayer == "X" ){
                currentPlayer = "O" ;
                 player.innerText = localStorage.getItem("player1");
            }else{
                currentPlayer = "X"; 
                player.innerText = localStorage.getItem("player2");
                 
            }
            theWinner(b)
                
            
            
            
          
        
    })
})
  
}

game();













  