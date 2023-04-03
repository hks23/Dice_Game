function rollDice() {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        switch(dice1){
          case 1:
          document.getElementById("img1").src="images/dice1.png";
          console.log("Im here");
          break;
          case 2:
          document.getElementById("img1").src="images/dice2.png";
          break;
          case 3:
          document.getElementById("img1").src="images/dice3.png";
          break;
          case 4:
          document.getElementById("img1").src="images/dice4.png";
          break;
          case 5:
          document.getElementById("img1").src="images/dice5.png";
          break;
          case 6:
          document.getElementById("img1").src="images/dice6.png";
          break;
        }


          switch(dice2){
            case 1:
            document.getElementById("img2").src="images/dice1.png";
            break;
            case 2:
            document.getElementById("img2").src="images/dice2.png";
            break;
            case 3:
            document.getElementById("img2").src="images/dice3.png";
            break;
            case 4:
            document.getElementById("img2").src="images/dice4.png";
            break;
            case 5:
            document.getElementById("img2").src="images/dice5.png";
            break;
            case 6:
            document.getElementById("img2").src="images/dice6.png";
            break;
          }

        if (dice1 > dice2) {
          document.getElementById("winner").innerHTML = "Player 1 Wins!";
          }

        else if (dice2 > dice1) {
          document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        else{
          document.getElementById("winner").innerHTML = "It's a tie!";
        }
}
