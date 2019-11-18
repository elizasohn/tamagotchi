import $ from 'jquery';
import './tamagotchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    // player1.turn = true;

    var name= $("input#name").val();

    $("#gamatochiName").text(name);



    $("#player-1-roll").click(function(event){
      if (player1.turn === true) {
        player1.roll = diceRoll();
        $("#player-1-dice").text(player1.roll);
        player1.rollsOne();
        $("#player1TurnScore").text(player1.turnScore);
      }
    })

    $("#player-1-hold").click(function(){
      if (player1.turn === true) {
        player1.hold();
        $(".card-player1").removeClass("bg-primary text-white");
        $(".card-player2").addClass("bg-danger text-white");
        $("#player-1-total-score").text(player1.totalScore);
        $("#player-1-dice").text("");
        $("#player1TurnScore").text("");
        player1.turn = false;
      }
    })

  $(".gameBoard").show();
  $(".form").hide();

  });

});
