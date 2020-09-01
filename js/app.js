'use strict';
console.log('file connected');

var user = prompt('Welcome to my website, may I have your name?');
console.log(user);
alert('Hi there '+ user +', I hope you enjoy learning more about me!');
confirm('I will now ask you questions in which you will answer yes or no. Let us begin.');

var question1= prompt('Do you think that I prefer it to be sunny than rainy?');

    console.log(question1, question1.toLowerCase());
    if(question1=='yes'){
        // console.log('you are correct!');
        alert('you are correct!');
    } else {
        alert('that is incorrect!');
    }
var question2= prompt('Am I of asian descent?');
    console.log(question2, question2.toLowerCase());
    if(question2=='yes'){
       //  console.log('you are correct!');
       alert('you are correct!');
    } else {
        alert('that is incorrect!');
    }
var question3= prompt('I love to go on long-runs for exercise');
    console.log(question3, question3.toLowerCase());
    if(question3=='no'){
        // console.log('you are correct');
        alert('you are correct!');
    } else {
        alert('that is incorrect!');
    }
var question4= prompt('My favorite food to eat is sushi.');
    console.log(question4, question4.toLowerCase());
    if(question4=='yes'){
        // console.log('you are correct!');
        alert('you are correct!');
    } else {
        alert('that is incorrect!');
    }
var question5= prompt('I hate swimming in the ocean.');
    console.log(question5, question5.toLowerCase());
    if(question5=='no'){
        // console.log('you are correct!');
        alert('you are correct!');
    } else {
        alert('that is incorrect!');
    }