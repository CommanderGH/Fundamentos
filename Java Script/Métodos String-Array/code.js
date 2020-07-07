str1 = "Arroz";
str2 = "Programación";
str3 = "Un texto más largo de lo normal";
str4 = "    Daniel     "
arr1 = [1,2,3,4,5];
arr2 = ["Hola","Pera","Mango"];

// PARTE 1 DE LA TAREA

// Métodos de String

console.log(str1.charAt(2));

str5 = str3.split(" ");
console.log(str5);

console.log(str3.endsWith("más",12));

search = "m"
console.log(`El índice de la primera aparición de "${search}" es ${str3.indexOf(search)} `);

console.log(`El índice de la primera aparición de "${search}" contando desde atrás es ${str3.lastIndexOf(search)} `)

word = "largo"
console.log(`La palabra "${word}" ${str3.includes(word) ? 'está' : 'no está'} en la frase`);
console.log(`La palabra "${word}" ${str2.includes(word) ? 'está' : 'no está'} en la frase`);

console.log(str4.trim());

console.log(str1.toUpperCase());

// Métodos de Array

console.log(Array.isArray(arr1));
console.log(Array.isArray(str1));

result = arr2.filter(word => word.length > 4);
console.log(result);

arr1.forEach(element => console.log(element));

console.log(arr1.reverse());

console.log(arr2.unshift("Comida","Dos Veces"));
console.log(arr2);