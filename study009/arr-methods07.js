const numbers = [1, 5, 10, 15, 20, 25];

const test = numbers.find((value, index, arr) => {
    return value > 18;
});

console.log(test);


const pizzas = [ 'mussarela', 'calabresa', 'portuguesa', 'marguerita' ];

const foundPizza = pizzas.find( pizza => pizza.startsWith( 'm' ) );

console.log(foundPizza);


const fruits = [
    { name: 'jaca', quantity:  2},
    { name: 'banana', quantity:  0},
    { name: 'cereja', quantity:  5},
];

const findFruit = fruits.find(fruit => fruit.name === 'cereja');

console.log(findFruit);




const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

const testName = fullName.findIndex((value, index, arr) => {
    return value.startsWith('N');
});

console.log(testName);