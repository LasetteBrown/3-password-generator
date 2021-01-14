# 3-password-generator

A website that randomly generates a password based on criteria input from the user. 

## Purpose and Scope

The website is designed to be used to create a random string of letters, numbers, and symbols that could be used as a password. The length of the password is determined by the user but must be between 8 and 128 characters long. When prompted, the user may choose to include lowercase letter (letters from the Latin alphabet in lower case: a, b, c, d, e, f, g, h, I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z), uppercase letters (letters from the Latin alphabet in upper case: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z), numbers (integers: 1, 2, 3, 4, 5, 6, 7, 8, 0), and/or special characters (@, %, +, \, /, ', !, #, $, ^, ?, :, (, ), {, }, [, ], ~, `, -, _, ., ,). At least one type of character must be selected.

## Installation

No installation is required. This is a web-based ap. Click here to access it:
https://lasettebrown.github.io/3-password-generator/

## Instructions
When the page loads, you will see a field for your future password and a button below it that reads “Generate Password”. 
[insert screenshot]
When the “Generate Password” button is clicked, a prompt appears asking how long you want your password to be. Enter a number between 8 and 128. 
[insert screenshot]
Next a prompt will appear asking if you want to include lowercase letters in your password. Click ‘OK’ to confirm that you want to include lowercase letters in your password. Click ‘Cancel’ to exclude lowercase letters from your password.
[insert screenshot]
Repeat this process for the prompts that ask about uppercase letters, numbers, and special characters. For each one, clicking ‘OK’ will include them and clicking ‘Cancel’ will exclude them.
After you have made selections for each option, a random string of characters will be displayed in the field. You can now use this as your new password!
[include screenshot]



## Built with

HTML
CSS
JavaScript


## Authors
The HTML and CSS for this page were provided by the instruction team at the University of Denver Full Stack Web Development Coding Bootcamp. JavaScript was written by Lasette Brown with the exception of the assignment code:
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

which was also provided by the instruction team.


## License

The content of this website is copyrighted. Please do not use the content without permission.


## Process



### In Development (As in things I still have to do)


© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

© 2021 Lasette Brown. All Rights Reserved.
