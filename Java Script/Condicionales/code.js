var one = "es una prueba";
var two = "es otra prueba";
var three = "prueba";

if (two.indexOf(three) != -1){
    console.log("\"",three,"\"","está contenida en","\"",two,"\"")
}

if (two.indexOf(one) != -1){
    console.log("\"",one,"\"","está contenida en","\"",two,"\"")
}

if (one.indexOf(three) != -1){
    console.log("\"",three,"\"","está contenida en","\"",one,"\"")
}

if (one.indexOf(two) != -1){
    console.log("\"",two,"\"","está contenida en","\"",one,"\"")
}

if (three.indexOf(one) != -1){
    console.log("\"",one,"\"","está contenida en","\"",three,"\"")
}

if (three.indexOf(two) != -1){
    console.log("\"",two,"\"","está contenida en","\"",three,"\"")
}