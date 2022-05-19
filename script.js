const lowers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specials = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "'",
  '"',
  "\\",
  ":",
  ";",
  ",",
  ".",
  "<",
  ">",
  "?",
  "/",
  " ",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let characterSet = []; // Variable for character source array

  // Declare a password variable and a validated password variable
  let password;
  let validPassword = false;

  // Get user inputs for length and character types to include
  const length = getLength();
  const useLowers = includeLowers();
  const useUppers = includeUppers();
  const useSpecials = includeSpecials();
  const useNumbers = includeNumbers();

  if (useLowers) {
    // Add lowercase letters to character set if user has chosen to include them
    characterSet = characterSet.concat(lowers);
  }

  if (useUppers) {
    // Add uppercase letters to character set if user has chosen to include them
    characterSet = characterSet.concat(uppers);
  }

  if (useSpecials) {
    // Add special characters to character set if user has chosen to include them
    characterSet = characterSet.concat(specials);
  }

  if (useNumbers) {
    // Add numbers to character set if user has chosen to include them
    characterSet = characterSet.concat(numbers);
  }

  // If user has not chosen to include any character types, warn them, then restart the process
  if (characterSet.length === 0) {
    alert("You must select at least one type of character set to include!");
    return generatePassword();
  }

  do {
    // Upon entry into do/while loop, clear any previous password value
    password = "";
    for (let i = 0; i < length; i++) {
      // This loop randomly selects a character for the character source array and adds it to the password string
      password = password.concat(
        characterSet[Math.floor(Math.random() * characterSet.length)]
      );
    }

    // Variables to count character types
    let lowerCount = 0;
    let upperCount = 0;
    let specialCount = 0;
    let numberCount = 0;

    // This for loop counts character types based on if user chose to include those types
    for (let i = 0; i < password.length; i++) {
      if (useLowers) {
        if (lowers.includes(password[i])) {
          lowerCount++;
        }
      }

      if (useUppers) {
        if (uppers.includes(password[i])) {
          upperCount++;
        }
      }

      if (useSpecials) {
        if (specials.includes(password[i])) {
          specialCount++;
        }
      }

      if (useNumbers) {
        if (numbers.includes(password[i])) {
          numberCount++;
        }
      }
    }

    // Check to make sure that if the user wanted to use characters from a particular character set,
    // at least one of those characters will show up in the generated password. Otherwise the loop
    // will begin again and generate a new password until all the conditions are met.
    if (useLowers && lowerCount < 1) {
      validPassword = false;
    } else if (useUppers && upperCount < 1) {
      validPassword = false;
    } else if (useSpecials && specialCount < 1) {
      validPassword = false;
    } else if (useNumbers && numberCount < 1) {
      validPassword = false;
    } else {
      validPassword = true;
    }
  } while (!validPassword);

  // Upon exiting the do/while loop the password will contain at least one character from each of the chosen
  // character sets and the password will be returned.
  return password;
}

// This function prompts user to chose a password length between 8 and 128 characters, and will not stop until
// it receives a valid response from the user.
function getLength() {
  let length = prompt(
    "Enter your desired password length (between 8 and 128 characters)"
  );
  length = parseInt(length);
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("You must enter a numerical value between 8 and 128!");
    getLength();
  } else {
    return length;
  }
}

// This function asks the user if they wish to include lowercase letters, if user selects "OK" will return true
// otherwise it will return false
function includeLowers() {
  return confirm("Include lowercase letters?");
}

// This function asks the user if they wish to include uppercase letters, if user selects "OK" will return true
// otherwise it will return false
function includeUppers() {
  return confirm("Include uppercase letters?");
}

// This function asks the user if they wish to include special characters, if user selects "OK" will return true
// otherwise it will return false
function includeSpecials() {
  return confirm("Include special characters?");
}

// This function asks the user if they wish to include numbers, if user selects "OK" will return true
// otherwise it will return false
function includeNumbers() {
  return confirm("Include numbers?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
