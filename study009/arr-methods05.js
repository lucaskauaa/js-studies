const numbers = [20, 25, 30, 35, 40];

const test = numbers.every((value, index, arr) => {
    return value > 18;
});

console.log(test);


const numbers02 = [15, 20, 25, 30, 35];

const test02 = numbers02.every((value) => {
    return value > 18;
});

console.log(test02);


const people = [
    { id: 12, name: 'Frederico', age: 8 },
    { id: 47, name: 'Francisca', age: 7 },
    { id: 77, name: 'Ramon', age: 48 },
    { id: 85, name: 'Zenon', age: 52 }
];

const testAge = people.every(value => value.age >= 18);

console.log(testAge);

console.log(testAge ? 'Todos são de maior' : 'Nem todos são de maior');