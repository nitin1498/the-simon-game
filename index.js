var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var keyPressFirstTime = true;
var level = 0;


$(document).keypress(() => {
    if(keyPressFirstTime) {
        nextSequence();
        $('h1').text(`Level ${level}`);
        keyPressFirstTime = false;
    }
})

$('.btn').click(function () {
    var userChosenColour = $( this ).attr('id');
    userClickPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickPattern.length - 1);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    ++level;
    $('h1').text(`Level ${level}`);
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(() => {$('#' + currentColour).removeClass('pressed')}, 100);
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] == userClickPattern[currentLevel]) {
        if(userClickPattern.length == gamePattern.length) {
            setTimeout(() => {nextSequence()}, 1000);
            userClickPattern = [];
        }
    } else {
        $('body').addClass('game-over');
        playSound('wrong');
        setTimeout(() => { $('body').removeClass('game-over'); }, 200);
        $('h1').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    keyPressFirstTime = true;
}