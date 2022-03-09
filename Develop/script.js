// Assignment code here

var specCharArray = [" ","!","\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz"
var upperCaseString = lowerCaseString.toUpperCase();
var digitsString = "1234567890";
var combinedString = lowerCaseString + upperCaseString + digitsString;

var getRandomNumber = function(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

var getPasswordLength = function() {
  var passwordLength = window.prompt("Please choose a password length of 8-128:");
    if (passwordLength > 7 && passwordLength < 129) {
    } else {
      window.alert("Please input a number within specified range.");
      getPasswordLength();
    }
  }
var testYesNo = function(value) {
  let newValue = value.toUpperCase();
  if (newValue === "YES") {
    return true;
  } else if (newValue === "NO") {
    return true;
  } else {
    return false;
  }
}
var getPasswordParameters = function() {
  var getPassLower = function() {
      var pswrdLower = window.prompt("Would you like your password to include lowercase letters?");
      if (pswrdLower === "" || pswrdLower === null) {
        window.alert("Please select yes or no.")
        getPassLower();
      } else if (!testYesNo(pswrdLower)) {
        window.alert("Please select yes or no.")
        getPassLower();
      }
  }

  var getPassUpper = function() {
    var pswrdUpper = window.prompt("Would you like your password to include uppercase letters?");
    if (pswrdUpper === "" || pswrdUpper === null) {
      window.alert("Please select yes or no.")
      getPassLower();
    } else if (!testYesNo(pswrdUpper)) {
      window.alert("Please select yes or no.")
      getPassLower();
    }
  }

  var getPassNumber = function() {
    var pswrdNumber = window.prompt("Would you like your password to include numbers?");
    if (pswrdNumber === "" || pswrdNumber === null) {
      window.alert("Please select yes or no.")
      getPassLower();
    } else if (!testYesNo(pswrdNumber)) {
      window.alert("Please select yes or no.")
      getPassLower();
    }
  }

  var getPassSpecial = function() {
    var pswrdSpecial = window.prompt("Would you like your password to include special characters?");
    if (pswrdSpecial === "" || pswrdSpecial === null) {
      window.alert("Please select yes or no.")
      getPassLower();
    } else if (!testYesNo(pswrdSpecial)) {
      window.alert("Please select yes or no.")
      getPassLower();
    }
  }
  getPassLower();
  getPassUpper();
  getPassNumber();
  getPassSpecial();
}

var createPassword = function() {
  var confirmIterator = 0;
  if (pswrdLower) {
    var string1 = lowerCaseString.substring(randomNumber(0,25), 1);
    confirmIterator++
  } else {
    string1 = "";
  }

  if (pswrdUpper) {
    var string2 = upperCaseString.substring(randomNumber(0,25), 1);
    confirmIterator++
  } else {
    string2 = "";
  }

  if (pswrdNumber) {
    var string3 = digitsString.substring(randomNumber(0,9), 1);
    confirmIterator++
  } else string3 = ""

  if (pswrdSpecial) {
    var string4 = specCharArray[randomNumber(0,(specCharArray.length - 1))];
    confirmIterator++
  }else {
    string4 = ""
  }

  var remainingIterator = 


  var tempPassword = string1 + string2 + string3 + string4 +string5;

}

var generatePassword = function () {
      getPasswordLength();
      getPasswordParameters();
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
