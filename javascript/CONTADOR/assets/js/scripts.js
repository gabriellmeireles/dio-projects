/** 
 * 
 * Utilizando addEventListener();
 * Utilizando condicial para manter o contador ente 0 e 10;
 * Utilizando condicial para verificar se o número é par ou impar
 * Utilizando style.color para diferenciar os números pares e impares;
 * 
 **/

var currentNumber = document.getElementById('currentNumber').innerHTML;

const elementDecrement = document.getElementById("btnDecrement");
elementDecrement.addEventListener('click', function(){
    if (currentNumber > 0) {
        currentNumber --;
        if (currentNumber%2 === 0 ) {
            document.getElementById('currentNumber').innerHTML = currentNumber;
            document.getElementById('currentNumber').style.color = "blue";
            document.getElementById('parImpar').innerHTML = 'PAR'
        }else{
            document.getElementById('currentNumber').innerHTML = currentNumber;
            document.getElementById('currentNumber').style.color = "red";
            document.getElementById('parImpar').innerHTML = 'IMPAR'
        }
    } 
});

const elementIncrement = document.getElementById("btnIncrement");
elementIncrement.addEventListener('click', function(){
    if (currentNumber < 10){
        currentNumber ++;
        if (currentNumber%2 === 0) {
            document.getElementById('currentNumber').innerHTML = currentNumber;
            document.getElementById('currentNumber').style.color = "blue";
            document.getElementById('parImpar').innerHTML = 'PAR'
        }else{
            document.getElementById('currentNumber').innerHTML = currentNumber;
            document.getElementById('currentNumber').style.color = "red";
            document.getElementById('parImpar').innerHTML = 'IMPAR'
        }
    }
});
