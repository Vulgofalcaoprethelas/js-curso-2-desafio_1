let altura = parseFloat(prompt("Digite sua altura em metros:"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
function IMC (alt, pes){
    return (pes/(alt*alt));
}
let resultado = IMC (altura, peso);
alert(`O resultado do seu IMC é de ${resultado.toFixed(2)}.`);