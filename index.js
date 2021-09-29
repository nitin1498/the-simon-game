var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber + 'nitin');
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

}
