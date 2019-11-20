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

//giphy API--
    const animal= $('#animal').val();
    $('#animal').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=cartoon ${animal}`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showImage').append(`<img src="${response.data.images.original.url}">`);
    }
    //end giphy API--

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
    if (gomatochi.foodLevel == 10) {
      $(".rect8").hide();
      $(".rect6").show();
      $(".rect4").hide();
      $(".rect2").hide();
      $(".rect").hide();
      $(".rect10").show();
    } else if (gomatochi.foodLevel == 8) {
      $(".rect10").hide();
      $(".rect8").show();
    } else if (gomatochi.foodLevel == 6) {
      $(".rect8").hide();
      $(".rect6").show();
    } else if (gomatochi.foodLevel == 4) {
      $(".rect6").hide();
      $(".rect4").show();
    } else if (gomatochi.foodLevel == 2) {
      $(".rect4").hide();
      $(".rect2").show();
    } else {
      $(".rect2").hide();
      $(".rect").show();
    };
    //
    // if (gomatochi.poopLevel == 10) {
    //   $(".poop.rect8").hide();
    //   $(".poop.rect6").show();
    //   $(".poop.rect4").hide();
    //   $(".poop.rect2").hide();
    //   $(".poop.rect").hide();
    //   $(".poop.rect10").show();
    // } else if (gomatochi.poopLevel == 8) {
    //   $(".poop.rect10").hide();
    //   $(".poop.rect8").show();
    // } else if (gomatochi.poopLevel == 6) {
    //   $(".poop.rect8").hide();
    //   $(".poop.rect6").show();
    // } else if (gomatochi.poopLevel == 4) {
    //   $(".poop.rect6").hide();
    //   $(".poop.rect4").show();
    // } else if (gomatochi.poopLevel == 2) {
    //   $(".poop.rect4").hide();
    //   $(".poop.rect2").show();
    // } else {
    //   $(".poop.rect2").hide();
    //   $(".poop.rect").show();
    // };
    // if (gomatochi.loveLevel == 10) {
    //   $(".love.rect8").hide();
    //   $(".love.rect6").show();
    //   $(".love.rect4").hide();
    //   $(".love.rect2").hide();
    //   $(".love.rect").hide();
    //   $(".love.rect10").show();
    // } else if (gomatochi.loveLevel == 8) {
    //   $(".love.rect10").hide();
    //   $(".love.rect8").show();
    // } else if (gomatochi.loveLevel == 6) {
    //   $(".love.rect8").hide();
    //   $(".love.rect6").show();
    // } else if (gomatochi.loveLevel == 4) {
    //   $(".love.rect6").hide();
    //   $(".love.rect4").show();
    // } else if (gomatochi.loveLevel == 2) {
    //   $(".love.rect4").hide();
    //   $(".love.rect2").show();
    // } else {
    //   $(".love.rect2").hide();
    //   $(".love.rect").show();
    // };
    // if (gomatochi.restLevel == 10) {
    //   $(".rest.rect8").hide();
    //   $(".rest.rect6").show();
    //   $(".rest.rect4").hide();
    //   $(".rest.rect2").hide();
    //   $(".rest.rect").hide();
    //   $(".rest.rect10").show();
    // } else if (gomatochi.restLevel == 8) {
    //   $(".rest.rect10").hide();
    //   $(".rest.rect8").show();
    // } else if (gomatochi.restLevel == 6) {
    //   $(".rest.rect8").hide();
    //   $(".rest.rect6").show();
    // } else if (gomatochi.restLevel == 4) {
    //   $(".rest.rect6").hide();
    //   $(".rest.rect4").show();
    // } else if (gomatochi.restLevel == 2) {
    //   $(".rest.rect4").hide();
    //   $(".rest.rect2").show();
    // } else {
    //   $(".rest.rect2").hide();
    //   $(".rest.rect").show();
    // };

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
