// Assignment code here
// Initialized most variables to insure they're available globally
var specCharArray = [" ","!","\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz"
var upperCaseString = lowerCaseString.toUpperCase();
var digitsString = "1234567890";
var combinedString = "";
var pswrdLower;
var pswrdUpper;
var pswrdNumber;
var pswrdSpecial;
var passwordLength;
var string1;
var string2;
var string3;
var string4;
var string5;
var tempPassword;

// Random number generator with min max parameters
var getRandomNumber = function(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

// First part of the password generator function
var getPasswordLength = function() {
  passwordLength = window.prompt("Please choose a password length of 8-128:");
    if (passwordLength > 7 && passwordLength < 129) {
    } else {
      window.alert("Please input a number within specified range.");
      getPasswordLength();
    }
  }

// Test to see if yes or no has been entered in any case combination
var testYesNo = function(value) {
  var newValue = value.toLowerCase();
  if (newValue === "yes") {
    return true;
  } else if (newValue === "no") {
    return true;
  } else {
    return false;
  }
}

// Second part of the password generator function to get the four parameters set out
var getPasswordParameters = function() {
  var getPassLower = function() {
      pswrdLower = window.prompt("Would you like your password to include lowercase letters?");
      if (pswrdLower === "" || pswrdLower === null) {
        window.alert("Please select yes or no.")
        getPassLower();
      } else if (!testYesNo(pswrdLower)) {
        window.alert("Please select yes or no.")
        getPassLower();
      }
  }

  var getPassUpper = function() {
    pswrdUpper = window.prompt("Would you like your password to include uppercase letters?");
    if (pswrdUpper === "" || pswrdUpper === null) {
      window.alert("Please select yes or no.")
      getPassUpper();
    } else if (!testYesNo(pswrdUpper)) {
      window.alert("Please select yes or no.")
      getPassUpper();
    }
  }

  var getPassNumber = function() {
    pswrdNumber = window.prompt("Would you like your password to include numbers?");
    if (pswrdNumber === "" || pswrdNumber === null) {
      window.alert("Please select yes or no.")
      getPassNumber();
    } else if (!testYesNo(pswrdNumber)) {
      window.alert("Please select yes or no.")
      getPassNumber();
    }
  }

  var getPassSpecial = function() {
    pswrdSpecial = window.prompt("Would you like your password to include special characters?");
    if (pswrdSpecial === "" || pswrdSpecial === null) {
      window.alert("Please select yes or no.")
      getPassSpecial();
    } else if (!testYesNo(pswrdSpecial)) {
      window.alert("Please select yes or no.")
      getPassSpecial();
    }
  }
  // Below are the calls to the above defined functions so that each execute when the outer function is called
  getPassLower();
  getPassUpper();
  getPassNumber();
  getPassSpecial();
}

/*  The last step of the password generator function
  It takes all of the four parameters selected by the getPasswordParamets function
  and inputs at least one of each type into seperate string elements
  as each selection is checked it updates the combinedListString variable
  so that the remainder of the password can be generated from characters 
  selected by the user. Finally it combines all the seperate randomly selected characters
  and returns them at the end of the function. */
var createPassword = function() {
  var confirmIterator = 0;
  if (pswrdLower.toLowerCase() === 'yes') {
    string1 = lowerCaseString.charAt(getRandomNumber(0,25));
    combinedString = combinedString + lowerCaseString;
    confirmIterator++
  } else {
    string1 = "";
  }

  if (pswrdUpper.toLowerCase() === 'yes') {
    string2 = upperCaseString.charAt(getRandomNumber(0,25));
    combinedString = combinedString + upperCaseString;
    confirmIterator++
  } else {
    string2 = "";
  }

  if (pswrdNumber.toLowerCase() === 'yes') {
    string3 = digitsString.charAt(getRandomNumber(0,9));
    combinedString = combinedString + digitsString;
    confirmIterator++
  } else {
    string3 = ""
  }
  
  if (pswrdSpecial.toLowerCase() === 'yes') {
    string4 = specCharArray[getRandomNumber(0,(specCharArray.length - 1))];
    confirmIterator++
  }else {
    string4 = "";
  }

  var remainingIterator = passwordLength - confirmIterator;
  string5 = "";

  for (let i = 0; i < remainingIterator; i++ ) {
    string5 = string5 + combinedString.charAt(getRandomNumber(0, (combinedString.length - 1)));
  }


  tempPassword = string1 + string2 + string3 + string4 +string5;

  // initializes the combinedString variable so that it is empty if a new password is generated
  combinedString = "";

  return tempPassword;

}

// Calls to all of the above functions so that the generated password can be passed to the html elements.
var generatePassword = function () {
      getPasswordLength();
      getPasswordParameters();
      var anotherPassword = createPassword();
      return anotherPassword;

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
