// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatedPassword = "";

// Abandon all scope ye who enter here 
var arrayOfPossibleChars = [];
var pwLength = "";

var includeLower = "";
var includeUpper = "";
var includeNumbers = "";
var includeSpecial = "";

var chosenCriteria = {
  lower: "",
  upper: "",
  numbers: "",
  special: ""
};

// TODO: function promptCriteria
function promptCriteria() {
  // series of prompts for password criteria
  // length between 8 and 128 characters
  pwLength = prompt(
    "Enter a number between 8 and 128 for your password length:",
    "12");
  // repeat if not between 8-128
  if (pwLength >= 8 && pwLength <= 128) {
    console.log(`User entered ${pwLength} for password length.`);
  } else {
    pwLength = prompt(
      "You must enter a number between 8 and 128 for your password length:",
      "12");
    if (pwLength >= 8 && pwLength <= 128) {
      console.log(`User entered ${pwLength} for password length.`);
    } else {
      alert("You must enter a number between 8 and 128.")
      console.log(`User does not follow basic instructions.`);
      return "Press button to try again."
    };
  };

  // provide instructions for the prompts to follow
  alert("You will be prompted to select password criteria on the next pop-ups.\nYou MUST choose at least 1 of the 4 options.\nPress the OK button to include the option displayed or Cancel to skip it.\nPress OK now.")

  // include lowercase, uppercase, numbers, special
  includeLower = confirm("1. Would you like to include lowercase letters?\nPress OK to include or Cancel to skip.")
  console.log(`includeLower is ${includeLower}.`)

  includeUpper = confirm("1. Would you like to include Uppercase letters?\nPress OK to include or Cancel to skip.")
  console.log(`includeUpper is ${includeUpper}.`)

  includeNumbers = confirm("1. Would you like to include numbers?\nPress OK to include or Cancel to skip.")
  console.log(`includeNumbers is ${includeNumbers}.`)

  includeSpecial = confirm("1. Would you like to include special characters?\nPress OK to include or Cancel to skip.")
  console.log(`includeSpecial is ${includeSpecial}.`)

  // reset if no choice was made
  if (includeLower === false && includeUpper === false &&
    includeNumbers === false && includeSpecial === false) {
    alert("You have to select at least 1 of the 4 options");
    console.log(`User does not follow basic instructions.`);
    return "Press button to try again."
  } else {
    console.log(`Password criteria are - 
              Lowercase: ${includeLower}
              Uppercase: ${includeUpper}
              Numbers: ${includeNumbers}
              Special: ${includeSpecial}
              Length: ${pwLength}`)
  };
  // numbers SHOULD BE NUMBERS
  pwLength = parseInt(pwLength, 10);

  // add values to chosenCriteria for use in array of possible characters
  chosenCriteria.lower = includeLower;
  chosenCriteria.upper = includeUpper;
  chosenCriteria.numbers = includeNumbers;
  chosenCriteria.special = includeSpecial;
  console.log(chosenCriteria);
};

// Create an array of all possible characters based on user criteria
function addToPossible(){
  const arrayLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const arrayUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arraySpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', ';', '.']

if (chosenCriteria.lower === true) {
  arrayOfPossibleChars = arrayLower
} else {
  console.log(`User did not want to include lowercase letters.`)
}

if (chosenCriteria.upper === true) {
  arrayOfPossibleChars = arrayOfPossibleChars.concat(arrayUpper);
} else {
  console.log(`User did not want to include uppercase letters.`)
}

if (chosenCriteria.numbers === true) {
  arrayOfPossibleChars = arrayOfPossibleChars.concat(arrayNumbers);
} else {
  console.log(`User did not want to include numbers.`)
}

if (chosenCriteria.special === true) {
  arrayOfPossibleChars = arrayOfPossibleChars.concat(arraySpecial);
} else {
  console.log(`User did not want to include special characters.`)
}

console.log(arrayOfPossibleChars);
}

// TODO: function generatePassword()
function generatePassword() {
  console.log("User Pressed Generate Password")

 
  promptCriteria();

  addToPossible();

  // loop through array of possible characters based on selected pw length, choosing random characters
  let finalPassword = "";
  for (var i = 0; i < pwLength; i++){
    let randomChar = Math.floor(Math.random() * arrayOfPossibleChars.length);
    finalPassword = finalPassword + arrayOfPossibleChars[randomChar];
  }

  // display generated password on page
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // displays result of generatePassword function
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);