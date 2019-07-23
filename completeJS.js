(function() {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    console.log('Answers:');
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(answer, callback) {
    var sc;

    if (this.correctAnswer === answer) {
      console.log('Correct answer');
      sc = callback(true);
    } else {
      console.log('Wrong answer');
      sc = callback(false);
    }

    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(value) {
    console.log('Score: ' + value);
    console.log('--------------------------');
  };

  function init() {
    var rndQuestion = Math.floor(Math.random() * questionsPoll.length);

    questionsPoll[rndQuestion].displayQuestion();

    var answer = prompt('Enter your answer (number)');
    if (answer === 'exit') {
      return;
    } else {
      answer = parseInt(answer);
      questionsPoll[rndQuestion].checkAnswer(answer, keepScore);
      init();
    }
  }

  function score() {
    var currentScore = 0;
    return function(isTrue) {
      if (isTrue) {
        currentScore++;
      }
      return currentScore;
    };
  }

  var keepScore = score();

  var questionsPoll = [
    new Question('Favourite food', ['apple', 'pear', 'bannana'], 1),
    new Question('Favourite color', ['red', 'green', 'blue'], 2),
    new Question('Favourite drink', ['water', 'beer', 'wine'], 0)
  ];

  init();
})();
