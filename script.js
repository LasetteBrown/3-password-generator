
// Create variable arrays for character sets
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "`", "-", "_", "."]


// GIVEN I need a new, secure password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function getpasswordLength() {
    var length = parseInt(
        prompt("Length of password?")
    )

    if (length < 8) {
        alert("Your password must be at least 8 characters long!")
        getpasswordLength()
        return;
    }
    if (length > 128) {
        alert("Your password cannot be longer than 128 characters!")
        getpasswordLength()
        return;
    }
    if (isNaN(length)) {
        alert("Please enter a number between 8 and 128")
        getpasswordLength()
        return;
    }
    return length;
}

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function getuserChoises() {

    var passwordLength = getpasswordLength()

    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    var includeLowercase = confirm("Click \OK\ to include lower case letters");
    var includeUppercase = confirm("Click \OK\ to include Upper case letters");
    var includeNumbers = confirm("Click \OK\ to include numbers");
    var includeSpecial = confirm("Click \OK\ to include special characters");

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    if (
        includeLowercase === false &&
        includeUppercase === false &&
        includeNumbers === false &&
        includeSpecial === false
    ) {
        alert("You must select at least one character type");
        return;
    }
    var userChoises = {
        passwordLength: passwordLength,
        includeLowercase: includeLowercase,
        includeUppercase: includeUppercase,
        includeNumbers: includeNumbers,
        includeSpecial: includeSpecial
    };
    return userChoises;

}




function generatePassword() {

    // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria
    var parameters = getuserChoises();


    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria


    // create an array with possible characters
    var possibleChars = []

    //create an array for the result
    var result = []

    //create an array for required characters
    var required = []

    //add appropriate variables to the array
    if (parameters.includeLowercase === true) {
        possibleChars = possibleChars.concat(lowercaseChars);
        required.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
    } else {

    }

    if (parameters.includeUppercase === true) {
        possibleChars = possibleChars.concat(uppercaseChars);
        required.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    } else {

    }

    if (parameters.includeNumbers === true) {
        possibleChars = possibleChars.concat(numericChars);
        required.push(numericChars[Math.floor(Math.random() * numericChars.length)]);
    } else {

    }

    if (parameters.includeSpecial === true) {
        possibleChars = possibleChars.concat(specialChars);
        required.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    } else {

    }


    // Pick a random character from within the concatenated array

    for (var i = 0; i < parameters.passwordLength; i++) {
        var randomCharacter = possibleChars[Math.floor(Math.random() * possibleChars.length)]

        result.push(randomCharacter);
    }

    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < required.length; i++) {
        result[i] = required[i];
    }

    return result.join("");
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





