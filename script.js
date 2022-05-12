// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let password = "";
  let validInput = false;
  let source;

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

  const length = getLength();

  while (!validInput) {
    source = [];

    if (confirm("Use lowercase letters?")) {
      source = source.concat(lowers);
    }

    if (confirm("Use uppercase letters?")) {
      source = source.concat(uppers);
    }

    if (confirm("Use special characters?")) {
      source = source.concat(specials);
    }

    if (confirm("Use numbers?")) {
      source = source.concat(numbers);
    }

    if (source.length > 0) {
      validInput = true;
    } else {
      alert("You must select at least one type of character set to include!");
    }
  }

  for (let i = 0; i < length; i++) {
    password = password.concat(
      source[Math.floor(Math.random() * source.length)]
    );
  }

  return password;
}

function getLength() {
  let length = prompt(
    "Enter your desired password length (between 8 and 128 characters)"
  );
  length = parseInt(length);
  if (length < 8 || length > 128 || isNaN(length)) {
    getLength();
  } else {
    return length;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
