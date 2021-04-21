// alert("simon"); // js test pass

// $("h1").css("color", "blue"); // jquery test pass

//button pressed respoond
// $("#green").mouseenter(function() {
//   $(this).addClass("hovered");
// });

var simonPattern = [];
var randomChosenButton;

var btnList = ["#green", "#red", "#blue", "#yellow"];
// console.log(btnList[0]);
var btnNumber;

var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

var btnAudios = [greenAudio, redAudio, blueAudio, yellowAudio];


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------above is variable list, below is actual run------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

mouseEntered();
mouseExited();

// patternGenerator();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------above is actual run, below is all the functions------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mouseEntered() {
  $(btnList[0]).mouseenter(function() {
    console.log("mosue enter" + btnList[0]);
    $(this).addClass("hovered");
  });

  $(btnList[1]).mouseenter(function() {
    console.log("mosue enter" + btnList[1]);
    $(this).addClass("hovered");
  });

  $(btnList[2]).mouseenter(function() {
    console.log("mosue enter" + btnList[2]);
    $(this).addClass("hovered");
  });

  $(btnList[3]).mouseenter(function() {
    console.log("mosue enter" + btnList[3]);
    $(this).addClass("hovered");
  });
}

function mouseExited() {
  $("[type=button]").mouseleave(function() {
    $("[type=button]").removeClass("hovered");
  });
}


//generate the random sequence for simon
function patternGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenButton = btnList[randomNumber];
  btnNumber = randomNumber;

  simonPattern.push(randomChosenButton);

  console.log(randomNumber);
  console.log(randomChosenButton);
  console.log(simonPattern);
}

//button flash and play audio
function randomButtonFlash() {
  $(randomChosenButton).fadeOut("fast").fadeIn("fast");
  btnAudios[btnNumber].play();
}



//testing purpose only
$("#test-button").click(patternGenerator);
$("#test-button").click(randomButtonFlash);
