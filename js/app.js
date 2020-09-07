/*
'use strict';
console.log('file connected');

var user = prompt('Welcome to my website, may I have your name?');
console.log(user);
alert('Hi there ' + user + ', I hope you enjoy learning more about me!');
confirm('I will now ask you questions in which you will answer yes or no. Let us begin.');

var score = 0;
var question1 = prompt('Do you think that I prefer it to be sunny than rainy?');
function q1(){
console.log(question1.toLowerCase());
if (question1 == 'yes') {
    // console.log('you are correct!');
    alert('you are correct!');
    score++; // this will increase the score by 1
} else {
    alert('that is incorrect!');
}
}
q1();
var question2 = prompt('Am I of asian descent?');
console.log(question2.toLowerCase());
function q2() {
if (question2 == 'yes') {
    //  console.log('you are correct!');
    alert('you are correct!');
    score++;
} else {
    alert('that is incorrect!');
}
}
q2();
var question3 = prompt('I love to go on long-runs for exercise');
console.log(question3.toLowerCase());
function q3() {
if (question3 == 'no') {
    // console.log('you are correct');
    alert('you are correct!');
    score++;
} else {
    alert('that is incorrect!');
}
}
q3();

var question4 = prompt('My favorite food to eat is sushi.');
console.log(question4.toLowerCase());
function q4() {
if (question4 == 'yes') {
    // console.log('you are correct!');
    alert('you are correct!');
    score++;
} else {
    alert('that is incorrect!');
}
}
q4();

var question5 = prompt('I hate swimming in the ocean.');
console.log(question5.toLowerCase());
function q5 () {
if (question5 == 'no') {
    // console.log('you are correct!');
    alert('you are correct!');
    score++;
} else {
    alert('that is incorrect!');
}
}
q5();

function guessthenumber() {
    var correctanswer = 33;
    var question6 = prompt("Let's play guess the number, hit yes when ready");
    while (question6 === 'yes') {
        for (var i = 1; i < 5; i = i + 1) {
            var userguess = parseInt(prompt("Take a wild guess"));
            if (userguess === correctanswer) {
                alert('Good Job, you have guessed the number.')
                score++;
                break;
            } else if (userguess < correctanswer) {
                alert('Your guess is too low, try again.')
            } else if (userguess > correctanswer) {
                alert('Your guess is too high, try again')
            }
            if (i === 4) {
                alert('you used up all of your chances. The correct answer is ' + correctanswer);
                question6 = prompt('Want to try again?');
            }
        }
        question6 = prompt('Want to try again?');
    }
}
guessthenumber();


var answerbox = ['strawberry', 'cookie dough', 'chocolate', 'coffee', 'vanilla'];
answerbox = answerbox.join(", ");
function q7() {
for (var guesses = 6; guesses > 0; guesses--) {
    var question7 = prompt('Name a flavor of icecream.');

    for (var i = 0; i < answerbox.length; i++) {
        if (question7.toLowerCase() === answerbox[i]) {
            alert('Correct,' + question7 + ' is one of the flavors.');
            score++;
            guesses = -1;

        }
    }
}
if (guesses === 0) {
    var reveal;
    for (var i = 0; i < answerbox.length; i++) {
        if (reveal) {
            reveal = reveal + answerbox[i];
        } else {
            reveal = answerbox[i];

        }
    }
    alert('you ran out of guesses. ' + 'The possible answers were...' + reveal);
}
}
q7();
alert(' Your final score is ' + score + '/7');
*/