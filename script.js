// Function to determine if a given number is a multiple of five
function isMultipleOfFive(num) {
    return num % 5 === 0; // Check if the number is divisible by 5
}

// Prompt user for input and convert it to a number
const userInput = prompt("Enter a number: "); // Ask the user to enter a number
const inputNumber = Number(userInput); // Convert the input string to a number

// Validate the user input
if (!isNaN(inputNumber)) { // Check if the input is a valid number
    // Check if the number is a multiple of five and log the result
    if (isMultipleOfFive(inputNumber)) {
        console.log(`${inputNumber} is a multiple of five.`); // Log if it's a multiple
    } else {
        console.log(`${inputNumber} is not a multiple of five.`); // Log if it's not a multiple
    }
} else {
    console.log("Please enter a valid number."); // Inform the user of invalid input
}

// Function to determine the letter grade based on a student's score
function getGrade(score) {
    // Determine the grade based on the score range
    if (score >= 80 && score <= 100) {
        return "A"; // Grade A for scores 80-100
    } else if (score >= 70 && score < 80) {
        return "B"; // Grade B for scores 70-79
    } else if (score >= 60 && score < 70) {
        return "C"; // Grade C for scores 60-69
    } else if (score >= 50 && score < 60) {
        return "D"; // Grade D for scores 50-59
    } else if (score >= 0 && score < 50) {
        return "F"; // Grade F for scores 0-49
    } else {
        return "Invalid score"; // Handle invalid scores (negative or above 100)
    }
}

// Prompt user for the student's score and convert it to a number
const studentScoreInput = prompt("Enter the student's score: "); // Ask for student's score
const studentScore = Number(studentScoreInput); // Convert input to a number

// Validate the student's score input
if (!isNaN(studentScore)) { // Check if the input is a valid number
    const studentGrade = getGrade(studentScore); // Get the corresponding grade
    console.log(`The grade for a score of ${studentScore} is: ${studentGrade}`); // Log the grade
} else {
    console.log("Please enter a valid number."); // Inform the user of invalid input
}

// Function to perform basic calculations based on user input
function calculator(num1, num2, operation) {
    // Determine the result based on the operator
    switch (operation) {
        case "+":
            return num1 + num2; // Addition
        case "-":
            return num1 - num2; // Subtraction
        case "*":
            return num1 * num2; // Multiplication
        case "/":
            if (num2 !== 0) {
                return num1 / num2; // Division (handle division by zero)
            } else {
                return "Error: Division by zero"; // Error for division by zero
            }
        default:
            return "Error: Invalid operator"; // Handle invalid operators
    }
}

// Example usage of the calculator function
console.log(calculator(5, 2, "+")); // Expected output: 7
console.log(calculator(5, 2, "-")); // Expected output: 3
console.log(calculator(5, 2, "*")); // Expected output: 10
console.log(calculator(5, 2, "/")); // Expected output: 2.5
console.log(calculator(5, 2, "&")); // Expected output: Error message

// FizzBuzz Challenge: Log numbers from 1 to 100 with specific conditions
for (let number = 1; number <= 100; number++) {
    // Check for multiples of 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz"); // Log "FizzBuzz" for multiples of both
    } else if (number % 3 === 0) {
        console.log("Fizz"); // Log "Fizz" for multiples of 3
    } else if (number % 5 === 0) {
        console.log("Buzz"); // Log "Buzz" for multiples of 5
    } else {
        console.log(number); // Log the number if none of the above
    }
}
