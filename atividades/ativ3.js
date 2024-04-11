let num = prompt('digite um numero');
function fat(num1){
    if(num == 1 || 0){
        alert ('O fatorial desse numero é 1')
    }else{
        numero = 1
        for(let i = num1; i>1 ; i-- ){
            numero *= i;
        }
    return numero
    }  

}
let fatorial = fat(num);
alert (`A fatorial desse numero é ${fatorial}`);