(function(){

// var shownQuestions = [];
var currentQuestion = 0;
var correctAnswer = 0;
var questions = getQuestions();
displayQuestion(questions[currentQuestion]);


$('.button.save').on('click', function() {
  if (!checkAnswer(questions[currentQuestion])){
    return;
  };
  currentQuestion ++;
  if(currentQuestion < questions.length){
    displayQuestion(questions[currentQuestion]);
  }else{
    var score = correctAnswer * 10;
    $('.score').html('<div id="final-score">'+score+'</div');
  }
  // body...
})
// displayRandomQuestion();

// function displayRandomQuestion () {
//   var questions = getQuestions();

//   do {
//     var randomize = Math.floor((Math.random() * 10));
//   } while(shownQuestions.length < questions.length && $.inArray(randomize, shownQuestions) > -1);

//   shownQuestions.push(randomize);
//   displayQuestion(questions[randomize]);

// }

  function displayQuestion (question) {
    $('#question').html('<div class="questionText">'+ question.question + '</div>');
    displayOptions(question.options);
  };


  function displayOptions (options) {
    $('#options').html('');
    for(var i in options) {
      $('#options').append('<label><input type="radio" name="user-answer" id="user-answer" value="'+options[i]+'"> '+options[i]+'</label>');
    }
  }

  function checkAnswer(question) {
    var userAnswer = $("#user-answer:checked").val();

    if(!userAnswer) {
      return false;
    }

    if(userAnswer == question.answer){
      console.log('correct');
      correctAnswer ++;
    }else{
      console.log('wrong');
    }
    return true;
  }


  function getQuestions() {
    var questionAnswer = [
      {
        id: 1,
        question: "What are the first names of Rosemary and Guy's next door neighbors in Rosemary's baby?",
        answer: "Roman and Minnie",
        options: [
          "Roman and Minnie",
          "Bill and Marie",
          "Tom and Sue"
        ],
        link: "./img/polish_rosemary"
      }, {
        id: 2,
        question: "How many films are in the Nightmare on Elm Street series?",
        answer: 9,
        options: [
          4,
          7,
          9
        ],
        link: "./img/freddy.jpg"
      }, {
        id: 3,
        question: "What was the name of the summer camp in the first two Friday the 13th films?",
        answer: "Camp Crystal Lake",
        options: [
          "Camp Far Falls",
          "Camp Blue Skies",
          "Camp Crystal Lake"
        ],
        link: "./img/jason.jpg"
      }, {
        id: 4,
        question: "What was Alfred Hitchcok's first film?",
        answer: "The Man Who Knew Too Much",
        options: [
          "The Lady Vanishes",
          "North by Northwest",
          "The Man Who Knew Too Much"
        ],
        link: './img/hitchcock.jpg'
      }, {
        id: 5,
        question: "What was the name of the family from The Amityville Horror?",
        answer: "Lutz",
        options: [
          "Johnson",
          "Peters",
          "Lutz"
        ],
        link: './img/amity.jpg'
      }, {
        id: 6,
        question: "What is known as the first Horror film made?",
        answer: "Le Manoir du Diable",
        options: [
          "Dracula",
          "Le Manoir du Diable",
          "The Hunchback of Notre Dame"
        ],
        link: './img/diable.jpg'
      }, {
        id: 7,
        question: "What is the name of the actress in that played Marion Crane in the 1960 version of Pyscho?",
        answer: "Janet Leigh",
        options: [
          "Vivian Leigh",
          "Janet Leigh",
          "Tippi Hedren"
        ],
        link: './img/pyscho.jpg'
      }, {
        id: 8,
        question: "What is the name of one of the most violent films ever made?",
        answer: "Cannibal Holocaust",
         options: [
          "Natural Born Killers",
          "Audition",
          "Cannibal Holocaust"
        ],
        link: './img/cannibal.jpg'
      }, {
        id: 9,
        question: "What is the name of the popular Japanese film about a lonely widower who holds a fake audition to find a wife?",
        answer: "The Audition",
        options: [
          "Vampire Hunter D: Bloodlust",
          "Audition",
          "Chakushin Ari (One Missed Call)"
        ],
        link: './img/audition.jpg'
      }, {
        id: 10,
        question: "What is the US-top-grossing Horror film?",
        answer: "World War Z",
        options: [
          "World War Z",
          "Jaws",
          "The Omen"
        ],
        link: './img/omen.jpg'
      }
    ];

    return questionAnswer ;
  }

})()

