//Arreglo
const cata = [1, 4, 2, 6, "cata", "palabra", 0, -1, -3, -4, -10];

function deleteNumNega(number) {
    let numeros = [];
    for (let index = 0; index < number.length; index++) {
        if (typeof number[index] === "number") {
            if (number[index] > -1) {
                numeros.push(number[index])
            }

        }

    }
    console.log(numeros)
    return numeros
}

console.log(deleteNumNega(cata).sort())