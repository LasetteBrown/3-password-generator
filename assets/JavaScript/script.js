
// Create variable arrays for character sets
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "`", "-", "_", "."]

// Prompt the user to enter a password length
function getpasswordLength() {
    var passwordLength = parseInt(
        prompt("Length of password?")
    );

    //allow the cancel button to cancel out of the process
    if (passwordLength === null || passwordLength === "" || passwordLength === undefined) {
        return;
    }

    //make sure what they entered is a number
    else if (isNaN(passwordLength)) {
        alert("Please enter a number between 8 and 128");
        passwordLength = getpasswordLength();
        return;
    }

    //make sure they entered a number greater than 8
    else if (passwordLength < 8) {
        alert("Your password must be at least 8 characters long!");
        passwordLength = getpasswordLength();
        return;
    }

    //make sure they entered a number less than 128
    else if (passwordLength > 128) {
        alert("Your password cannot be longer than 128 characters!");
        passwordLength = getpasswordLength();
        return;
    }

    else {

        console.log(passwordLength);

        //make sure the function returns a number equal to the length of the password requested
        return passwordLength;
    }
}

//collect the user's choices
function getuserChoices() {

    //prompt to confirm the use of each type of character
    var includeLowercase = confirm("Click \OK\ to include lowercase letters");
    var includeUppercase = confirm("Click \OK\ to include Uppercase letters");
    var includeNumbers = confirm("Click \OK\ to include numbers");
    var includeSpecial = confirm("Click \OK\ to include special characters");

    //make sure the user selected at least one character type
    if (
        includeLowercase === false &&
        includeUppercase === false &&
        includeNumbers === false &&
        includeSpecial === false
    ) {
        alert("You must select at least one character type");
        return;
    }

    else {

        //create an object containing all the user choises
        var userChoices = {
            includeLowercase: includeLowercase,
            includeUppercase: includeUppercase,
            includeNumbers: includeNumbers,
            includeSpecial: includeSpecial
        };

        console.log(userChoices);
        //make sure this function returns all the choices
        return userChoices;
    }

}



//primary function: create a new password using all of the input criteria
function generatePassword() {

    //run the function that gets passord length
    var passwordLength = getpasswordLength();

    //run the function that gets user choices
    var parameters = getuserChoices();

    //check to make sure variable have values
    if (passwordLength === null ||
        passwordLength === "" ||
        passwordLength === undefined ||
        parameters === undefined ||
        parameters === null ||
        parameters === "") {
        return;
    }

    //based on the user's choices, make an array that contains all possible characters
    //and make an array that contains one random character of the chosen type
    //to make sure that at least one of each chosen type is included.

    // create an array to store the chosen character types
    var possible = [];

    //create an array for characters that must be included
    var required = [];

    //create an array for the characters that will be the new password
    var result = [];

    //if the user chose lowercase characters,
    if (parameters.includeLowercase === true) {
        //add all lowercase characters to the possibles array,
        possible = possible.concat(lowercaseChars);
        //and add one random lowercase character to the required array.
        required.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
        console.log(possible);
    };

    //if the user chose upper case characters,
    if (parameters.includeUppercase === true) {
        //add all upper case characters to the possibles array,
        possible = possible.concat(uppercaseChars);
        //and add one random uppercase character to the required array.
        required.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
        console.log(possible);

    };

    //if the user chose numbers,
    if (parameters.includeNumbers === true) {
        //add all numbers to the possibles array,
        possible = possible.concat(numericChars);
        //and add one random number to the required array.
        required.push(numericChars[Math.floor(Math.random() * numericChars.length)]);
        console.log(possible);
    };

    //if the user chose special characters
    if (parameters.includeSpecial === true) {
        //include all special characters in the possibles array,
        possible = possible.concat(specialChars);
        //and add one random special character to the required array.
        required.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
        console.log(possible);
    };

    // Pick a random character from within the possibles array 
    //as many times as the password length requires,
    for (var i = 0; i < passwordLength; i++) {
        var randomCharacter = possible[Math.floor(Math.random() * possible.length)]
        //and add it to the results array.
        result.push(randomCharacter);
    };

    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < required.length; i++) {
        result[i] = required[i];
    };
    //make the results array into a string of characters
    //and make it the return of this function.
    console.log(result);
    console.log(required);
    return result.join("");
}


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





