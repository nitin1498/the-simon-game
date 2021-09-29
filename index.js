var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];

$('.btn').click(function () {
    var userChosenColour = $( this ).attr('id');
    userClickPattern.push(userChosenColour);
    console.log(userClickPattern);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber + 'nitin');
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/' + randomChosenColor + ".mp3");
    audio.play();
}

