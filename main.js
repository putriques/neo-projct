const titulo = document.getElementById("titulo");
const meses = document.getElementById("meses");
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const botoes = document.querySelectorAll(".botao");

function limparAtivo() {
    botoes.forEach(botao => botao.classList.remove("escuro"))
}

document.getElementById("btn1").onclick = () => {
    limparAtivo();
    btn1.classList.add("escuro");

    titulo.textContent = "Faculdade";
    meses.textContent = "10";
    dias.textContent = "5";
    horas.textContent = "6";
    minutos.textContent = "50";

};

document.getElementById("btn2").onclick = () => {
    limparAtivo();
    btn2.classList.add("escuro");

    titulo.textContent = "Projetos JS";
    meses.textContent = "12";
    dias.textContent = "8";
    horas.textContent = "9";
    minutos.textContent = "42";

}

document.getElementById("btn3").onclick = () => {
    limparAtivo();
    btn3.classList.add("escuro");

    titulo.textContent = "Emprego";
    meses.textContent = "5";
    dias.textContent = "9";
    horas.textContent = "4";
    minutos.textContent = "28";

}

document.getElementById("btn4").onclick = () => {
    limparAtivo();
    btn4.classList.add("escuro");

    titulo.textContent = "Especialização";
    meses.textContent = "3";
    dias.textContent = "32";
    horas.textContent = "4";
    minutos.textContent = "16";

}