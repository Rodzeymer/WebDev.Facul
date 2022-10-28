var idade = prompt("Digite sua idade")


if(idade<0){
    alert("Idade inválida")
}

if (idade>0 && idade >=18){
    alert('Você é maior de idade!')
} else {
    alert('Você é menor de idade!')
}

if(idade >= 18 && idade <60){
    alert("Você está longe de se aposentar")
} else if (idade >=60){
    alert("Você está perto de se aposentar")
}

now = new Date
now.getFullYear()

var nascimento = now - idade;

alert('Você deve ter nascido em ' + nascimento)