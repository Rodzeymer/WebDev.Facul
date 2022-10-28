var numero1 = parseInt(prompt("Insira um número"));

var numero2 = parseInt(prompt("Insira outro número número"));

var operador = prompt("Escolha qual operação realizar: insira + para somar, - para subtrair, / para dividir ou * para dividir")

if(operador == "+"){
    resultado =numero1+numero2;
} 
if(operador == "-"){
    resultado =numero1-numero2;
} 
if(operador == "*"){
    resultado =numero1*numero2;
} 
if(operador == "/"){
    resultado =numero1/numero2;
} 

document.write(numero1 + "<br>")
document.write(operador + "<br>")
document.write(numero2 + "<br>")
document.write("=<br>")
document.write(numero2 + "<br>")

var div_local = document.getElementById("exibe_resultado");

div_local.innerHTML += resultado;

/* Ou simplificando

var numero1 = parseInt(prompt("Insira um número"));
var numero2 = parseInt(prompt("Insira outro número número"));
var operador = prompt("Escolha qual operação realizar: insira + para somar, - para subtrair, / para dividir ou * para dividir")

var resultadoOperacao = realizaOperacao(numero1, numero2, operador);

function realizaOperacao(numero1, numero2, operador){
    var resultado =0;
    resultado = eval(numero1 + operador + numero2);

    return resultado;
}

var div_local = document.getElementById("exibe_resultado");
div_local.innerHTML += resultadoOperacao;

*/