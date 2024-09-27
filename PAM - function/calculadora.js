
function soma(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

// console.log(soma(5, 5));
// console.log(sub(5, 5));
// console.log(mult(5, 5));
// console.log(div(5, 5));

function calcular() {
    let a = parseFloat(prompt("Digite o primeiro número:"));
    console.log('Primeiro número: ' + a);
    let b = parseFloat(prompt("Digite o segundo número:"));
    console.log('Segundo número: ' + b);

    alert("Resultados:\n" +
          "Soma: " + soma(a, b) + "\n" +
          "Subtração: " + subtracao(a, b) + "\n" +
          "Multiplicação: " + multiplicacao(a, b) + "\n" +
          "Divisão: " + (b !== 0 ? divisao(a, b) : "Divisão por zero não é permitida."));
    
}

calcular();