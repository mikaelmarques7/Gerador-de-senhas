const passwordBox = document.getElementById("senha");
const inputLength = document.getElementById("length");
const checkUppercase = document.getElementById("include-upper");
const checkLowercase = document.getElementById("include-lower");
const checkNumber = document.getElementById("include-number");
const checkSymbols = document.getElementById("include-symbols");
const messageBox = document.getElementById("message");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "@#$%^&*()_+~|}{[]></-=";



function generatePassword() {
    let allCharacters = "";
    let password = "";
    const length = parseInt(inputLength.value) || 12;


    if (!checkUppercase.checked && !checkLowercase.checked && !checkNumber.check && !checkSymbols.check) {
        alert("Selecione ao menos uma opção de caracteres para gerar uma senha ");
        return;
    }

    if (checkUppercase.checked) {
        allCharacters += uppercaseChars;
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }

    if (checkLowercase.checked) {
        allCharacters += lowercaseChars;
        password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }


    if (checkNumber.checked) {
        allCharacters += numberChars;
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
    }


    if (checkSymbols.checked) {
        allCharacters += symbolChars;
        password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    while (password.length < length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    passwordBox.value = password
}


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");

    messageBox.classList.add("show");

    setTimeout(() => {
        messageBox.classList.remove("show")
    }, 1000)
}
