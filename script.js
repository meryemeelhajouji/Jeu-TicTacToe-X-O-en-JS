
let buttons = document.querySelectorAll('.button')
buttons = Array.from(buttons)

letlistWining = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]




let currentPlayer = "X"
buttons.forEach(function(button){
    button.addEventListener('click', function(){
       
        button.innerText = currentPlayer
  
        if(currentPlayer == "X" ){
           return currentPlayer = "O" 
            
        }else{
            currentPlayer = "X" 
        }
    })
})












let buttons1 = document.getElementById("buttons1").value;
  let buttons2 = document.getElementById("buttons2").value;
  let buttons3 = document.getElementById("buttons3").value;
  let buttons4 = document.getElementById("buttons4").value;
  let buttons5 = document.getElementById("buttons5").value;
  let buttons6 = document.getElementById("buttons6").value;
  let buttons7 = document.getElementById("buttons7").value;
  let buttons8 = document.getElementById("buttons8").value;
  let buttons9 = document.getElementById("buttons9").value;
  let won = document.getElementById("won").value;

  function affichage() {
 
  if((buttons1 =='x' && buttons2 =='x' && buttons1 =='x')|| (buttons4 =='x' && buttons5 =='x' && buttons6 =='x')||(buttons7 =='x' && buttons8 =='x' && buttons9 =='x')){
    won.innerText='congratulation playerX';
    won.innerHTML = "Player 0 won";
    window.alert('Player X won');

      }
  }
  affichage();


  