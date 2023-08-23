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
  // attempt = false;
}
function initialRes(input) {
  if (input.includes("y") || input.includes("Y")) {
    size = prompt(
      "Please select the length of the password (8-128 characters)"
    );
    passLength(size);
  } else if (!input.includes || input.includes("Y")) {
    // confirm('not long enough');
    generatePassword();
  }
}
function passLength(size) {
  let hasNumber = /\d/;
  if (size >= 8 && size <= 128) {
    len = size -= 1;
    console.log('size',size)
    console.log('length',len)
    types();
  } else if (size < 8 || size > 128) {
    confirm(
      "Your password length must be between 8 and 128 characters long. Please try again."
    );
    initialRes("y");
  } else if (!size.hasNumber) {
    confirm("The length must be a number. Please try again.");
    initialRes("y");
  }
}
function types() {
  let validTypes = false;
  let valType = prompt(
    "What types of characters would you like to include? (lowercase, uppercase, numeric, and/or special)"
  );
  if (
    valType.split(" ").includes("lowercase") ||
    valType.split(",").includes("lowercase") ||
    valType.split(" ").includes("lowercase,") ||
    valType.split(",").includes("lowercase,")
  ) {
    validTypes = true;
    data.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (
    valType.split(" ").includes("uppercase") ||
    valType.split(",").includes("uppercase") ||
    valType.split(" ").includes("uppercase,") ||
    valType.split(",").includes("uppercase,")
  ) {
    validTypes = true;
    data.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (
    valType.split(" ").includes("numeric") ||
    valType.split(",").includes("numeric") ||
    valType.split(" ").includes("numeric,") ||
    valType.split(",").includes("numeric,")
  ) {
    validTypes = true;
    data.push("0123456789");
  }
  if (
    valType.split(" ").includes("special") ||
    valType.split(",").includes("special") ||
    valType.split(" ").includes("special,") ||
    valType.split(",").includes("special,")
  ) {
    validTypes = true;
    data.push("!@#$%^&*()");
  }
  if (data.length >= 1 && validTypes === true) {
    creator(data);
  } else if (validTypes === false) {
    confirm("You did not select a valid character type. Please try again.");
    passLength(len+=1)
  } else generatePassword();
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
  console.log("info: ", len, data, pass);
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
