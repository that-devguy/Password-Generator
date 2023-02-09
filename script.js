// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  console.log("Hey, You clicked the button!");
// Determine the character sets: lowercase, uppercase, number, and special characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;':<>,.?";

  // 1. Prompt the user for password length
  //    a. Password length 8 < 128
  var length = prompt("Enter the desired password length (8-128 characters): ");
  //    b. Validate the password length
  if (length < 8) {
    alert("Please enter a password length between 8-128 characters.");
    return "Please try again.";
  }
  if (length > 128) {
    alert("Please enter a password length between 8-128 characters.");
    return "Please try again.";
  }

  // 2. Prompt the user for password criteria
  var useLowercase = confirm("Click 'OK' to include lowercase letters.");
  var useUppercase = confirm("Click 'OK' to include uppercase letters.");
  var useNumeric = confirm("Click 'OK to include numbers.");
  var useSpecial = confirm("Click 'OK' to include special characters.");

  //    a. Password must inlude at least 1 of the following: lowercase  uppercase, number, special characters
  //    b. Validate password criteria
  if (!useLowercase && !useUppercase && !useSpecial && !useNumeric) {
    alert("At least one of the following character sets must be selected: \nlowercase, uppercase, numbers, or special characters.");

    return "Please try again.\nMake sure to select atleast one of the following character sets:\nlowercase, uppercase, numbers, or special characters.";
  }

  // 3. Generate the password base on criteria
  var characters ="";
  if (useLowercase) {
    characters += lowercase;
  }
  if (useUppercase) {
    characters += uppercase;
  }
  if (useNumeric) {
    characters += numeric;
  }
  if (useSpecial) {
    characters += special;
  }
  var password ="";
  for (var i = 0;i < length; i++){
    password += characters.charAt(Math.floor(Math.random()*characters.length));
  }

  // 4. Display on page
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
