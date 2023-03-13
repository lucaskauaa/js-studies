const numbers = [1, 2, 3, 4, 5];

const sumNumbers = numbers.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);



const name = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

const fullName = name.reduce((accumulator, value) => {
    return accumulator + value + ' ';
}, '');

console.log(fullName);



const people = [
    {
        fname: 'Lucas',
        age: 19
    },
    {
        fname: 'Levi',
        age: 11
    },
    {
        fname: 'Ayrton',
        age: 30
    },
    {
        fname: 'João',
        age: 14
    },
    {
        fname: 'Maria',
        age: 23
    },
    {
        fname: 'Joana',
        age: 21
    },
    {
        fname: 'Matheus',
        age: 15
    },
    {
        fname: 'Isa',
        age: 23
    }
];

const newPeople = people.reduce((accumulator, value) => {
    value.age >= 18 ? accumulator.maiores.push(value.fname) : accumulator.menores.push(value.fname);

    return accumulator;
}, {maiores: [], menores: []});

console.log(newPeople);



const rockets = [
    {
        country: 'Russia',
        launches: 32
    },
    {
        country: 'US',
        launches: 23
    },
    {
        country: 'China',
        launches: 16
    },
    {
        country: 'Europe',
        launches: 7
    },
    {
        country: 'India',
        launches: 4
    },
    {
        country: 'Japan',
        launches: 3
    }
];

const totalLaunches = rockets.reduce((accumulator, value) => {
    return accumulator + value.launches;
}, 0);

console.log(totalLaunches);



const itens = [
    { description: 'pen', quantity: 1, price: 3 },
    { description: 'rule', quantity: 2, price: 5 },
    { description: 'erase', quantity: 2, price: 6 }
];

const totalPrice = itens.reduce((accumulator, value) => accumulator + value.quantity * value.price, 0);

console.log(totalPrice);



const names = ['Daniel', 'Maria', 'Marta', 'Juca', 'João', 'Jéssica'];

const namesCount = names.reduce((accumulator, value) => {
    const test = value.charAt(0).toLowerCase();
    accumulator[test] ? accumulator[test]++ : accumulator[test] = 1;

    return accumulator;
}, {});

console.log(namesCount);



const person = [
    { name: 'Daniel', age: 28 },
    { name: 'Maria', age: 29 },
    { name: 'Marta', age: 29 },
];

const agePerson = person.reduce((accumulator, value) => {
    if(accumulator[value.age]) {
        accumulator[value.age].push(value.name);
    } else {
        accumulator[value.age] = [];
        accumulator[value.age].push(value.name);
    }

    return accumulator;
}, {});

console.log(agePerson);



const testNumbers = [-10, 0, 2, 4];

const doublePositive = testNumbers.reduce( (accumulator, value) => {
    if(value > 0) {
        accumulator.push(value * 2);
    }
    
    return accumulator;
}, []);

console.log(doublePositive);



const name02 = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

const fullName02 = name02.reduceRight((accumulator, value) => {
	return accumulator + value + ' ';
}, '');

console.log(fullName02);