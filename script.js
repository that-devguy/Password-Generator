// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  console.log("Hey, You clicked the button!");
// Determine the character sets: lowercase, uppercase, number, and special characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;':<>,.?";

  // 1. Prompt the user for password criteria
  //    a. Password length 8 < 128
  // 2. Validate the input
  // 3. Generate the password base on criteria


  // 4. Display on page
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
