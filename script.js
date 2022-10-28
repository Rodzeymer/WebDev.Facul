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