import $ from 'jquery';
import './tamagotchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';


$(document).ready(function() {
  $('#cartoonAnimal').click(function() {
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
  });
});


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
