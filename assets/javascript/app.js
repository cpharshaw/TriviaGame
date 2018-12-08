window.onload = function () {


    var game = {

        numCorrect: 0,
        numIncorrect: 0,
        numUnanswered: 0,

        playerAnswer: "",
        correctAnswer: "",

        qTime: 10000,
        breakTime: 3000,
        qAndANum: 0,

        countdown: null,
        pause: null,


        printCountdown: function () {
            $('#time').text("Time remaining: 10 seconds");

            game.countdown = setInterval(function () {
                if (game.qTime === 0) {
                    clearInterval(game.countdown);
                    game.numUnanswered++;
                    game.printIncorrectOrUnanswered("You ran out of time!", game.qAndANum);
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
                    console.log(game.qAndANum + ', ' + game.qAndAArr.length);
                    game.nextQAndA();
                } else {
                    game.breakTime -= 1000;
                }
            }, 1000)
        },


        printInit: function () {            
            $('#content').empty();
            $('#content').html(
                '<div id="">' +
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
                        '<br>' +
                        '<h1 id="a2" class="answer">' + game.qAndAArr[qNum].answerChoices[1] + '</h1>' +
                        '<br>' +
                        '<h1 id="a3" class="answer">' + game.qAndAArr[qNum].answerChoices[2] + '</h1>' +
                        '<br>' +
                        '<h1 id="a4" class="answer">' + game.qAndAArr[qNum].answerChoices[3] + '</h1>' +
                    '</div>' +
                '</div>'
            )

        },

        printCorrect: function (qNum) {
            $('#verbiage').empty();
            $('#verbiage').html(
                '<div id="">' +
                    // '<br>' +
                    '<h1 id="result" class="">Correct!</h1>' +
                    '<br>' +
                    '<img src="' + game.qAndAArr[qNum].image + '">' +
                    // '<br>'  +
                '</div>'
            )
        },


        printIncorrectOrUnanswered: function (result, qNum) {
            $('#verbiage').empty();
            $('#verbiage').html(
                '<div id="">' +
                    '<br>' +
                    '<h1 id="result" class="">' + result + '</h1>' +
                    '<br>' +
                    '<h1 id="correctAnswer" class="">The correct answer was: ' + game.correctAnswer + '</h1>' +
                    '<br>' +
                    '<img src="' + game.qAndAArr[qNum].image + '">' +
                    // '<br>' +
                '</div>'
            )
        },


        printEndGame: function () {
            $('#verbiage').empty();
            $('#verbiage').html(
                '<div id="">' +
                    // '<br>' +
                    '<h1 id="result" class="">All done, here\'s you you did!</h1>' +
                    '<br>' +
                    '<h2 id="correctAnswer" class="">Correct answers: ' + game.numCorrect + '</h2>' +
                    '<br>' +
                    '<h2 id="correctAnswer" class="">Incorrect answers: ' + game.numIncorrect + '</h2>' +
                    '<br>' +
                    '<h2 id="correctAnswer" class="">Unanswered: ' + game.numUnanswered + '</h2>' +                    
                    '<br>' +
                    '<div id="restartBtn" class="button">Start over?</div>' +
                    // '<br>' +
                '</div>'
            )
        },        


        nextQAndA: function() {
            if (game.qAndANum === game.qAndAArr.length - 1) {
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
                'image': 'https://barletta.house.gov/sites/barletta.house.gov/files/styles/congress_office_location_thumbnail/public/featured_image/office_location/Harrisburg.jpg?itok=CieLww3j',
                'answerChoices': ["Harrisburg", "Philadelphia", "Scranton", "Pittsburgh"],
                'answerCorrect': "Harrisburg"
            },
            {
                'question': "What is the capital of Ohio?",
                'image': 'https://www.travelshelper.com/wp-content/uploads/2017/01/Columbus-Ohio-travel-guide-Travel-S-Helper-400x300.jpg',
                'answerChoices': ["Columbus", "Cleveland", "Cincinnati", "Akron"],
                'answerCorrect': "Columbus"
            },
            {
                'question': "What is the capital of West Virginia?",
                'image': 'http://2.bp.blogspot.com/_BAsoDFpqKII/Sefuci5SrpI/AAAAAAAAAhw/h2jRkxRxbbI/s400/CitySign_2009-04-16.jpg',
                'answerChoices': ["Huntington", "Charleston", "Morgantown", "Wheeling"],
                'answerCorrect': "Charleston"
            },
            {
                'question': "What is the capital of Maryland?",
                'image': 'http://img.homesale.com/Homes/Images/Listings/126063923/1/dfb838714137d7cc1305e7b8be93800c/Yes/400/300/Photo.jpg',
                'answerChoices': ["Baltimore", "College Park", "Bel Air", "Annapolis"],
                'answerCorrect': "Annapolis"
            },

            {
                'question': "What is the capital of New Jersey?",
                'image': 'http://ancestrymemorials.com/Content/images/inscriptions-1.jpg',
                'answerChoices': ["Princeton", "Newark", "Trenton", "Hamilton"],
                'answerCorrect': "Trenton"
            },
            {
                'question': "What is the capital of New York?",
                'image': 'https://s3.amazonaws.com/gs-waymarking-images/10c72de7-3d57-4f6c-8716-c145534e22c1_d.JPG',
                'answerChoices': ["Syracuse", "West Chester", "Albany", "New York City"],
                'answerCorrect': "Albany"
            },
            {
                'question': "What is the capital of Delaware?",
                'image': 'https://s3.amazonaws.com/gs-waymarking-images/13067aef-b861-46eb-ae63-11e0600c6436_d.JPG',
                'answerChoices': ["Newark", "Wilmington", "Dover", "Milford"],
                'answerCorrect': "Dover"
            },
            {
                'question': "What is the capital of Connecticut?",
                'image': 'https://www.gpsmycity.com/img/gd_attr/47749.jpg',
                'answerChoices': ["Fairfield", "Hartford", "Storrs", "Mystic"],
                'answerCorrect': "Hartford"
            },

            {
                'question': "What is the capital of Massachusetts?",
                'image': 'https://cdn.bestday.net/_lib/vimages/Tours/boston-un-dia-desde-nyc/fachada_g.jpg',
                'answerChoices': ["Boston", "Worcester", "Lowell", "Cambridge"],
                'answerCorrect': "Boston"
            },
            {
                'question': "What is the capital of Rhode Island?",
                'image': 'https://s3.amazonaws.com/gs-waymarking-images/b6c71007-28e0-43df-b90b-7f270b5e9edd_d.jpg',
                'answerChoices': ["Woonsocket", "Providence", "Warwick", "Cranston"],
                'answerCorrect': "Providence"
            },
            {
                'question': "What is the capital of Texas?",
                'image': 'https://photos.smugmug.com/Buy-Prints/Texas/i-bHxZM2P/0/e9d4af37/S/austin-20-S.jpg',
                'answerChoices': ["Dallas", "Houston", "San Antonio", "Austin"],
                'answerCorrect': "Austin"
            },
            {
                'question': "What is the capital of California?",
                'image': 'https://www.picclickimg.com/d/l400/pict/122431867702_/Sacramento-California-CA-State-Capitol-Building-Vintage-Linen.jpg',
                'answerChoices': ["Oakland", "San Fransisco", "Sacramento", "Los Angeles"],
                'answerCorrect': "Sacramento"
            },
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
        game.breakTime = 3000;
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
            game.printCorrect(game.qAndANum);   
            game.numCorrect++;
        } else if (game.player !== game.correctAnswer) {
            game.printIncorrectOrUnanswered("Nope!", game.qAndANum);
            game.numIncorrect++;
        };

        game.timeBetween();
    });










};