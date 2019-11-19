import $ from 'jquery';
import './tamagotchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    let name= $("input#name").val();
    let gomatochi = new Tamagotchi (name);

    StatTrack(gomatochi);
    gomatochi.setHunger();
    gomatochi.setBathroom();
    gomatochi.setLove();
    gomatochi.setRest();
    gomatochi.setEvolve();
    gomatochi.isDead();
    gomatochi.warning();

    $(".gamatochiName").text(name);
    $(".gameBoard").show();
    $(".form").hide();

    $("#feed").click(function(){
      gomatochi.feed();
    });
    $("#clean").click(function(){
      gomatochi.clean();
    });
    $("#love").click(function(){
      gomatochi.love();
    });
    $("#rest").click(function(){
      gomatochi.rest();
    });


function StatTrack(gomatochi) {
  setInterval(() => {
    $("#hungerScore").text(gomatochi.foodLevel);
    $("#poopScore").text(gomatochi.poopLevel);
    $("#loveScore").text(gomatochi.loveLevel);
    $("#restScore").text(gomatochi.restLevel);
    $("#warnings").text(gomatochi.warning());
    if (gomatochi.isDead() === true) {
      $(".gameBoard").hide();
      $("#died").show();
    }
    
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
