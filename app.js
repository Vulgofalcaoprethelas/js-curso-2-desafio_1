
let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';

function clickConsole(){
    console.log ("o botão do console foi pressionado");
    alert ("o botão do console foi pressionado");
}

function clickAlert(){
    console.log ("eu amo o JS");
    alert ("eu amo o JS");
}

function clickPrompt (){
    let cidade = prompt ("digite o nome de uma cidade do Brasil");
    alert (` estive na cidade ${cidade} e lembrei de você`);
}

let numero1
let numero2
let soma
function clickSoma (){
 numero1 =parseInt ( prompt ("digite o primeiro numero"));
 numero2 = parseInt ( prompt ("digite o segundo numero"));
 soma = numero1 + numero2
alert (`a soma entre esses dois numeros da ${soma} `);
}