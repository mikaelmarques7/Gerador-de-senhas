const caixaDeSenha = document.getElementById("senha");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const todosOsCaractrs = upperCase + lowerCase + number + symbol;

function criarSenha() {
    let senha = "";
    senha += upperCase[Math.floor(Math.random()* upperCase.length)];
    senha += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    senha += number[Math.floor(Math.random()* number.length)];
    senha += symbol[Math.floor(Math.random()* symbol.length)];

    while(length > senha.length){
        senha += todosOsCaractrs[Math.floor(Math.random()* todosOsCaractrs.length)];
    }
    caixaDeSenha.value = senha;
}


function copiarSenha() {
    caixaDeSenha.select();
    document.execCommand("copy")
}