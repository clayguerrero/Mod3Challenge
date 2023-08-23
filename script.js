let len = null;
let data = [];
let pass = "";

function generatePassword() {
  let attempt = true;
  let tip = prompt("Would you like to create a password (Y/N) ");
  let res = tip.split("");

  if (attempt === false) {
    len = null;
    data = [];
    pass = "";
    generatePassword();
  } else {
    initialRes(res);
    return pass;
  }
  attempt = false;
}
function initialRes(input) {
  if (input.includes("y") || input.includes("Y")) {
    size = prompt(
      "Please select the length of the password (8-128 characters)"
    );
    passLength(size);
  } else generatePassword();
}
function passLength(val) {
  if (val >= 8 && val <= 128) {
    len = val -= 1;
    types();
  } else {
    // let con = confirm(
    //   "Your password length must be between 8 and 128 characters long. Please try again."
    // );
    generatePassword();
  }
}
function types() {
  let valType = prompt(
    "what types of characters would you like to include? (lowercase, uppercase, numeric, and/or special)"
  );
  if (
    valType.split(" ").includes("lowercase") ||
    valType.split(",").includes("lowercase") ||
    valType.split(" ").includes("lowercase,") ||
    valType.split(",").includes("lowercase,")
  ) {
    data.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (
    valType.split(" ").includes("uppercase") ||
    valType.split(",").includes("uppercase") ||
    valType.split(" ").includes("uppercase,") ||
    valType.split(",").includes("uppercase,")
  ) {
    data.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (
    valType.split(" ").includes("numeric") ||
    valType.split(",").includes("numeric") ||
    valType.split(" ").includes("numeric,") ||
    valType.split(",").includes("numeric,")
  ) {
    data.push("0123456789");
  }
  if (
    valType.split(" ").includes("special") ||
    valType.split(",").includes("special") ||
    valType.split(" ").includes("special,") ||
    valType.split(",").includes("special,")
  ) {
    data.push("!@#$%^&*()");
  }
  if (data.length >= 1) {
    creator(data);
  } else

  generatePassword();
}

function creator() {
  let randomNum;
  for (let i = 0; i <= len; i++) {
    randomNum = Math.floor(Math.random() * data.join("").length);
    pass += data.join("").substring(randomNum, randomNum + 1);
  }
  // console.log(pass);
}

function setToDefault() {
  // console.log("info: ", len, data, pass);
  len = null;
  data = [];
  pass = "";
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
generateBtn.addEventListener("click", setToDefault);
generateBtn.addEventListener("click", writePassword);
