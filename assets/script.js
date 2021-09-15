// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
//having arrays of your options
//asking how many characters
var length =prompt("How many characters? (8-128)")
if (length < 8) {
  alert("The password must be at least 8 characters!");
  return;
}
if (length > 128) {
  alert("The password must be less than 128 characters!");
  return;
}
var upperCase=confirm("Do you want to use uppercase letters?")
var lowerCase=confirm("Do you want to use lowercase letters?")
var numbers=confirm("Do you want to use numbers?")
var special=confirm("Do you want to use special characters?")


function RandomupperCase(){
 var upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
  return upperCase[Math.floor(Math.random()*upperCase.length)]
}
console.log(RandomupperCase());

function RandomlowerCase(){
  var lowerCase='abcdefghijklmnopqrstuvwxyz';  
   return lowerCase[Math.floor(Math.random()*lowerCase.length)]
 }
 console.log(RandomlowerCase());

 function RandomNumber(){
  var number='1234567890';  
   return number[Math.floor(Math.random()*number.length)]
 }
 console.log(RandomNumber());
 
 function RandomSpecial (){
  var special='!@#$%^&*()_+-={}';  
   return special[Math.floor(Math.random()*special.length)]
 }
 console.log(RandomSpecial());



var choices = [upperCase, lowerCase, numbers, special] 

//grab random character by their index
//build the password
var randomPassword = ''
randomPassword+='';

//loop up to the number of characters that they picked 
  return ''



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);