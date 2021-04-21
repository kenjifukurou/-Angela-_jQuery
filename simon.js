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

mouseEntered();
mouseExited();

patternGenerator();


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
  simonPattern.push(randomChosenButton);
  console.log(randomChosenButton);
  console.log(simonPattern);
}

$("#test-button").click(patternGenerator);
