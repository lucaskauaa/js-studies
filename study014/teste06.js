const numbers = [1, 2, 3, 4, 20];

const test = numbers.some((value, index, arr) => {
    return value >= 18;
});

console.log(test);


const numbers02 = [1, 2, 3, 4, 5];

const test02 = numbers02.some(value => value >= 18);

console.log(test02);


const team = [
    { id: 12, name: 'Topper Harley', pilot: true },
    { id: 44, name: 'Ramada Tompson', pilot: true },
    { id: 59, name: 'Pete Tompson', pilot: false },
    { id: 122, name: 'Kowalsk', pilot: false }
];

const checkPilot = team.some(user => user.pilot);

console.log(checkPilot ? 'Tem um piloto no time' : 'Não tem um piloto no time');