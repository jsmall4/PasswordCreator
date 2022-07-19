// Assignment code here
let generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Array elements
let all = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   var symbols = "!@#$%^&*_-+=";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// var characters = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   numbers: getRandomNumber,
//   symbols: getRandomSymbol,
// };

// Alerts and Password Character Selection
function generatePassword() {
  all = "";
  let passwordLength = prompt(
    "Password Criteria = Minimum of 8 characters, Maximum of 128 characters"
  );
  if (
    passwordLength < 8 ||
    passwordLength > 128 
    //not sure here? ^^^^^
  ) {
    alert(
      "Does not meet criteria - Please enter a value between 8-128 characters"
    );
  } else {
    let includeLower = confirm("Include lower case characters?");
    if (includeLower) {
      all += lower;
    }
    let includeUpper = confirm("Include upper case characters?");
    if (includeUpper) {
      all += upper;
    }
    let includeNumbers = confirm("Include numbers?");
    if (includeNumbers) {
      all += numbers;
    }
    let includeSymbols = confirm("Include symbols & special characters?");
    if (includeSymbols) {
      all += symbols;
    }

    if (
      includeLower === false &&
      includeUpper === false &&
      includeNumbers === false &&
      includeSymbols === false
    ) {
      alert("Must select one character type to continue");
      generatePassword();
    }
  }
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += everyCharacter.charAt(
      Math.floor(Math.random() * everyCharacter.length)
    );
  }

  return password;
}

// Get references to the #generate element
// var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password"); // result
var passwordLength = document.getElementById("length");
var includeNumbers = document.getElementById("numbers");
var includeSymbols = document.getElementById("symbols");
var includeUpper = document.getElementById("upper");
var includeLower = document.getElementById("lower");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  document.getElementById("passwordText").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
{
  passwordText.value = writePassword(length.value, characters);
}
