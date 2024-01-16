const passwordBox = document.querySelector("#pass");
const btn = document.querySelector("button")
const copy = document.querySelector("#copy")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@!#$%^&*()_+{}[]|:;?";

const allChars = upperCase + lowerCase + numbers + symbols;

function creatPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password
}

btn.addEventListener("click", creatPassword)
copy.addEventListener("click", copyPassword)

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy")
}