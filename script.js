
let ligada = false;

const botao = document.querySelector("#interruptor");
const lampada = document.querySelector("#lampada");
const aviso = document.querySelector("#aviso");

botao.addEventListener("click", function () {
  ligada = !ligada;

  if (ligada) {
    lampada.textContent = "💡";
    aviso.textContent = "Bom dia magnata, espero que tenha acordado cheio de energia!";
    botao.textContent = "Desligar";
    document.body.classList.add("acesa");
  } else {
    lampada.textContent = "🌑";
    aviso.textContent = "Acorda colega.";
    botao.textContent = "Ligar";
    document.body.classList.remove("acesa");
  }
});
