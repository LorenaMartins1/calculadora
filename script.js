function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const OPERACAO_SOMA = 1;
const OPERACAO_SUBTRACAO = 2;
const OPERACAO_MULTIPLICACAO = 3;
const OPERACAO_DIVISAO = 4;


function calcular(operacao) {
  const valor1 = Number(document.querySelector("#input1").value);
  const valor2 = Number(document.querySelector("#input2").value);
  const resultadoElemento = document.querySelector("#resultado");

  switch (operacao) {
    case OPERACAO_SOMA:
      resultadoElemento.textContent = soma(valor1, valor2);
      break;
    case OPERACAO_SUBTRACAO:
      resultadoElemento.textContent = subtrai(valor1, valor2);
      break;
    case OPERACAO_MULTIPLICACAO:
      resultadoElemento.textContent = multiplica(valor1, valor2);
      break;
    case OPERACAO_DIVISAO:
      resultadoElemento.textContent = divide(valor1, valor2);
      break;
    default:
      resultadoElemento.textContent = 'Operação inválida';
  }
}
