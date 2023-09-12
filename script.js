// Assignment code here
function generatePassword() {
  var chars = "";
  var pw = "";
  var pwLength = document.getElementById("pw-length").value;

  console.log("pw-length = " + pwLength);
  console.log("lowercase = " + lowercase.checked);
  console.log("uppercase = " + uppercase.checked);
  console.log("numeric = " + numeric.checked);
  console.log("special = " + special.checked);

  if (lowercase.checked == true) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase.checked == true) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numeric.checked == true) {
    chars += "0123456789";
  }
  if (special.checked == true) {
    chars += "!@#$%^&*()-+=;':";
  }

  console.log("chars = " + chars);

  for (var i = 0; i <= pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    pw += chars.substring(randomNumber, randomNumber +1);
  }

  if(pw =="") {
    return "Please select a box below."
  }
  return pw;
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
