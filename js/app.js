
"use strict";

//Activate quiz when image is clicked
document.getElementById('myFace').onclick = function() {
  alert('Let\'s get to know Ben...');
 
  var numberRight=0;

  //Question #1
  var ageGuess = prompt('Do you think I\'m older than 30?');
           
  while (ageGuess.length < 1) {
    alert('You did not answer!');
    ageGuess = prompt('Do you think I\'m older than 30?');
  }
  if (ageGuess.charAt(0).toLowerCase() === 'y') {
    alert('Correctomundo!');
    numberRight++;
  }
  else {
    alert('Wrong!');
  }

  console.log('Q: Do you think I\'m older than 30?, A: ' + ageGuess);
 

  //Question #2
  var dogGuess = parseInt(prompt('How many dogs do you think I have?'));
  
  while (dogGuess.length < 1) {
    alert('You did not answer!');
    dogGuess = prompt('How many dogs do you think I have?');
  }
       
  if (dogGuess===1) {
    alert('Good Job!');
    numberRight++;
  }

  else if(dogGuess===0){
    alert('Wrong! Too low!');
  } 
  
  else if(dogGuess>1){
    alert('Wrong! Too high!');
  }

  else {
    alert('Please enter a number 0 or greater.')
  }
 
  console.log('Q: How many dogs do you think I have?, A: ' + dogGuess);

  //Question #3
  var favMovie = prompt('Do you think my favorite movie is Bill & Ted\'s Excellent Adventure?');
 
  while (favMovie.length < 1) {
    alert('You did not answer!');
    favMovie = prompt('Do you think my favorite movie is Bill & Ted\'s Excellent Adventure?');
  }
       
  if (favMovie.charAt(0).toLowerCase() === 'n') {
    alert('How\'d you know? My favorite movie is actually Bill & Ted\'s Bogus Journey!');
    numberRight++;
  } 

  else {
    alert('Wrong! My favorite movie is actually Bill & Ted\'s Bogus Journey!');
  }
 
  console.log('Q: Do you think my favorite movie is Bill & Ted\'s Excellent Adventure?, A: ' + favMovie);

  //Question #4

  var humanStatus = prompt('Am I human or droid?');

  while (humanStatus.length < 1) {
    alert('You did not answer!');
    humanStatus = prompt('Am I human or droid?');
  }
       
  if (humanStatus.toLowerCase() === 'human') {
    alert('Yes, I am human. I like doing human things like writing code.');
    numberRight++;
  } 

  else {
    alert('No. I am human. I like doing human things like writing code.');
  }
 
  console.log('Q: Am I human or droid?, A: ' + humanStatus);

  //Question #5
  var labQuality = prompt('Do you think this is the best lab project you\'ve ever laid your unworthy eyes upon?');
           
  while (labQuality.length < 1) {
    alert('You did not answer!');
    labQuality = prompt('Do you think this is the best lab project you\'ve ever laid your unworthy eyes upon?');
  }
       
  if (labQuality.charAt(0).toLowerCase() === 'y') {
    alert('Boo Yah.');
    numberRight++;
  } 

  else {
    alert('Blasphemy!');
  }

  console.log('Q: Do you think this is the best lab project you\'ve ever laid your unworthy eyes upon?, A: ' + labQuality);
 
  alert('You got ' + numberRight + ' out of 5 correct!'); 
};

//Mouse hover functionality

document.getElementById('myFace').addEventListener('mouseover', mouseOver);
document.getElementById('myFace').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('myFace').style.color = 'gray';
}

function mouseOut() {
  document.getElementById('myFace').style.color = 'black';
}