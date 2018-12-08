window.onload = function () {


    var game = {

        numCorrect: 0,
        numIncorrect: 0,
        numUnanswered: 0,

        playerAnswer: "",
        correctAnswer: "",

        qTime: 10000,
        breakTime: 4000,
        qAndANum: 0,

        countdown: null,
        pause: null,


        printCountdown: function () {
            $('#time').text("Time remaining: 8 seconds");

            game.countdown = setInterval(function () {
                if (game.qTime === 0) {
                    clearInterval(game.countdown);
                    game.printIncorrectOrUnanswered("You ran out of time!");
                    game.timeBetween();
                } else {
                    game.qTime -= 1000;
                    $('#time').text("Time remaining: " + (game.qTime / 1000) + " seconds");
                }
            }, 1000)
        },


        timeBetween: function () {
            game.pause = setInterval(function () {
                if (game.breakTime === 0) {
                    clearInterval(game.pause);
                    game.nextQAndA();
                } else {
                    game.breakTime -= 1000;
                }
            }, 1000)
        },


        printInit: function () {            
            $('#content').empty();
            $('#content').html(
                '<div>' +
                    '<br>' +
                    '<h1 id="time" class=""></h1>' +
                    '<br>' +
                    '<div id="verbiage" class=""></div>' +
                    '<br>' +
                '</div>'                    
            );
        },



        printQAndA: function (qNum) {

            game.correctAnswer = game.qAndAArr[qNum].answerCorrect;

            $('#verbiage').empty();
            $('#verbiage').html(
                '<div id="qAndA" class="">' +
                    '<h1 id="question" class="">' + game.qAndAArr[qNum].question + '</h1>' +
                    '<br>' +
                    '<div id="choices" class="">' +
                        '<h1 id="a1" class="answer">' + game.qAndAArr[qNum].answerChoices[0] + '</h1>' +
                        '<h1 id="a2" class="answer">' + game.qAndAArr[qNum].answerChoices[1] + '</h1>' +
                        '<h1 id="a3" class="answer">' + game.qAndAArr[qNum].answerChoices[2] + '</h1>' +
                        '<h1 id="a4" class="answer">' + game.qAndAArr[qNum].answerChoices[3] + '</h1>' +
                    '</div>' +
                '</div>'
            )

        },

        printCorrect: function () {
            $('#verbiage').empty();
            $('#verbiage').html(
                '<div>' +
                    // '<br>' +
                    '<h1 id="result" class="">Correct!</h1>' +
                    '<br>' +
                    '<img src="https://via.placeholder.com/300x200">' +
                    // '<br>'  +
                '</div>'
            )
        },


        printIncorrectOrUnanswered: function (result) {
            $('#verbiage').empty();
            $('#verbiage').html(
                '<div>' +
                    // '<br>' +
                    '<h1 id="result" class="">' + result + '</h1>' +
                    '<br>' +
                    '<h1 id="correctAnswer" class="">The correct answer was: ' + game.correctAnswer + '</h1>' +
                    '<br>' +
                    '<img src="https://via.placeholder.com/300x200">' +
                    // '<br>' +
                '</div>'
            )
        },


        printEndGame: function () {
            $('#verbiage').empty();
            $('#verbiage').html(
                '<div>' +
                    // '<br>' +
                    '<h1 id="result" class="">All done, here\'s you you did!</h1>' +
                    '<br>' +
                    '<h2 id="correctAnswer" class="">Correct answers: ' + game.numCorrect + '</h2>' +
                    '<br>' +
                    '<h2 id="correctAnswer" class="">Incorrect answers: ' + game.numIncorrect + '</h2>' +
                    '<br>' +
                    '<h2 id="correctAnswer" class="">Unanswered: ' + game.numUnanswered + '</h2>' +                    
                    '<br>' +
                    '<button id="restartBtn" class="">Start over?</button>' +
                    // '<br>' +
                '</div>'
            )
        },        


        nextQAndA: function() {
            if (game.qAndANum === 0) {
                game.printEndGame();
            } else {
                game.qTime = 10000;
                game.breakTime = 3000;
                game.qAndANum++;
                game.printQAndA(game.qAndANum);
                game.printCountdown();
            }
        },



        qAndAArr: [
            {
                'question': "What is the capital of Pennsylvania?",
                'answerChoices': ["Harrisburg", "Philadelphia", "Scranton", "Pittsburgh"],
                'answerCorrect': "Harrisburg"
            }
            // {
            //     'question': "What is the capital of Ohio?",
            //     'answerChoices': ["Columbus", "Cleveland", "Cincinnati", "Akron"],
            //     'answerCorrect': "Columbus"
            // },
            // {
            //     'question': "What is the capital of West Virginia?",
            //     'answerChoices': ["Huntington", "Charleston", "Morgantown", "Wheeling"],
            //     'answerCorrect': "Charleston"
            // },
            // {
            //     'question': "What is the capital of Maryland?",
            //     'answerChoices': ["Baltimore", "College Park", "Bel Air", "Annapolis"],
            //     'answerCorrect': "Annapolis"
            // },

            // {
            //     'question': "What is the capital of New Jersey?",
            //     'answerChoices': ["Princeton", "Newark", "Trenton", "Hamilton"],
            //     'answerCorrect': "Trenton"
            // },
            // {
            //     'question': "What is the capital of New York?",
            //     'answerChoices': ["Syracuse", "West Chester", "Albany", "New York City"],
            //     'answerCorrect': "Albany"
            // },
            // {
            //     'question': "What is the capital of Delaware?",
            //     'answerChoices': ["Newark", "Wilmington", "Dover", "Milford"],
            //     'answerCorrect': "Dover"
            // },
            // {
            //     'question': "What is the capital of Connecticut?",
            //     'answerChoices': ["Fairfield", "Hartford", "Storrs", "Mystic"],
            //     'answerCorrect': "Hartford"
            // },

            // {
            //     'question': "What is the capital of Massachusetts?",
            //     'answerChoices': ["Boston", "Worcester", "Lowell", "Cambridge"],
            //     'answerCorrect': "Boston"
            // },
            // {
            //     'question': "What is the capital of Rhode Island?",
            //     'answerChoices': ["Woonsocket", "Providence", "Warwick", "Cranston"],
            //     'answerCorrect': "Providence"
            // },
            // {
            //     'question': "What is the capital of Texas?",
            //     'answerChoices': ["Dallas", "Houston", "San Antonio", "Austin"],
            //     'answerCorrect': "Austin"
            // },
            // {
            //     'question': "What is the capital of California?",
            //     'answerChoices': ["Oakland", "San Fransisco", "Sacremento", "Los Angeles"],
            //     'answerCorrect': "Sacremento"
            // },
        ],



    }



    $('body').on('click', '#startBtn', function () {
        game.printInit();
        game.printCountdown();
        game.printQAndA(game.qAndANum);
    });



    $('body').on('click', '#restartBtn', function () {
        game.numCorrect = 0;
        game.numIncorrect = 0;
        game.numUnanswered = 0;

        game.playerAnswer = "";
        game.correctAnswer = "";

        game.qTime = 10000;
        game.breakTime = 4000;
        game.qAndANum = 0;

        game.countdown = null;
        game.pause = null;

        game.printInit();
        game.printCountdown();
        game.printQAndA(game.qAndANum);
    });    


    $('body').on('click', '.answer', function () {

        clearInterval(game.countdown);

        game.playerAnswer = $(this).text();

        if (game.playerAnswer === game.correctAnswer) {
            game.printCorrect();   
            game.numCorrect++;
        } else if (game.player !== game.correctAnswer) {
            game.printIncorrectOrUnanswered("Nope!");
            game.numIncorrect++;
        };

        game.timeBetween();
    });










};