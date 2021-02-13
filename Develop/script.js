// Assignment Code
// For slider and box
const characterAmountNumber = document.getElementById("characterAmountNumber");
const characterAmountRange = document.getElementById("characterAmountRange");
const passwordGeneratorForm = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordGeneratorForm");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("passwordDisplay");
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat( arrayFromLowToHigh(91, 96)).concat( arrayFromLowToHigh(123, 126))

console.log (LOWERCASE_CHAR_CODES)

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
  const passwordCharacters = [] 
  for (let i = 0; i < characterAmount, i++;)
  const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join()

  

// function arrayFromLowToHigh(low, high) {
//   const array = []
//   for (let i = low; i <= high; i++) {
//   array.push(i)
//   }
//   return array
// }

// function syncCharacterAmount(e) {
//   const value = e.target.value
//   characterAmountNumber.value = value
//   characterAmountRange.value = value
// }





















var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
