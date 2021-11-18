let numero = 7
let num1 = 0
let num2 = 1
let salida = 0
console.log(num1+num2)

for (let index = 1; index <= numero; index++) {
    
    salida = num1 + num2
    num1 = num2
    num2 = salida
    console.log(salida)


}

