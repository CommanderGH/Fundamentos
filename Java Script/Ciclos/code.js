function getRandom(){
    return Math.floor(Math.random() *  100);
}

var random = getRandom();
var contador = 1;

while (random != 50){
    random = getRandom();
    contador++;
}

console.log("Se necesitaron " + contador + " veces para obtener 50.")