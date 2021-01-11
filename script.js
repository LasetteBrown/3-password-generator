// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variable arrays for character sets
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "`", "-", "_", "."]


// GIVEN I need a new, secure password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var lengthPrompt = function () {
    var passwordLength = window.prompt("Length of password?")
    if (passwordLength < 8) {
        window.alert("Your password must be at least 8 characters long!")
        lengthPrompt()
    } else if (passwordLength > 128) {
        window.alert("Your password cannot be longer than 128 characters!")
        lengthPrompt()
    } else if (isNaN(passwordLength)) {
        window.alert("Please enter a number between 8 and 128")
        lengthPrompt()
    }
    return;
}

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
var charSelect = function () {
    var includeLowercase = window.confirm("Click \OK\ to include lower case letters")
    var includeUppercase = window.confirm("Click \OK\ to include Upper case letters")
    var includeNumbers = window.confirm("Click \OK\ to include numbers")
    var includeSpecial = window.confirm("Click \OK\ to include special characters")
    if (
        includeLowercase === false &&
        includeUppercase === false &&
        includeNumbers === false &&
        includeSpecial === false
    ) {
        window.alert("You must select at least one character type");
        charSelect()
        return;
    }
}

function generateLower() {
    lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
}
function generateUpper() {
    uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
}
function generateNumber() {
    numericChars[Math.floor(Math.random() * numericChars.length)]
}
function generateSpecial() {
    specialChars[Math.floor(Math.random() * specialChars.length)]
}
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    lengthPrompt()

    charSelect()

    for (i = 0; i <= passwordLength; i++) {
        if (includeLowercase = true) {
            generateLower()
        } else {

        }
        //check
        if (includeUppercase = true) {
            generateUpper()
        } else {

        }
        //check
        if (includeNumbers = true) {
            generateNumber()
        } else {

        }
        //check
        if (includeSpecial = true) {
            generateSpecial()
        } else {

        }
        check
    }
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
