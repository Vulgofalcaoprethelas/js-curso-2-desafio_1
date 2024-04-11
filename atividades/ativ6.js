let raio = parseFloat(prompt ("Digite o raio da sala"));
 
function area (parRaio) {
  return (parRaio*parRaio) * 3.14;
}
function perimetro (parRaio){
  return  ((2*3.14)*parRaio);
}
let areaSala = area (raio);
let perimetroSala = perimetro (raio);
alert (`O perímetro da sala é de: ${perimetroSala.toFixed(2)} e a área é de ${areaSala.toFixed(2)}`);