"use strict";

const getColor = function() {
  //function to create a random hex number that will be useful to add color to the boxes
  return "#" + Math.random().toString(16).slice(2, 8); //To get the proper HEXADECIMAL value
}

const playSound = function(){
  //function to play a sound depending on the type of button
  if(this.textContent === 'FizzBuzz' || this.textContent === 'Buzz' || this.textContent === 'Fizz'){
    new Audio('sounds/TP_01_v3.wav').play();
  } else{
    new Audio('sounds/0739.wav').play();
  }
}

const numbersArray = function(size){
  let numbersArray = [];
  for (let i = 1; i < size; i++) {
    numbersArray.push(checkNumber(i));//we get the result of checkNumber as a string and put it into the array
  }
  return numbersArray;//now we have an array of numbers in a string format and text
}

const checkNumber = function(number){
  //the actual fizzbuzz function we always return a string
  let result = number.toString();
  if (number % 3 === 0 && number % 5 === 0){
    result = 'FizzBuzz';
  } else if(number % 3 === 0){
    result = 'Fizz';
  } else if(number % 5 === 0){
    result = 'Buzz';
  }
  return result;
}

const renderCanvas = function(size){
  let canvas = document.getElementsByClassName('canvas')[0];
  let numbersList = numbersArray(size);

  //we iterate through the array of numbers, so for each number we create a square and append it to canvas, adding diff attributes and bind the onclick event.
  for(let i = '0'; i < numbersList.length; i++){ //I actually wanted to use a for of loop but is not supported in IE11 and down.
    let square = document.createElement('button');
    let number = numbersList[i];
    square.className = 'square square--'+ number;
    square.innerHTML = number;
    square.type = 'button';
    square.style.backgroundColor = getColor();
    square.onclick = playSound;
    canvas.appendChild(square);
  }

}

let size = 101;
renderCanvas(size);

