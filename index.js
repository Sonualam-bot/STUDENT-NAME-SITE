var readLineSync = require('readline-sync');

var score = 0;

function welcome() {
var userName = readLineSync.question("What's Your Name?");

console.log("Welcome "+ userName + " to the Money Heist Quiz !");
}


var highScores = [
  {
  name: "Sonu",
  score: 15,
  }
]

//array of objects
var questions = [
  {
    question: `Where does The Heist take place?
    a:The Royal Mint of Humburg
    b:The Royal Mint of England
    c:The Royal Mint of Spain
    d:The Royal Mint of Italy \nANSWER:`
    ,

    answer: "c" 
  },
  {
    question:`What mask did they first use?
    a:Pablo Picasso
    b:The Queen of England
    c:Salvador Dali
    d:Donald Trumpa \nANSWER:`
    ,

    answer: "c"
  },
  {
    question:`Which drug was Berlin taking?
    a:Sildenafil
    b:Retroxil
    c:Tramadol
    d:Buscopan \nANSWER:`
    ,
    answer: "b"
  },
  {
    question:`What piece of incriminating evidence did The Professor place in a car?
    a:Sunglasses
    b:A button
    a:Plane ticket
    d:A driving licence \nANSWER:`
    ,
    answer:"b"
  },
  {
    question:`Which plan necessitated the team firing M16 automatic weapons?
    a:Valencia
    b:Opera
    c:Aragon
    d:Cantabriaa  \nANSWER:`
    ,
    answer: "a"
  },
  {
    question:`Which nostril does inspector Raquela have pierced?
    a:Right
    b:Left
    c:Both
    d:Neither \nANSWER:`
    ,
    answer: "b"
  },
  {
    question:`Whom did Anibal speak  to about a pardon?
    a:Oslo
    b:Angel
    c:Inspector Raquel
    d:Arturo \nANSWER:`
    ,
    answer: "c"
  },
  {
    question:`Whose glasses contained a bugg?
    a:Alonso
    b:Angel
    c:Alicia
    d:Raquel \nANSWER:`
    ,
    answer: "b"
  },
  {
    question:`How many hostagaes are there?
    a:97
    b:67
    c:87
    d:77 \nANSWER:`
    ,
    answer: "b"
  },
  {
    question:`What is The Professors name?
    a:Salva
    b:Alonso
    c:Ricardo
    d:Angel \nANSWER:`
    ,
    answer: "a"
  },
  {
    question:`What does The Professor play on the piano?
    a:Four Seasons
    b:The Entertainer
    c:The Spanish National Anathem
    d:Chopsticks  \nANSWER:`
    ,
    answer: "b"
  },
  {
    question:`How was Oslo fatally injured?
    a:He was shot
    b:Stabbed with scissors
    c:He was electrocuted
    d:Hit across the head \nANSWER:`
    ,
    answer: "d"
  },

  {
    question:`What is The Professors life centered around?
    a:Equality
    b:Freedom
    c:Jack Daniels
    d:Resistance  \nANSWER:`
    ,
    answer:"d"
  },
  {
    question:`At full speed how much money can the Royal Mint produce?
    a:€ 18 million per hour
    b:€8 million per hour
    c:€38 million per hour
    d:€28 million per hour \nANSWER: `
    ,
    answer: "b"
  },
  {
    question:`Which hostage is pregnant?
    a:Alison
    b:Silene
    c:Ariadna
    d:Monica \nANSWER:`
    ,
    answer: "d"
  },
]

function play (question, answer){
  var userAnswer = readLineSync.question(question);


  if(userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log('You were right!');
    score = score + 1;
  }else{
    console.log('You were wrong!');
    score = score - 1;
  }
  console.log("current score is: " + score);
  console.log("----------------------");

}

function game () {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer);
  }
}

 

  

  function showScores () {
    console.log("Awsome! You Scored: ", score);

    console.log("If U beat Me, let me know i will update it");

    highScores.map(score => console.log(score.name, " : ", score.score))
  }


  welcome();
  game();
  showScores();

  

