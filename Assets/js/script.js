// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    ''',
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];
  
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
    ];
  
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
    ];

// Function to prompt user for password options
function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );

    // Conditional statement to check if password length is a number. //
    // Prompts end if this is false //
    if (isNaN(length) === true) {
        alert('Password length must be provided as a number');
        return;
    }

    // Conditional statement to check if password length is a number.//
    // Prompts end if this is false. //
    if (isNaN(length) ===true) {
        alert('Password length must be provided as a number');
        return;
    }

    // Conditional statement to check if password length is at least 8 characters long.//
    // Prompts end if this is false. //
    if (length < 8) {
        alert('Password length must be at least 8 characters');
        return;
    }

    // Conditional statement to check if password length is <128 characters long.//
    //Prompts end if this is false.//
    if (length > 128) {
        alert('Password length must be less than 129 characters');
        return;
    }

    //Variable to store statement re: inclusion of numeric characters
    var hasNumericCharacters = confirm(
        'Click OK to confirm including NUMERIC CHARACTERS.'
    )

    //Variable to store statement re: inclusion of lowercase characters
    var hasLowerCaseCharacters = confirm(
        'Click OK to confirm including lowercase CHARACTERS.'
    )

    //Variable to store statement re: inclusion of UPPERCASE characters
    var hasUpperCaseCharacters = confirm(
        'Click OK to confirm including UPPERCASE CHARACTERS.'
    );

    //Variable to store statement re: inclusion of special characters
    var hasSpecialCharacters = confirm(
        'Click OK to confirm including *SPECIAL CHARACTERS*.'
    );

    // Conditional statement to check if none of any characters were chosen by user. //
    // Password generator ends if all four variables = false//
    if (
        hasNumericCharacters === false && hasLowerCaseCharacters === false && hasUpperCaseCharacters === false && hasSpecialCharacters === false
    ) {
        alert('Select at least one character type');
        return;
    }

    // Object to store user input
    var passwordOptions = {
        length: length,
        hasNumericCharacters: hasNumericCharacters, 
        hasLowerCaseCharacters: hasLowerCaseCharacters, 
        hasUpperCaseCharacters: hasUpperCaseCharacters, 
        hasSpecialCharacters: hasSpecialCharacters
    };
    return passwordOptions;
}   

//



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);