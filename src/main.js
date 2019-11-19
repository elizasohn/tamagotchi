import $ from 'jquery';
import './tamagotchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var name= $("input#name").val();
    var gomatochi = new Tamagotchi (name);
    StatTrack(gomatochi);
    gomatochi.setHunger();
    gomatochi.starvedToDeath();

    $("#gamatochiName").text(name);
    $(".gameBoard").show();
    $(".form").hide();


    $("#feed").click(function(){
      gomatochi.feed();
    });



function StatTrack(gomatochi) {
  let timer = setInterval(() => {
    $("#hungerScore").text(gomatochi.foodLevel);
    $("#poopScore").text(gomatochi.poopLevel);
    $("#loveScore").text(gomatochi.loveLevel);
    $("#restScore").text(gomatochi.restLevel);
  }, 500);
}




    // if (player1.turn === true) {
    //   player1.hold();
    //   $(".card-player1").removeClass("bg-primary text-white");
    //   $(".card-player2").addClass("bg-danger text-white");
    //   $("#player-1-total-score").text(player1.totalScore);
    //   $("#player-1-dice").text("");
    //   $("#player1TurnScore").text("");
    //   player1.turn = false;
    //   player2.turn = true;
    // }
  });
});
