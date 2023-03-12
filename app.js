let playerSymbol = 'X';
let boardFull = false;

let winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

//watch for a click action and determine if game is in progress
for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener(
    "click",
    function() {
      if (this.innerHTML === "" && !boardFull) {
        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());
        
        checkWin();
      }
      
      //swap symbol for next turn
      if (playerSymbol === "X") 
        playerSymbol = "O"
      else
        playerSymbol = "X"
    }
  );
}

function checkWin() {
  for (let i = 0; i < winPos.length; i++) {
	if (
	  document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
	  document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
	  document.getElementById(winPos[i][2]).innerHTML === playerSymbol
	) {
	  document.getElementById(winPos[i][0]).classList.add("win");
	  document.getElementById(winPos[i][1]).classList.add("win");
	  document.getElementById(winPos[i][2]).classList.add("win"); 
	  boardFull = true;

    if (playerSymbol === "X") 
        playerSymbol = "O"
      else
        playerSymbol = "X"
        
    

	  setTimeout(function() {
	    alert(playerSymbol + " wins!");
	  }, 500);
	} else if (boardFull && !winPos) {
    setTimeout(function() {
	    alert("Draw Game!");
	  }, 500);
  }
  }
}

//  const reset_board = () => {
//    play_board = ['', '', '', '', '', '', '', '', ''];
//    boardFull = false;
//    winner.classList.remove('playerWin');
//    winner.classList.remove('computerWin');
//    winner.classList.remove('draw');
//    winner.innerText = '';
//    render_board();
//  };

//  render_board();

document.getElementById("reset").addEventListener(
  "click", 
  function() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      boardFull = false;
    }
  }
);