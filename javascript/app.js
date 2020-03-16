$(document).ready(function() {

    var questionCounter = 0;

    var timer = 10;
    var correctGuesses = 0;
    var IncorrectGuesses = 0;

    var questions = [
{
question:"Who won the 1989 world series?",
choices: ["Oakland Athletics", "New York Yankees", "Boston Celtics", "Sanfrancisco giants"],
correctAnswers: "",
image: "<img src='' class='' class='img-circle shadow'>"
},
{
    question:"12 x 12 = ?",
    choices: ["14", "140", "144", "411"],
    correctAnswers: "",
    image: "<img src='' class='' class='img-circle shadow'>"
},
{
    question:"What Color is a Red Firetruck?",
    choices: ["Blue", "Pink", "Yellow", "Red"],
    correctAnswers: "",
    image: "<img src='' class='' class='img-circle shadow'>"
},
{
    question:"Who invented Coca-Cola?",
    choices: ["Samuel Adams", "George Washington Carver", "Colonel Sanders", "John Stith Pemberton"],
    correctAnswers: "",
    image: "<img src='' class='' class='img-circle shadow'>"
},
{
    question:"What color is a Pikachu?",
    choices: ["Green", "Yellow", "Blue", "Light Orange"],
    correctAnswers: "",
    image: "<img src='' class='' class='img-circle shadow'>"
},
    ];

    var game = $("#game-container");
    var start = $(".start");

    $(".start").on("click", function() {
        questionInfo();
    });

    function questionInfo() {
        game.append(
            "<p>" +
            questions[questionCounter].question +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[0] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[2] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[3] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[3] +
            "</p><p class='choices'>" +
            questions[questionCounter].choices[1] +
            "</p>"
        );
    };

     setTimeout(function(){ questionInfo("Hello"); }, 10000);
     

    
});




