
$("h1").attr("class", "text-blue");

var i = 0;
$("input").keypress(function(event) {
  i = i + 1;
  $("span").text(i + event.key);
});

$(".simon-link").click(function() {
  window.open("simon.html");
  // window.location.href = "simon.html"
})
