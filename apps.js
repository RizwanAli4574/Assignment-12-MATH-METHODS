document.write("<b> Q NO 1 Write a program that takes a positive integer from user & display the following in your browser.... </b>")
document.write("<br>")
document.write("<br>")

// Declear prompt for user value
var one = prompt("Enter positive integer value")


// user value convert to round , ceil , and floor value
var one1 = Math.round(one)
var one2 = Math.ceil(one)
var one3 = Math.floor(one)

document.write("Round Value " + " " + one1 + "<br>")
document.write("Ceil Value " + " " + one2 + "<br>")
document.write("Floor Value " + " " + one3 + "<br>")

document.write("<br>")

document.write("<b> Q NO 2 Write a program that takes a negative floating point number from user & display the following in your browser..... </b>")
document.write("<br>")
document.write("<br>")

// Declear prompt for user value
var two = prompt("Enter negative floating value")


// user value convert to round , ceil , and floor value
var two1 = Math.round(two)
var two2 = Math.ceil(two)
var two3 = Math.floor(two)

document.write("Round Value " + " " + two1 + "<br>")
document.write("Ceil Value " + " " + two2 + "<br>")
document.write("Floor Value " + " " + two3 + "<br>")

document.write("<br>")

document.write("<b> Q NO 3 Write a program that displays the absolute value of a number...... </b>")
document.write("<br>")
document.write("<br>")

function absoluteValue(num) {
    if (num < 0) {
      return -num;
    } else {
      return num;
    }
  }
  
  // Input number
  var number = parseFloat(prompt("Enter a number: "));
  
  // Calculate and display the absolute value
  var result = absoluteValue(number);
  document.write(`The absolute value of ${number} is ${result}`);
  
  document.write("<br>")
  document.write("<br>")

document.write("<b> Q NO 4 Write a program that simulates a dice using random() method of JS Math class..... </b>")
document.write("<br>")
document.write("<br>")

function rollDice() {
    // Generate a random number between 1 and 6 for the dice
    let diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
  }
  
  // Get the dice value
  var diceResult = rollDice();
  
  // Display the dice value in the browser
  document.write(`The dice rolled: ${diceResult}`)
  
document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 5 Write a program that simulates a coin toss using random() method of JS Math class..... </b>")
document.write("<br>")
document.write("<br>")

function coinToss() {
    // Generate a random number (0 or 1) for the coin toss
    var randomNum = Math.random();
    var tossResult = randomNum < 0.5 ? 'Heads' : 'Tails';
    return tossResult;
  }
  
  // Get the result of the coin toss
  var result = coinToss();
  
  // Display the result of the coin toss in the browser
  document.write(`The coin landed on: ${result}`) ;
  
document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 6 Write a program that shows a random number between 1 and 100 in your browser...... </b>")
document.write("<br>")
document.write("<br>")

// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write(`Random number between 1 and 100 : ${randomNumber}`);

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 7 Write a program that asks the user about his weight...... </b>")
document.write("<br>")
document.write("<br>")

// Prompt user for weight input
var userInput = prompt("Please enter your weight:"); 

// Display the extracted weight in the browser
document.write(`Your weight is: ${userInput} kgs`);

document.write("<br>")
document.write("<br>")


document.write("<b> Q NO 8 Write a program that stores a random secret number from 1 to 10 in a variable...... </b>")
document.write("<br>")
document.write("<br>")

// Generate a random secret number between 1 and 10

var secretNumber = 5;

// Prompt the user to input a numbe
var userInput = parseInt(prompt("Guess the secret number between 1 and 10:"));

// Check if the user input matches the secret number
if (userInput === secretNumber && userInput >= 1 && userInput <= 10) {
  // If the user input matches the secret number, congratulate the user
  document.write("Congratulations! You guessed the secret number!");
} else {
  // If the user input does not match or is out of range, inform the user
  document.write(`Sorry, the secret number was ${secretNumber}. Please try again!`);
}

document.write("<br>")
document.write("<br>")