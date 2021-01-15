# 3-password-generator

A website that randomly generates a password based on criteria input from the user. 

## Purpose and Scope

The website is designed to be used to create a random string of letters, numbers, and symbols that could be used as a password. The length of the password is determined by the user but must be between 8 and 128 characters long. When prompted, the user may choose to include lowercase letter (letters from the Latin alphabet in lower case: a, b, c, d, e, f, g, h, I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z), uppercase letters (letters from the Latin alphabet in upper case: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z), numbers (integers: 1, 2, 3, 4, 5, 6, 7, 8, 0), and/or special characters (@, %, +, \, /, ', !, #, $, ^, ?, :, (, ), {, }, [, ], ~, `, -, _, ., ,). At least one type of character must be selected.

## Installation

No installation is required. This is a web-based ap. Click here to access it:
https://lasettebrown.github.io/3-password-generator/

## Instructions
When the page loads, you will see a field for your future password and a button below it that reads “Generate Password”. 


<img width="939" alt="password_generator" src="https://user-images.githubusercontent.com/74556384/104746689-dc2b9580-570c-11eb-8819-7b8d837e17d9.PNG">


When the “Generate Password” button is clicked, a prompt appears asking how long you want your password to be. Enter a number between 8 and 128. 

<img width="344" alt="password_length" src="https://user-images.githubusercontent.com/74556384/104746958-2d3b8980-570d-11eb-8f41-f9c774aba20b.png">


Next a prompt will appear asking if you want to include lowercase letters in your password. Click ‘OK’ to confirm that you want to include lowercase letters in your password. Click ‘Cancel’ to exclude lowercase letters from your password.

<img width="338" alt="include_uppercase" src="https://user-images.githubusercontent.com/74556384/104746985-3298d400-570d-11eb-9e3e-41785472a0cd.PNG">


Repeat this process for the prompts that ask about uppercase letters, numbers, and special characters. For each one, clicking ‘OK’ will include them and clicking ‘Cancel’ will exclude them.
After you have made selections for each option, a random string of characters will be displayed in the field. You can now use this as your new password!

<img width="942" alt="password_appears" src="https://user-images.githubusercontent.com/74556384/104746995-36c4f180-570d-11eb-8777-b3f0df95cdf6.PNG">


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


## Thank yous

Thank you to my tutor, Kelling Gowing, and my friend, Eliot Kurfman for helping me debug mycode!



## License

The content of this website is copyrighted. Please do not use the content without permission.

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

© 2021 Lasette Brown. All Rights Reserved.
