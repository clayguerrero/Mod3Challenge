// Assignment code here

// let valType;
let len;
let data = [];
let pass = "";

function generatePassword() {
  let attempt = true;
  let tip = prompt("Would you like to create a password (Y/N) ");
  let res = tip.split("");

  if (attempt === false) {
    generatePassword();
  } else {
    yes(res);
    return pass;
  }
  attempt = false;
}

function yes(input) {
  if (input == "Y" || input == "y") {
    size = prompt(
      "Please select the length of the password (8-128 characters)"
    );
    passLength(size);
  } else generatePassword();
}

function passLength(val) {
  if (val >= 8 && val <= 128) {
    len = val;
    types();
  } else generatePassword();
}

function types() {
  let valType = prompt(
    "what types of characters would you like to include? (lowercase, uppercase, numeric, and/or special)"
  );
  if (valType.split(" ").includes("lowercase")) {
    data.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (valType.split(" ").includes("uppercase")) {
    data.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (valType.split(" ").includes("numeric")) {
    data.push("0123456789");
  }
  if (valType.split(" ").includes("special")) {
    data.push("!@#$%^&*()");
  }
  if (data.length > 1) {
    creator(data);
  } else generatePassword();
}

function creator(arr) {
  let randomNum;
  for (let i = 0; i <= len; i++) {
    randomNum = Math.floor(Math.random() * data.join("").length);
    pass += data.join("").substring(randomNum, randomNum + 1);
  }
  console.log(pass);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
