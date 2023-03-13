const numbers = [1, 2, 3, 4, 5];

numbers.forEach(test);

function test(value, index, arr) {
    console.log(`Índice: ${index}`);
    console.log(`Valor: ${value}`);
    console.log(`Array: ${arr}`);
    console.log('');
}


const numbers02 = [5, 10, 15, 20, 25];

numbers02.forEach(function (value, index, arr) {
    console.log(`Índice: ${index}`);
    console.log(`Valor: ${value}`);
    console.log(`Array: ${arr}`);
    console.log('');
})


const numbers03 = [2, 4, 8, 16, 32];

numbers03.forEach((value, index, arr) => {
    console.log(`Índice: ${index}`);
    console.log(`Valor: ${value}`);
    console.log(`Array: ${arr}`);
    console.log('');
});


const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

fullName.forEach(name => {
    console.log(name);
})


const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map(value => ((value - 32) * 5 / 9).toFixed(0));

console.log(celsius);