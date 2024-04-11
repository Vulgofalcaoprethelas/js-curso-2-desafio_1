let valorEmDolar= parseFloat(prompt("Digite um valor em Dolar a ser convertido em Reais:"));
let cotacaoDolar = 4.80;
 
function converterDolarReais(valorDolar){
    let valorReais = valorDolar * cotacaoDolar;
    return valorReais;
}
 
valorReais = converterDolarReais(valorEmDolar);
alert(`U$ ${valorEmDolar} dólares equivalem a R$ ${valorReais.toFixed(2)} reais.`);