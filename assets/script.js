// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
var lowerCase='abcdefghijklmnopqrstuvwxyz';  
var number='1234567890';  
var special='!@#$%^&*()_+-={}';  
var usercharacterchoice= ""
var password = "";

var userlength =prompt("How many characters? (8-128)")
if (userlength < 8) 
{
  alert("The password must be at least 8 characters!");
}
if (userlength > 128) 
{
  alert("The password must be less than 128 characters!");
}
var upperCaseChoice=confirm("Do you want to use uppercase letters?")
var lowerCaseChoice=confirm("Do you want to use lowercase letters?")
var numbersChoice=confirm("Do you want to use numbers?")
var specialChoice=confirm("Do you want to use special characters?")
function generatePassword() 
{
 
var usercharacterchoice = (!specialChoice && !numbersChoice && !upperCaseChoice && !lowerCaseChoice)
  if  (specialChoice && numbersChoice && upperCaseChoice && lowerCaseChoice) 
{
  usercharacterchoiceices = special.concat(number, lowerCase, upperCase);
}
else if (specialChoice && numbersChoice && lowerCaseChoice) 
{
  usercharacterchoice = special.concat(number, lowerCase);
}
else if (specialChoice && numbersChoice && upperCaseChoice) 
{
  usercharacterchoice = special.concat(number, upperCase);
}
else if (numbersChoice && lowerCaseChoice && upperCaseChoice) 
{
  usercharacterchoice = number.concat(lowerCase, upperCase);
}
else if (specialChoice && lowerCaseChoice && upperCaseChoice) 
{
  usercharacterchoice = special.concat(lowerCase, upperCase);
}
else if (specialChoice && numbersChoice) 
{
  usercharacterchoice = special.concat(number);
} 
else if (specialChoice && lowerCaseChoice) 
{
  usercharacterchoice = special.concat(lowerCase);
} 
else if (specialChoice && upperCaseChoice) 
{
  usercharacterchoice = special.concat(upperCase);
}
else if (lowerCaseChoice && numbersChoice) 
{
  usercharacterchoice = lowerCase.concat(number);
} 
else if (lowerCaseChoice && upperCaseChoice) 
{
  usercharacterchoice = lowerCase.concat(upperCase);
} 
else if (numbersChoice && upperCaseChoice) 
{
  usercharacterchoice = number.concat(upperCase);
}

else if (specialChoice) 
{
  usercharacterchoice = special;
}
else if (confirmNumber)
{
  usercharacterchoice = number;
}
else if (lowerCaseChoice) 
{
  usercharacterchoice = lowerCase;
}
else if (upperCaseChoice) 
{
  usercharacterchoice = upperCase;
}
function generatePassword()
{
for (var i = 0; i < userlength; i++)
 {
 var usercharacterchoice = usercharacterchoice[Math.floor(Math.random()*usercharacterchoice.length)]
};
}
var randomPassword = ''
randomPassword+='';
generateBtn.addEventListener("click", writePassword);
generatePassword();
writePassword();
console.log(generatePassword)
}