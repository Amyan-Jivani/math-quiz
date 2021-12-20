function login(){
   player1= document.getElementById("logininput1").value;
   player2= document.getElementById("logininput2").value;
   localStorage.setItem("player_1_name", player1 );
   localStorage.setItem("player_2_name", player2 );
   window.location="game_page.html";
}