const MAIS = document.getElementById('aumentar');
const MENOS = document.getElementById('diminuir');
let num = document.getElementById('num');

function validar(){
    if (num.innerText != 0) num.innerText--;
}

MAIS.addEventListener('click', () => num.innerText++, false);

MENOS.addEventListener('click', validar, false);
