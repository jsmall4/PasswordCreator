// Assignment code here
let generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Array elements
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!#$%^&*_-+=";

// Alerts and Password Character Selection
function generatePassword() {
  let all = "";
  let passwordLength = prompt(
    "Password Criteria = Minimum of 8 characters, Maximum of 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Does not meet criteria - Please enter a value between 8-128 characters"
    );
    generatePassword();
  } else {
    const includeLower = confirm("Include lower case characters?");
    if (includeLower) {
      all += lower;
    }
    const includeUpper = confirm("Include upper case characters?");
    if (includeUpper) {
      all += upper;
    }
    const includeNumbers = confirm("Include numbers?");
    if (includeNumbers) {
      all += numbers;
    }
    const includeSymbols = confirm("Include symbols & special characters?");
    if (includeSymbols) {
      all += symbols;
    }

    if (!includeLower && !includeUpper && !includeNumbers && !includeSymbols) {
      alert("Must select one character type to continue");
      generatePassword();
    }
  }
  let password = "";

  console.log(all);

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * all.length);

    password += all[randomIndex];
  }
  console.log(password);
  return password;
}

// Get references to the #generate element
var passwordText = document.getElementById("password");
var passwordLength = document.getElementById("length");
var includeNumbers = document.getElementById("numbers");
var includeSymbols = document.getElementById("symbols");
var includeUpper = document.getElementById("upper");
var includeLower = document.getElementById("lower");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  document.getElementById("password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
