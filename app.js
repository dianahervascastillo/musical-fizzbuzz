const playSound = function(){
  if(this.textContent === 'FizzBuzz' || this.textContent === 'Buzz' || this.textContent === 'Fizz'){
    new Audio('sounds/TP_01_v3.wav').play();
  } else{
    new Audio('sounds/0739.wav').play();
  }
}

const numbersArray = function(size){
  let numbersArray = [];
  for (let i = 1; i < size; i++) {
    numbersArray.push(checkNumber(i));
  }
  return numbersArray;
}

const checkNumber = function(number){
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

  for(let number of numbersList){
    let square = document.createElement('button');
    square.className = 'square square--'+ number;
    square.innerHTML = number
    square.type = 'button'
    square.onclick = playSound;
    canvas.appendChild(square)
  }

}

let size = 101;
renderCanvas(size);

