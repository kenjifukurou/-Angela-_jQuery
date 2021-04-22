// alert("simon"); // js test pass

// $("h1").css("color", "blue"); // jquery test pass

//button pressed respoond
// $("#green").mouseenter(function() {
//   $(this).addClass("hovered");
// });

var array1 = ["a", "b", "c"];
var array2 = ["a", "b", "c"];
console.log(array1);
console.log(array2);

if (array1[2] === array2[2]) {
  console.log("array content is same");
} else {
  console.log("false");
}

var simonPattern = [];
var userPattern = [];
var randomChosenButton;
var userChosenButton;

var btnList = ["green", "red", "blue", "yellow"];
// console.log(btnList[0]);
// var btnNumber;

var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

var btnAudios = [greenAudio, redAudio, blueAudio, yellowAudio];
for (i=0; i<btnAudios.length; i++) {
  btnAudios[i].volume = 0.2;
}
wrongAudio.volume = 0.2;

var gameStarted = false;
var level = 0;

console.log(gameStarted);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------above is variable list, below is actual run------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
newGame();

mouseEntered();
mouseExited();

handlerUserClick();

//press any key to start and call pattern-generator



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------above is actual run, below is all the functions------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function newGame() {
  $(".restart-hint").hide();
  $(document).keypress(function(event) {
    if (event.keyCode == "32") {
      if (!gameStarted) {
        console.log("game start now");
        gameStarted = true;
        patternGenerator();
        $(".game-title").text("Level " + level);
      } else {
        console.log("game already started");
      }
    }
  });
}

function delayStartPatternGenerator() {
  setTimeout(function() {
    patternGenerator();
  }, 1000);
}

function mouseEntered() {
  $(btnList[0]).mouseenter(function() {
    // console.log("mosue enter" + btnList[0]);
    $(this).addClass("hovered");
  });

  $(btnList[1]).mouseenter(function() {
    // console.log("mosue enter" + btnList[1]);
    $(this).addClass("hovered");
  });

  $(btnList[2]).mouseenter(function() {
    // console.log("mosue enter" + btnList[2]);
    $(this).addClass("hovered");
  });

  $(btnList[3]).mouseenter(function() {
    // console.log("mosue enter" + btnList[3]);
    $(this).addClass("hovered");
  });
}

function mouseExited() {
  $("[type=button]").mouseleave(function() {
    $("[type=button]").removeClass("hovered");
  });
}

//test check answer
$(document).keypress(function(event) {
  if (event.key == "a") {
    checkSimonAnswer();
  } else if (event.key == "d") {
    checkUserAnswer();
  } else if (event.key == "g") {
    checkFinalAnswer();
  }
});

function checkSimonAnswer() {
  var simonLastColor = simonPattern[simonPattern.length - 1];
  console.log("simon last color is " + simonLastColor);
}

function checkUserAnswer() {
  var userLastColor = userPattern[userPattern.length - 1];
  console.log("user last color is " + userLastColor);
}

//compare and check final answer
function checkFinalAnswer() {
  var simonLastColor = simonPattern[simonPattern.length - 1];
  var userLastColor = userPattern[userPattern.length - 1];
  var answer = simonLastColor.localeCompare(userLastColor);
  console.log(answer);
  if (answer != 0) {
    console.log("wrong!");
    wrongAudio.play();
    gameOver();
  } else {
    console.log("awesome! next level: " + level);
    delayStartPatternGenerator();
  }
}

function gameOver() {
  $(".game-title").text("Game Over ~_~");
  $(".restart-hint").show();
  $(document).keypress(function(event) {
    if (event.key == "r") {
      console.log("restart game");
      restartGame();
    }
  });
}

function restartGame() {
  simonPattern = [];
  userPattern = [];
  $(".game-title").text("Press Space Key to Start");
  gameStarted = false;
  level = 0;
  newGame();
}

//user clicked pattern record
function handlerUserClick() {

  $(".btn").click(function(event) {
    userChosenButton = event.target.id;
    userPattern.push(userChosenButton);

    var index;
    switch (userChosenButton) {
      case "green":
        index = 0;
        break;
      case "red":
        index = 1;
        break;
      case "blue":
        index = 2;
        break;
      case "yellow":
        index = 3;
        break;
    }
    buttonFlash(index);
    buttonPressed(userChosenButton);

    console.log(userChosenButton);
    console.log(userPattern);

    checkFinalAnswer();
  });

}

//generate the random sequence for simon
function patternGenerator() {
  level += 1;

  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenButton = btnList[randomNumber];
  buttonFlash(randomNumber);

  simonPattern.push(randomChosenButton);

  //random button flash base on generated number
  $(randomChosenButton).fadeOut("fast").fadeIn("fast");

  console.log(randomChosenButton);
  console.log(simonPattern);
}

function buttonFlash(number) {
  $("#"+btnList[number]).fadeOut("fast").fadeIn("fast");
  btnAudios[number].play();
}

function buttonPressed(idName) {
  $("#"+idName).addClass("pressed");
  setTimeout(function() {
    $("#"+idName).removeClass("pressed");
  }, 300);
}

//testing purpose only
$("#test-button").click(patternGenerator);
