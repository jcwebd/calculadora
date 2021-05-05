var numero_1;
var numero_2;
var operacion;
var resultado = document.getElementById("imprimir");
//Sintaxis de una función 
function Inicio () { 
    numero_1 = prompt("Ingrese un número: ");
    numero_2 = prompt("Ingrese un número: ");
    numero_1 = parseFloat(numero_1); //Transforma una cadena(texto) a un número decimal
    numero_2 = parseFloat(numero_2);
}
function Sumar () {
    //Sintaxis del IF/ELSE
    if(!numero_1 || !numero_2){
        alert("Por favor inserte un número. Haga Clic en Iniciar.");
        inicio()
    }else{
        operacion = numero_1 + numero_2;
        //console.log("El resultado de la suma de " + numero_1 + " + " + numero_2 + " es: " + operacion);
        resultado.innerHTML = (operacion);
    }
}
function Restar () { 
    if(!numero_1 || !numero_2){
        alert("Por favor inserte un número. Haga Clic en Iniciar.");
        inicio()
    }else{
        operacion = numero_1 - numero_2;
        //console.log("El resultado de la suma de " + numero_1 + " + " + numero_2 + " es: " + operacion);
        resultado.innerHTML = (operacion);
    }
}
function Multiplicar () { 
    if(!numero_1 || !numero_2){
        alert("Por favor inserte un número. Haga Clic en Iniciar.");
        inicio()
    }else{
        operacion = numero_1 * numero_2;
        //console.log("El resultado de la suma de " + numero_1 + " + " + numero_2 + " es: " + operacion);
        resultado.innerHTML = (operacion);
    }
}
function Dividir() { 
    if(!numero_1 || !numero_2){
        alert("Por favor inserte un número. Haga Clic en Iniciar.");
        inicio()
    }else{
        operacion = numero_1 / numero_2;
        //console.log("El resultado de la suma de " + numero_1 + " + " + numero_2 + " es: " + operacion);
        resultado.innerHTML = (operacion);
    }
}