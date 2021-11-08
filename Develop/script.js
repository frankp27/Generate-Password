// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXWZY";
var numbers ="0123456789";
var specialCharacters ="!@#$%^&*()<>?{}[]:+_-";
var passwordLength = "";



// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This where we generate the password
function generatePassword() {
  userPassword = "";
  passwordCharacters = "";


  var passwordLength = prompt(
    "Select length of password. (Between 8 - 128 characters)"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    password.length = passwordLength;
  
    var isLowercase = confirm("Include lowercase letters in password?")

    var isUppercase = confirm("Include uppercase letters in password?")

    var isNumbers = confirm("Include numbers in password?")

    var isSpecialCharacters = confirm("Include special characters in password?");
  } else{
    alert("Plese select a password between 8-128 characters");
  } 
  if (isLowercase) {
    passwordCharacters += lowercase;
  } 
  if (isUppercase) {
    passwordCharacters += uppercase;
  }
  if (isNumbers){
    passwordCharacters += numbers;
  }
  if (isSpecialCharacters) {
    passwordCharacters += specialCharacters;
  }
  for (var i =0; i < passwordLength; i++) {
    userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

  }
 // 4.Display password to the page
  return userPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
