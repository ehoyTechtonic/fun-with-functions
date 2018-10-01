$(".answerKey").attr("style","display: none;") //DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
'Erik Hoy'

//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function addNumbers(a, b) {
  return (a + b);
}
document.getElementById("problem-1").innerHTML = addNumbers(3, 5);


//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function subtractNumbers(a, b) {
  return (a - b);
}
document.getElementById("problem-2").innerHTML = subtractNumbers(10, 8);

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function showResultsInBody(a) {
  console.log("The result of your calculation is " + a + ".");
}
document.getElementById("problem-3").innerHTML = showResultsInBody(5);


//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function showResults(a) {
  return "The result of your calculation is " + a + ".";
}
document.getElementById("problem-4").innerHTML = showResults(5);


//problem-5

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function multiplyNumbers(a, b) {
  return (a * b);
}
document.getElementById("problem-5").innerHTML = multiplyNumbers(5, 10);


//problem-6

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function divideNumbers(a, b) {
  return (a / b);
}
document.getElementById("problem-6").innerHTML = divideNumbers(20, 4);


//problem-7

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-7").innerHTML = showResults(addNumbers(3, 5));


//problem-8

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-8").innerHTML = showResults(addNumbers(addNumbers(5, 6), addNumbers(7, 3)));


//problem-9

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-9").innerHTML = showResults(subtractNumbers(multiplyNumbers(15, 4), divideNumbers(10, 2)));


//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function addTheWorld() {
  sum = 0;
  for(var i=0; i<arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
document.getElementById("challenge-1.1").innerHTML = addTheWorld(5,2,8);
document.getElementById("challenge-1.2").innerHTML = addTheWorld(10,5,3,2)
document.getElementById("challenge-1.3").innerHTML = addTheWorld(25)
